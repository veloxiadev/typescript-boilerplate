[![TypeScript version][ts-badge]][typescript-38]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - Travis][travis-badge]][travis-ci]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

# Typescript Boilerplate

## Install

### Clone the repository

```bash
git clone git@github.com:veloxiadev/typescript-boilerplate.git ts-project
```

### `cd` into the new project directory

```bash
cd ts-project
```

### Install the dependencies

```bash
npm install
```

## Usage

The `tsc` command is required to compile Typescript files. Install it globally:

```bash
npm install -g typescript
```

The source files are located in `/src`. To compile the files and generate javascript, run `yarn build`. By default, the `yarn build` command will generate javascript files (in the `/dist` directory) together with documentation (in the `/docs` directory).

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[travis-badge]: https://travis-ci.org/veloxiadev/typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/veloxiadev/typescript-boilerplate.svg?branch=master
[gha-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fveloxiadev%2Ftypescript-boilerplate%2Ftypescript-boilerplate%2Fbadge&style=flat
[gha-ci]: https://github.com/veloxiadev/typescript-boilerplate/actions
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/veloxiadev/typescript-boilerplate/blob/master/LICENSE
