## Crear proyecto básico express typescript

### Paso 1 - Inicializar proyecto

```
npm init
npm init -y
```

### Paso 2 - Generar configuración typescript

```
"scripts": {
  tsc = "tsc"
}

npm run tsc -- --init
```

### Paso 3 - tsconfig.json

```
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "rootDir": "src",
    "sourceMap": true,
    "outDir": "dist",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### Paso 4 - Instalar

```
npm i -S express

npm i -D @types/express

npm i -G ts-node

npm i -D tsconfig-paths
```

### Paso 5 - Crear carpeta src y archivo app.ts

```
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### Paso 6 - Modificar package.json

});

```
{
  "main": "app.ts",
  "scripts": {
    "start": "npx ts-node src/app.ts"
  }
}
});
```

### Paso 7 - Configurar debugging

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "runtimeArgs": ["-r", "ts-node/register", "-r", "tsconfig-paths/register"],
      "program": "${workspaceFolder}/src/app.ts"
    }
  ]
}
```

### Paso 8 - Configurar eslint

```
npm init @eslint/config
```

## Configurar jest 

```
npm i -D jest ts-jest @types/jest
```

```
npx ts-jest config:init
```

En package.json
```
  "scripts": {
    "test": "jest --coverage"
  }
```