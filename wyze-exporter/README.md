wyze-prom-exporter
=================

Promtheus metrics for monitoring Wyze devices


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wyze-prom-exporter.svg)](https://npmjs.org/package/wyze-prom-exporter)
[![Downloads/week](https://img.shields.io/npm/dw/wyze-prom-exporter.svg)](https://npmjs.org/package/wyze-prom-exporter)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wyze-prom-exporter
$ wyze-prom-exporter COMMAND
running command...
$ wyze-prom-exporter (--version)
wyze-prom-exporter/0.0.0 linux-x64 node-v23.7.0
$ wyze-prom-exporter --help [COMMAND]
USAGE
  $ wyze-prom-exporter COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wyze-prom-exporter hello PERSON`](#wyze-prom-exporter-hello-person)
* [`wyze-prom-exporter hello world`](#wyze-prom-exporter-hello-world)
* [`wyze-prom-exporter help [COMMAND]`](#wyze-prom-exporter-help-command)
* [`wyze-prom-exporter plugins`](#wyze-prom-exporter-plugins)
* [`wyze-prom-exporter plugins add PLUGIN`](#wyze-prom-exporter-plugins-add-plugin)
* [`wyze-prom-exporter plugins:inspect PLUGIN...`](#wyze-prom-exporter-pluginsinspect-plugin)
* [`wyze-prom-exporter plugins install PLUGIN`](#wyze-prom-exporter-plugins-install-plugin)
* [`wyze-prom-exporter plugins link PATH`](#wyze-prom-exporter-plugins-link-path)
* [`wyze-prom-exporter plugins remove [PLUGIN]`](#wyze-prom-exporter-plugins-remove-plugin)
* [`wyze-prom-exporter plugins reset`](#wyze-prom-exporter-plugins-reset)
* [`wyze-prom-exporter plugins uninstall [PLUGIN]`](#wyze-prom-exporter-plugins-uninstall-plugin)
* [`wyze-prom-exporter plugins unlink [PLUGIN]`](#wyze-prom-exporter-plugins-unlink-plugin)
* [`wyze-prom-exporter plugins update`](#wyze-prom-exporter-plugins-update)

## `wyze-prom-exporter hello PERSON`

Say hello

```
USAGE
  $ wyze-prom-exporter hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ wyze-prom-exporter hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/imshelledin21/wyze-prom-exporter/blob/v0.0.0/src/commands/hello/index.ts)_

## `wyze-prom-exporter hello world`

Say hello world

```
USAGE
  $ wyze-prom-exporter hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ wyze-prom-exporter hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/imshelledin21/wyze-prom-exporter/blob/v0.0.0/src/commands/hello/world.ts)_

## `wyze-prom-exporter help [COMMAND]`

Display help for wyze-prom-exporter.

```
USAGE
  $ wyze-prom-exporter help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for wyze-prom-exporter.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.25/src/commands/help.ts)_

## `wyze-prom-exporter plugins`

List installed plugins.

```
USAGE
  $ wyze-prom-exporter plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ wyze-prom-exporter plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/index.ts)_

## `wyze-prom-exporter plugins add PLUGIN`

Installs a plugin into wyze-prom-exporter.

```
USAGE
  $ wyze-prom-exporter plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into wyze-prom-exporter.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the WYZE_PROM_EXPORTER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the WYZE_PROM_EXPORTER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ wyze-prom-exporter plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ wyze-prom-exporter plugins add myplugin

  Install a plugin from a github url.

    $ wyze-prom-exporter plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ wyze-prom-exporter plugins add someuser/someplugin
```

## `wyze-prom-exporter plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ wyze-prom-exporter plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ wyze-prom-exporter plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/inspect.ts)_

## `wyze-prom-exporter plugins install PLUGIN`

Installs a plugin into wyze-prom-exporter.

```
USAGE
  $ wyze-prom-exporter plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into wyze-prom-exporter.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the WYZE_PROM_EXPORTER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the WYZE_PROM_EXPORTER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ wyze-prom-exporter plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ wyze-prom-exporter plugins install myplugin

  Install a plugin from a github url.

    $ wyze-prom-exporter plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ wyze-prom-exporter plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/install.ts)_

## `wyze-prom-exporter plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ wyze-prom-exporter plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ wyze-prom-exporter plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/link.ts)_

## `wyze-prom-exporter plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ wyze-prom-exporter plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ wyze-prom-exporter plugins unlink
  $ wyze-prom-exporter plugins remove

EXAMPLES
  $ wyze-prom-exporter plugins remove myplugin
```

## `wyze-prom-exporter plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ wyze-prom-exporter plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/reset.ts)_

## `wyze-prom-exporter plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ wyze-prom-exporter plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ wyze-prom-exporter plugins unlink
  $ wyze-prom-exporter plugins remove

EXAMPLES
  $ wyze-prom-exporter plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/uninstall.ts)_

## `wyze-prom-exporter plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ wyze-prom-exporter plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ wyze-prom-exporter plugins unlink
  $ wyze-prom-exporter plugins remove

EXAMPLES
  $ wyze-prom-exporter plugins unlink myplugin
```

## `wyze-prom-exporter plugins update`

Update installed plugins.

```
USAGE
  $ wyze-prom-exporter plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.33/src/commands/plugins/update.ts)_
<!-- commandsstop -->
