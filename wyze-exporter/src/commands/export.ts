import {Args, Command, Flags} from '@oclif/core'

export default class Export extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    metricsServer: Flags.boolean({char: 'm', description: 'Start Metrics Server'}),
    daemon: Flags.boolean({char: 'd', description: 'Run as a Daemon'}),
  }

  static args = {
    file: Args.string({description: 'file to read'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Export)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/sheldon/repos/imshelledin21/wyze-exporter/wyze-exporter/src/commands/export.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
