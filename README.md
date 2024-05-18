NodeJS proxy which adds CORS headers to the proxied request.

```
Request examples:

* `http://localhost:8080/http://google.com/` - Google.com with CORS headers
* `http://localhost:8080/google.com` - Same as previous.
* `http://localhost:8080/google.com:443` - Proxies `https://google.com/`
* `http://localhost:8080/` - Shows usage text, as defined in `lib/help.txt`
* `http://localhost:8080/favicon.ico` - Replies 404 Not found
```
