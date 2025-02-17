import { Request, Response, NextFunction } from 'express'
import { WyzeExporter } from './wyze-exporter'
import { RunConfig } from '../types/RunConfig'
import { register } from 'prom-client'

export class MetricsServer {
  private wyzeExporter: WyzeExporter
  private runConfig: RunConfig

  constructor(runConfig: RunConfig) {
    this.runConfig = runConfig
    this.wyzeExporter = new WyzeExporter(this.runConfig)
  }

  public async StartServer(): Promise<void> {
    const express = require('express')
    const app = express()
    
    // Handling GET /hello request
    app.get("/metrics", async (req: Request, res: Response, next: NextFunction) => {
        try {
            let response = this.wyzeExporter.FetchDeviceDetails()
            let metrics = await register.metrics()
            console.log(metrics)
            res.set('Content-Type', register.contentType)
            res.end(await register.metrics())
        } catch (ex) {
            res.status(500).end(ex)
        } 
    })
    
    // Server setup
    app.listen(3000, () => {
        console.log("Server is Running")
    })
  }
}