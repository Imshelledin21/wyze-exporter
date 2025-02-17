export class RunConfig {
    public RunAsDaemon: boolean
    public StartMetricServer: boolean
    public UserName!: string
    public Password!: string
    public ApiKey!: string
    public KeyId!: string
    public DeviceNames!: Array<string>

    /**
     *
     */
    constructor(runAsDaemon: boolean,
                startMetricServer: boolean,
                userName: string | any,
                password: string | any,
                apiKey: string | any,
                keyId: string | any,
                deviceNames: Array<string> | any,) {
        this.RunAsDaemon = runAsDaemon
        this.StartMetricServer = startMetricServer
        this.UserName = userName
        this.Password = password
        this.ApiKey = apiKey
        this.KeyId = keyId
        this.DeviceNames = deviceNames
    }
}