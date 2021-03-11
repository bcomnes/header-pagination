'use strict';
const tap = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('tap'))
const { getPagination } = require('./index.js')
const fetch = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('node-fetch'))

tap.test('header extraction', async (t) => {
  const response = await fetch('https://api.github.com/users/bcomnes/repos')

  const pagination = getPagination(response.headers)
  t.ok(pagination.next)
  t.ok(pagination.last)
  t.ok(pagination.current)
  await response.json() /* consume */
})
