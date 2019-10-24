const request = require('request');
const fs = require('fs');

request(process.argv[2], (error, response, body) => {
  if (error) {
    throw error;
  }
  fs.writeFile(process.argv[3], body, (err) => {
    if (err) {
      throw err;
    } else {
      fs.stat(process.argv[3], (err, stats) => {
        if (err) {
          throw err;
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${process.argv[3]}`);
        }
      });
    }
  });
});