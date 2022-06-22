# testing

Testing using Jest and Vitest


- KISS: fail easy to easy debug

- Only test one thing/feature/behaviour (validate input OR transform it)

- Arrange, Act, Assert

- Don't test 3d party code (fetch(), querySelector() ecc..)

`npm install vitest --save-dev`

in `package.json` use

- for `server` testing, default environment `node`

```
"scripts": {
    "test": "vitest --run --reporter verbose",
    "test:watch": "vitest"
  },
```

- for `client` testing, environment `jsdom` (jest) `happy-dom` (vitest)

```
"scripts": {
    "test": "vitest --run --environment happy-dom"
    },
```

`npm test`

https://vitest.dev/

https://vitest.dev/guide/migration.html

https://testing-library.com/
