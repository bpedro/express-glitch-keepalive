# express-glitch-keepalive

An [Express](http://expressjs.com/) middleware that keeps your [Glitch](https://glitch.com/) project alive.

Inspired by [koa-glitch-keepalive](https://github.com/matzkoh/koa-glitch-keepalive).

## Installation

`npm i --save express express-glitch-keepalive`

## Usage

```js
const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);

app.get('/', (req, res) => {
  res.json('Ok');
});
```
