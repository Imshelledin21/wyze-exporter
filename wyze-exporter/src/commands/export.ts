import {Args, Command, Flags} from '@oclif/core'
import { WyzeExporter } from '../classes/wyze-exporter'
import { RunConfig } from '../types/RunConfig'

export default class Export extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    metricsServer: Flags.boolean({char: 'm', description: 'Start Metrics Server'}),
    daemon: Flags.boolean({char: 'd', description: 'Run as a Daemon'}),
    username: Flags.string({char: 'u', description: 'Wyze Account Email'}),
    password: Flags.string({char: 'p', description: 'Wyze Account Password'})
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Export)

    const runtimeConfigs = await this.SetRunConfig()
    const wyzeExporter = new WyzeExporter(runtimeConfigs)

    wyzeExporter.FetchDeviceDetails()
  }

  private async SetRunConfig() : Promise<RunConfig> {
    const {args, flags} = await this.parse(Export)
    const runConfig = new RunConfig(flags.daemon, flags.metricsServer, flags.username, flags.password)

    return runConfig
  }
}
