import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('wyze:metrics', () => {
  it('runs wyze:metrics cmd', async () => {
    const {stdout} = await runCommand('wyze:metrics')
    expect(stdout).to.contain('hello world')
  })

  it('runs wyze:metrics --name oclif', async () => {
    const {stdout} = await runCommand('wyze:metrics --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
