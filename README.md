# Desafío 21

## Testeamos nuestra API

Agregué testing de algunos controllers utilizando **Jest**, generé las Requests con **axios**.

```console
test
└── controllers
    ├── other.test.js
    └── product.test.js
```

Para correr los tests se puede ejecutar los siguientes comandos _(debe estár levantado el servidor)_

### `npm run test`

Este comando mostrará por terminal los resultados.


### `npm run testReport`

Mostrará los resultados por terminal y además guardará en la carpeta **_testresults_** un archivo con los resultados.


```console
cat testresults/TestResults.txt
                                                       
PASS test/controllers/other.test.js
PASS test/controllers/product.test.js

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.794 s, estimated 1 s
Ran all test suites.
```