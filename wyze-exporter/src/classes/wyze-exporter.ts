import { timeStamp } from "console";
import { Log } from "../types/Log";
import { RunConfig } from "../types/RunConfig";
import { MetricsServer } from "./metric-server";
import { Metrics } from "./metrics";
import { Wyze } from "./wyze";

export class WyzeExporter {
    private RunConfig: RunConfig

    constructor(runConfig: RunConfig) {
        this.RunConfig = runConfig

        const metricsServer = new MetricsServer()
        metricsServer.StartServer()
    }


    public FetchDeviceDetails(){

        const options = {
            username: this.RunConfig.UserName,
            password: this.RunConfig.Password
        }

        const wyze = new Wyze(options)

        ; (async () => {
          let device, state, result

          try {
              await wyze.login()
          } catch (e) {
              console.error(e)
          }

          const devicesToMonitor = new Array("Chicken Yard", "Chicken Coop", "Chicken Run", "Chicken Coop Door", "Chicken Run Door")

          //console.log(devices)

         const metrics = new Metrics()
         const deviceStateGauge = metrics.CreateGauge("wyze_device_state", "State of the Wyze Device", new Array<string>("device_name", "device_type"))
         const deviceStateChangeTime = metrics.CreateGauge("wyze_device_state_change_time", "Time when Device State Changed", new Array<string>("device_name", "device_type"))
         while (true) {
          for (const d of devicesToMonitor) {
                  const device = await wyze.getDeviceByName(d)
                  console.log(device)

                  const state = await wyze.getDeviceState(device)
                  deviceStateGauge.labels(device.nickname, device.product_type).set(state)

                  if (device.product_type === 'ContactSensor'){
                    deviceStateChangeTime.labels(device.nickname, device.product_type).set(device.device_params.open_close_state_ts)
                  }
                  if (device.product_type === 'Camera') {
                    const log = new Log()
                    log.WriteLog(timeStamp.toString(), device.nickname, device.product_type, "Camera Snapshot", {"snapshot_url":device.device_params.camera_thumbnails.thumbnails_url})
                  }
                  await metrics.RegisterMetric()
                  console.log(`${device.nickname} is ${state}`)
              };
              await sleep(300000)
          }


          // Get all Wyze devices
        })()

        function sleep(ms: number) {
          return new Promise((resolve) => {
              setTimeout(resolve, ms)
          })
        }
    }
}