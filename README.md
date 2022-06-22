# testing

Testing using Jest and Vitest


- KISS: fail easy to easy debug

- Only test one thing/feature/behaviour (validate input OR transform it)

- Arrange, Act, Assert

- Don't test 3d party code (fetch(), querySelector() ecc..)

`npm install vitest --save-dev`

in `package.json` use

- for `server` testing, default enviroment `node`

```
"scripts": {
    "test": "vitest --run --reporter verbose",
    "test:watch": "vitest"
  },
```

- for `client` testing, enviroment `jsdom` (jest) `happy-dom` (vitest)

```
"scripts": {
    "test": "vitest --run --enviroment happy-dom"
    },
```

`npm test`
