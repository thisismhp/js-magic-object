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

}, {
    isAsync: false
});
``` 

### Or

```bash
const magicObject = new MagicObject(async (path, args) => {

}, {
    isAsync: true
});
``` 

```bash

magicObject.foo.bar.some(1, 'string', {}, [], null);

```
