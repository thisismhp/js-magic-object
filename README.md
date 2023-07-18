# Javascrpit magic object library

## Install

```bash
npm install magic-object
```


## Usage

```bash
const MagicObject = require('magic-object');
```

```bash
const magicObject = new MagicObject((path, args) => {
    return {path, args};
});

console.log(magicObject.foo.bar(1)); // output: {path: ['foo', 'bar'], args: [1]}
``` 

### Or

```bash
const magicObject = new MagicObject(async (path, args) => {
    return {path, args};
});

console.log(await magicObject.foo.bar(1)); // output: {path: ['foo', 'bar'], args: [1]}
```
