# @abai/hastebin
<img src="https://img.shields.io/npm/v/@abai/hastebin.svg"> <img src="https://img.shields.io/npm/dt/@abai/hastebin.svg">  <img src="https://img.shields.io/github/languages/code-size/cringiest/hastebin.svg"> <img src="https://img.shields.io/npm/l/@abai/hastebin.svg">

@abai/hastebin is an asynchronous module for creating hastebins <a href="https://yarn.pm/@abai/hastebin">https://yarn.pm/@abai/hastebin</a>

## Installation
```bash
yarn add @abai/hastebin
```

## Usage
```js
import hastebin from '@abai/hastebin';

hastebin('your code here', { extension: 'txt' /* not required */ })
  .then((haste) => {
    console.log(haste); // https://hastebin.com/example.txt
  })
  .catch((error) => {
    console.error(error);
  });
```

*(c) 2019-present Aiden Bai*