# babel-plugin-void

Throw away your codes 🚮

## Install

`npm install -D babel-plugin-void`

or

`yarn add -D babel-plugin-void`

## Usage

.babelrc

```
{
  "plugins": [
    "void"
  ]
}
```

__input__

```javascript
// your codes here
class A {}
function a() {}
const b = 1;
```

↓↓↓↓↓

__output__

```javascript
```
