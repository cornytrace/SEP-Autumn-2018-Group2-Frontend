# SEP Autumn 2018 Group 2 EIT-Dashboard

[![Build Status](https://travis-ci.com/cornytrace/SEP-Autumn-2018-Group2-Frontend.svg?token=ksRe83PxhypHvSJboCmE&branch=master)](https://travis-ci.com/cornytrace/SEP-Autumn-2018-Group2-Frontend)

## View the latest build of the site on:
## https://cornytrace.github.io/SEP-Autumn-2018-Group2-Frontend

## Installation

### Preparation

Install Node and NPM: https://nodejs.org/en/
Either version is fine.

If you use Visual Studio Code, install the ESLint extension and add the following to your preferences:

``` json
"editor.formatOnSave": true,
"eslint.validate": [
    {
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    },
],
"eslint.autoFixOnSave": true
```  

This will ensure that your code is automatically fixed to conform to our coding style.

If you use another editor, follow their instructions to enable ESLint and to enable fix-on-save.

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/cornytrace/SEP-Autumn-2018-Group2 eit-dash

# go into app's directory
$ cd eit-dash

```

## Frontend

``` bash
cd frontend

# install app's dependencies
$ npm install
```

### Usage

``` bash
# run the site with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# run linter
npm run lint

# run unit tests
npm run test:unit

# run e2e tests
npm run test:e2e

```

To bypass the frontend login use the username "test". This will use an invalid token, so requests to the backend will not work.

## Backend

TODO: Choose backend

## Documentation

[Vue CLI Guide](https://cli.vuejs.org/guide/)

[CoreUI](http://coreui.io/)'s documentation
