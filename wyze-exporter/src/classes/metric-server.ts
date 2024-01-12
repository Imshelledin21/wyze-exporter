import * as express from 'express'
import { register } from "prom-client"

export class MetricsServer {

    public StartServer() {
        const server = express()
        server.get('/metrics', async (req, res) => {
            try {
                res.set('Content-Type', register.contentType);
                res.end(await register.metrics());
            } catch (ex) {
                res.status(500).end(ex);
            }
        })

        const port = 3000

        server.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`)
        })

    }
}