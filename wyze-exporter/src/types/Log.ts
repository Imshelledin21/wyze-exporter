import { File } from "../utils/file"

export class Log {
    public DateTime!: string
    public Device!: string
    public DeviceType!: string
    public Message!: string
    public AdditionalData!: {}

    public async WriteLog(datetime: string, device: string, device_type: string, message: string, additionalData?: {}) {
        this.DateTime = datetime
        this.Device = device
        this.DeviceType = device_type
        this.Message= message
        if (additionalData){
            this.AdditionalData = additionalData
        }

        const file = new File();

        let fileContents = await file.read("/tmp/wyze-exporter/log.txt")
        fileContents = fileContents + `\n${JSON.stringify(this)}`

        await file.write("/tmp/wyze-exporter/log.txt", fileContents)
    }
}