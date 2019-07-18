const hastebin = require('./index.js');

hastebin('your code here', { extension: 'txt' })
  .then((haste) => {
    console.log(haste);
  })
  .catch((error) => {
    console.error(error);
  });