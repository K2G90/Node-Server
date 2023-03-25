var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'You are amazing!!!', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});