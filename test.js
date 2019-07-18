const hastebin = require('./dist/index.js');

hastebin('your code here', { extension: 'txt' /* not required */ })
  .then((haste) => {
    console.log(haste); // https://hastebin.com/example.txt
  })
  .catch((error) => {
    console.error(error);
  });