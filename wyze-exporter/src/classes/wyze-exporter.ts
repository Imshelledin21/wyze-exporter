import { timeStamp } from "console";
import { Log } from "../types/Log";
import { RunConfig } from "../types/RunConfig";
import { Metrics } from "./metrics";
import { Gauge, register } from "prom-client"

export class WyzeExporter {
    private RunConfig: RunConfig
    private deviceStateGauge: Gauge
    private deviceStateChangeTime: Gauge
    private metrics: Metrics

    constructor(runConfig: RunConfig) {
        register.clear()
        this.RunConfig = runConfig

        this.metrics = new Metrics()

        this.deviceStateGauge = this.metrics.CreateGauge("wyze_device_state", "State of the Wyze Device", new Array<string>("device_name", "device_type"))
        this.deviceStateChangeTime = this.metrics.CreateGauge("wyze_device_state_change_time", "Time when Device State Changed", new Array<string>("device_name", "device_type"))
    }


    public FetchDeviceDetails(){

        const options = {
            username: this.RunConfig.UserName,
            password: this.RunConfig.Password,
            keyId: this.RunConfig.KeyId,
            apiKey: this.RunConfig.ApiKey,
            persistPath: "./"
        }
        const Wyze = require("wyze-api")
        const wyze = new Wyze(options)

        ; (async () => {
          let device, state, result


        for (const d of this.RunConfig.DeviceNames) {
                const device = await wyze.getDeviceByName(d)
                //console.log(device)

                const state = await wyze.getDeviceState(device)
                let deviceState = state == "on" || state == "open" ? 1 : 0
                this.deviceStateGauge.labels(device.nickname, device.product_type).set(deviceState)

                if (device.product_type === 'ContactSensor'){
                  this.deviceStateChangeTime.labels(device.nickname, device.product_type).set(device.device_params.open_close_state_ts)
                }
                if (device.product_type === 'Camera') {
                  const log = new Log()
                  log.WriteLog(timeStamp.toString(), device.nickname, device.product_type, "Camera Snapshot", {"snapshot_url":device.device_params.camera_thumbnails.thumbnails_url})
                }
                await this.metrics.RegisterMetric()
                console.log(`${device.nickname} is ${state}`)
            };

          // Get all Wyze devices
        })()
    }
}