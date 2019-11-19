import tape from 'tape';
import ptape from 'tape-promise';
import { getPagination } from './main';
import fetch from 'node-fetch';
const test = ptape(tape);

test('header extraction', t => {
  return fetch('https://api.github.com/users/bcomnes/repos')
    .then(async response => {
      const pagination = getPagination(response);
      t.ok(pagination.next);
      t.ok(pagination.last);
      t.ok(pagination.current);
      const json = await response.json();
      return { pagination, json };
    })
    .catch(t.error);
});
