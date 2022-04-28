# React Template

## Using the Generator

This scaffolding tool is a [yeoman](https://yeoman.io/) generator, and requires that `yo` be installed. After installing `yo`, run the following commands.

```sh
npm install -g yo
```

### Install the Generator

#### NPM

```sh
npm install -g generator-create-react-template
```

#### Yarn

```sh
yarn global add generator-create-react-template
```

### Scaffold a New React Template

To begin the scaffolding process:

```sh
yo create-react-template
```

At this stage, you will be prompted to provide the following:

- Application name, any text of your choosing
- Yarn, yes or no

### With Options

Generate with react:

```sh
yo create-react-template --react
```

with react antd:

```sh
yo create-react-template --react-antd
```

The generator will attempt to install dependencies for you by default, though this operation can be disabled:

```sh
yo create-react-template --skip-install
```
