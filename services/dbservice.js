//second version synchronous
const fs = require('fs');

module.exports = {
    save(data,cb) {
        //console.log(data) 
         fs.writeFile('data.json', JSON.stringify(data), cb)
    },
    load(cb) {
       fs.readFile('data.json', cb)
    }
}

