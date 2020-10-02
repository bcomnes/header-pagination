# header-pagination
[![Actions Status](https://github.com/bcomnes/header-pagination/workflows/tests/badge.svg)](https://github.com/bcomnes/header-pagination/actions)

Parse rfc5988 style pagination Link headers from a [`fetch`][fetch] [`Response`][response] object.

```
npm install header-pagination
```

## Usage

``` js
import { getPagination } from 'header-pagination'

window.fetch(req).then(async response => {
  const pagination = getPagination(response.headers)
  // {
  //    last,
  //    next,
  //    prev,
  //    first,
  //    current,
  //    total (if X-Total-Count is included)
  // }
  const json = await response.json()
  return {pagination, json}
})
```

## API

### `getPagination(response)`

Given a [`fetch`][fetch] [`Response`][response], returns an object with the following properties:

```js
{
  last,
  next,
  prev,
  first,
  current,
  total // if X-Total-Count is included
}
```

## See also

- [netlify/micro-api-client](https://github.com/netlify/micro-api-client): Extracted from netlify's Micro-api-client.
- [developer.github.com/v3/#pagination](https://developer.github.com/v3/#pagination): Github style pagination.
- [rfc5988-section 5][rfc5988]: Spec describing the use of `Link rel=` headers.

## License

MIT


[response]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[rfc5988]: https://tools.ietf.org/html/rfc5988#section-5
