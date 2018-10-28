//second version synchronous
const fs = require('fs');

module.exports = {
    save(data) {
        //console.log(data) 
        // fs.writeFile('data.json', JSON.stringify(data), cb)
        return new Promise ((resolve, reject) =>{
            fs.writeFile('data.json', JSON.stringify(data), err => {
                if(err) return reject (err);
                resolve(true);
            }) 

         })

    },
    load() {
      return new Promise((resolve, reject) => { 
          fs.readFile('data.json', (err, contents) => {
              if(err) return reject(err);
              resolve (JSON.parse(contents));
          }) 
        })
    }
}


