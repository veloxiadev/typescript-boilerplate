# Typescript Boilerplate

## Install

### Clone the repository

```bash
git clone git@github.com:hello ts-boilerplate
```

### cd into the new project directory

```bash
cd ts-boilerplate
```

### Install the dependencies

```bash
yarn
```

## Usage

The `tsc` command is required to compile Typescript files. Install it globally:

```bash
yarn global add typescript
```

The source files are located in `/src`. To compile the files and generate javascript, run `yarn build`. By default, the `yarn build` command will generate javascript files together with documentation (in the `/docs` directory).

To run with Node JS, require your compiled code from the `/dist` directory like so:

```javascript
const { writeMessage } = require("./dist/index");
```
