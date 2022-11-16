### Install typescript

`npm install -g typescript`

### Create tsconfig.json

```
    {
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  }
}

```

### Create typescript file(.ts)

### Transpile
 - tsc -t ES2016 relative_path.ts
 - node relative_path.js

`tsc {file}.ts`
