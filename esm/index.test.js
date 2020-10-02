import tap from 'tap'
import { getPagination } from './index.js'
import fetch from 'node-fetch'

tap.test('header extraction', async (t) => {
  const response = await fetch('https://api.github.com/users/bcomnes/repos')

  const pagination = getPagination(response.headers)
  t.ok(pagination.next)
  t.ok(pagination.last)
  t.ok(pagination.current)
  await response.json() /* consume */
})
