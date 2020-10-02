'use strict';
const tap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('tap'))
const { getPagination } = require('./index.js')
const fetch = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('node-fetch'))

tap.test('header extraction', async (t) => {
  const response = await fetch('https://api.github.com/users/bcomnes/repos')

  const pagination = getPagination(response.headers)
  t.ok(pagination.next)
  t.ok(pagination.last)
  t.ok(pagination.current)
  await response.json() /* consume */
})
