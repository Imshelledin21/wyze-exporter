import {Args, Command, Flags} from '@oclif/core'
import { MetricsServer } from '../../classes/metric-server'
import { RunConfig } from '../../types/RunConfig'

export default class WyzeMetrics extends Command {
  static override args = {
    file: Args.string({description: 'file to read'}),
  }
  static override description = 'describe the command here'
  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static override flags = {
    // flag with a value (-n, --name=VALUE)
    device_name: Flags.string({
      char: 'd', 
      description: 'name to print',
      multiple: true,
      required: true
    }),
    daemon: Flags.boolean({
      char: 'm',
      description: 'Run as a daemon',
      default: true,
    }),
    metricsServer: Flags.boolean({
      char: 's',
      default: true
    }),
    username: Flags.string({
      char: 'u',
      env: 'WYZE_USERNAME'
    }),
    password: Flags.string({
      char: 'p',
      env: 'WYZE_PASSWORD'
    }),
    apiKey: Flags.string({
      char: 'a',
      env: 'WYZE_API_KEY'
    }),
    keyId: Flags.string({
      char: 'k',
      env: 'WYZE_KEY_ID'
    })
  }

  public async run(): Promise<void> {
    const runtimeConfigs = await this.SetRunConfig()

    const {args, flags} = await this.parse(WyzeMetrics)
    console.log(`Device Names: ${flags.device_name}`)

    const server = new MetricsServer(runtimeConfigs)
    server.StartServer()

  }

  private async SetRunConfig() : Promise<RunConfig> {
    const {args, flags} = await this.parse(WyzeMetrics)
    const runConfig = new RunConfig(flags.daemon, flags.metricsServer, flags.username, flags.password, flags.apiKey, flags.keyId, flags.device_name)

    return runConfig
  }
}
