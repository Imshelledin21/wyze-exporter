import { Counter, Gauge, register } from "prom-client";

export class Metrics {

    public CreateCounter(name: string, help: string, labels: Array<string>) : Counter{
        const counter = new Counter({
            name: name,
            help: help,
            labelNames: labels
        })

        return counter
    }

    public CreateGauge(name: string, help: string, labels: Array<string>){
        const gauge = new Gauge({
            name: name,
            help: help,
            labelNames: labels
        })

        return gauge
    }

    public async RegisterMetric(){
        console.log(await register.metrics())
    }
}