export class RunConfig {
    public RunAsDaemon: boolean
    public StartMetricServer: boolean
    public UserName!: string
    public Password!: string

    /**
     *
     */
    constructor(runAsDaemon: boolean,
                startMetricServer: boolean,
                userName: string | any,
                password: string | any) {
        this.RunAsDaemon = runAsDaemon
        this.StartMetricServer = startMetricServer
        this.UserName = userName
        this.Password = password        
    }
}