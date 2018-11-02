const fs = require('fs')
const pacient = require('../model/patient')
const dbPath = `${__dirname}/../person.json`

async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) {
                return reject(err)
            }
            const people = JSON.parse(file).map(pacient.create)
            resolve(people)
        })
    })

}
async function addPatient(pacient) {
    const allPacient = await findAll()
    allPacient.push(pacient)
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(allPacient), err => {
            if (err) return reject(err);
            resolve(true);
        })

    })
}




module.exports = {
    findAll,
    addPatient

}