oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wyze-exporter
$ wyze COMMAND
running command...
$ wyze (--version)
wyze-exporter/0.0.0 linux-x64 node-v18.17.1
$ wyze --help [COMMAND]
USAGE
  $ wyze COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wyze hello PERSON`](#wyze-hello-person)
* [`wyze hello world`](#wyze-hello-world)
* [`wyze help [COMMANDS]`](#wyze-help-commands)
* [`wyze plugins`](#wyze-plugins)
* [`wyze plugins:install PLUGIN...`](#wyze-pluginsinstall-plugin)
* [`wyze plugins:inspect PLUGIN...`](#wyze-pluginsinspect-plugin)
* [`wyze plugins:install PLUGIN...`](#wyze-pluginsinstall-plugin-1)
* [`wyze plugins:link PLUGIN`](#wyze-pluginslink-plugin)
* [`wyze plugins:uninstall PLUGIN...`](#wyze-pluginsuninstall-plugin)
* [`wyze plugins reset`](#wyze-plugins-reset)
* [`wyze plugins:uninstall PLUGIN...`](#wyze-pluginsuninstall-plugin-1)
* [`wyze plugins:uninstall PLUGIN...`](#wyze-pluginsuninstall-plugin-2)
* [`wyze plugins update`](#wyze-plugins-update)

## `wyze hello PERSON`

Say hello

```
USAGE
  $ wyze hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/imshelledin21/wyze-exporter/blob/v0.0.0/src/commands/hello/index.ts)_

## `wyze hello world`

Say hello world

```
USAGE
  $ wyze hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ wyze hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/imshelledin21/wyze-exporter/blob/v0.0.0/src/commands/hello/world.ts)_

## `wyze help [COMMANDS]`

Display help for wyze.

```
USAGE
  $ wyze help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for wyze.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.9/src/commands/help.ts)_

## `wyze plugins`

List installed plugins.

```
USAGE
  $ wyze plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ wyze plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/index.ts)_

## `wyze plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ wyze plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ wyze plugins add

EXAMPLES
  $ wyze plugins add myplugin 

  $ wyze plugins add https://github.com/someuser/someplugin

  $ wyze plugins add someuser/someplugin
```

## `wyze plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ wyze plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ wyze plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/inspect.ts)_

## `wyze plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ wyze plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ wyze plugins add

EXAMPLES
  $ wyze plugins install myplugin 

  $ wyze plugins install https://github.com/someuser/someplugin

  $ wyze plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/install.ts)_

## `wyze plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ wyze plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ wyze plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/link.ts)_

## `wyze plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ wyze plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ wyze plugins unlink
  $ wyze plugins remove

EXAMPLES
  $ wyze plugins remove myplugin
```

## `wyze plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ wyze plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/reset.ts)_

## `wyze plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ wyze plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ wyze plugins unlink
  $ wyze plugins remove

EXAMPLES
  $ wyze plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/uninstall.ts)_

## `wyze plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ wyze plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ wyze plugins unlink
  $ wyze plugins remove

EXAMPLES
  $ wyze plugins unlink myplugin
```

## `wyze plugins update`

Update installed plugins.

```
USAGE
  $ wyze plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/src/commands/plugins/update.ts)_
<!-- commandsstop -->
