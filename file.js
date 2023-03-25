const fs = require('fs');
// read files
fs.readFile('./docz/wordz.txt', (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
// write files

// directories

// delete files
