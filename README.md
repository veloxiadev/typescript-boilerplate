[![TypeScript version][ts-badge]][typescript-38] [![Node.js version][nodejs-badge]][nodejs] [![Build Status - Travis][travis-badge]][travis-ci] [![Node.js CI][ga-badge]][ga-ci]

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
# Yarn
yarn
# NPM
npm install
```

## Usage

The `tsc` command is required to compile Typescript files. Install it globally:

```bash
# Yarn
yarn global add typescript --prefix /usr/local
# NPM
npm install --global typescript
```

The source files are located in `/src`. To compile the files and generate javascript, run `yarn build`. By default, the `yarn build` command will generate javascript (Node) files (in the `/lib` directory). The `yarn bundle` command will output a minified bundle in the `/dist` directory. 

## Commands

```bash
# Build module
yarn build

# Build module and recompile when files are changed
yarn watch

# Bundle for web usage
yarn bundle

# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Lint
yarn lint
```

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[travis-badge]: https://travis-ci.org/veloxiadev/typescript-boilerplate.svg?branch=master
[travis-ci]: https://travis-ci.org/github/veloxiadev/typescript-boilerplate
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[ga-badge]: https://github.com/veloxiadev/typescript-boilerplate/workflows/Node.js%20CI/badge.svg
[ga-ci]: https://github.com/veloxiadev/typescript-boilerplate/actions
