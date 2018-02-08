# secure-random-user-agent

> Get a random user agent securely (yeah it's silly).

![Node version](https://img.shields.io/node/v/secure-random-user-agent.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/secure-random-user-agent.svg?branch=master)](https://travis-ci.org/ralphtheninja/secure-random-user-agent)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
$ npm i secure-random-user-agent -S
```

## Usage

```js
const agent = require('secure-random-user-agent')
console.log(agent())
console.log(agent())
console.log(agent())
```

```
Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.12) Gecko/20101102 Firefox/3.6.12
Mozilla/5.0 (X11; U; Linux i686; de-DE; rv:1.9.2.8) Gecko/20100725 Gentoo Firefox/3.6.8
Mozilla/5.0 (X11; U; Linux; en-US; rv:1.9.1.11) Gecko/20100720 Firefox/3.5.11
```

## API

### `const agent = require('secure-random-user-agent')`

Exports a single function which returns a random user agent. Uses [`slump`](https://github.com/ralphtheninja/slump) under the hood, which in turn is based on [`sodium-universal`](https://github.com/sodium-friends/sodium-universal#readme). Works in node.js and in the browser.

## License

MIT
