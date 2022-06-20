# testing

Testing using Jest and Vitest


- KISS: fail easy to easy debug

- Only test one thing/feature/behaviour (validate input OR transform it)

- Arrange, Act, Assert

- Don't test 3d party code (fetch(), querySelector() ecc..)

`npm install vitest --save-dev`

in `package.json` use

```
"scripts": {
    "test": "vitest --run --reporter verbose",
	"test:watch": "vitest"
  },
```

`npm test`