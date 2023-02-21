<div align="center">
  <h1>npm-install-block ✍️</h1>
  <p>Display commands to install npm packages using multiple package managers</p>
</div>

<div align="center">
  <a href="https://github.com/HiDeoo/npm-install-block/actions/workflows/integration.yml">
    <img alt="Integration Status" src="https://github.com/HiDeoo/npm-install-block/actions/workflows/integration.yml/badge.svg" />
  </a>
  <a href="https://github.com/HiDeoo/npm-install-block/blob/main/LICENSE">
    <img alt="License" src="https://badgen.net/github/license/HiDeoo/npm-install-block" />
  </a>
  <br />
</div>

## Features

A [GitHub Block](https://blocks.githubnext.com) to embed the command to install npm packages using multiple package managers in Markdown files based on the `name` field from a `package.json` file.

The following package managers are supported:

- [npm](https://docs.npmjs.com/cli)
- [yarn](https://yarnpkg.com)
- [pnpm](https://pnpm.io)
- [ni](https://github.com/antfu/ni)
- [bun](https://bun.sh)

> **Warning**
>
> GitHub Blocks is currently an experimental technical preview. It is not available to all GitHub users and may change at any time.

## Planned Features

GitHub Blocks is still in **early development** and same goes for this GitHub Block. The following features are eventually planned:

- Support for installing development dependencies.
- Support for specifying arbitrary package manager commands.
- A copy button to copy the command to the clipboard.
- Peer dependency support with respect of the `peerDependenciesMeta` field.
- Theme support (the GitHub Blocks UI does not yet support themes).

## Limitations

It is currently not possible to customize the options, e.g. indicating that the package should be installed as a development dependency, of the GitHub Block directly from Markdown but some sort of "instance" state allowing this kind of customization is on the roadmap.

## Example

> **Note**
>
> The example below requires a GitHub account with access to the GitHub Blocks technical preview. A screenshot is provided as an alternative.

- [Embedded in a README file.](https://blocks.githubnext.com/HiDeoo/npm-install-block/blob/main/examples/README.md)

![Embedded in a README file.](https://user-images.githubusercontent.com/494699/220434780-86f4551d-2ccb-4b6f-b044-6d96dce09abb.png)

## License

Licensed under the MIT License, Copyright © HiDeoo.

See [LICENSE](https://github.com/HiDeoo/npm-install-block/blob/main/LICENSE) for more information.
