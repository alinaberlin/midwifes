//second version synchronous
const fs = require('fs');

module.exports = {
    save(data,cb) {
        //console.log(data) 
         fs.writeFile('data.json', JSON.stringify(data), function(err){
            console.log('save succesfull')
            cb(err)
        })
    },
    load(cb) {
       fs.readFile('data.json', function(err, data) {
           console.log('load successfull')
           cb(err, data)
       }) 
    }
}

