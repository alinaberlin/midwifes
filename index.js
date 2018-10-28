const Midwife = require('./model/Midwife')
const Patient = require('./model/Patient')
const Rating = require('./model/Rating')
const Database = require('./services/dbservice')


const midwife = new Midwife('Alina', 'Landsberger Allee 133', 33, ['Eng', 'De', 'Ro']);
const midwife2 = new Midwife('Maria', 'Landsberger Allee 153', 33, ['Eng', 'De']);

//console.log(midwife)

const patient = new Patient('Cosmina', 'Edison Square 9', 18, ['Eng', 'De', 'Cz']);
//console.log(patient)


const rating = new Rating(5, 'Bad', patient)
//console.log(rating)
midwife.addRating(rating)
//console.log('midwife rating', midwife.calculateScore())



Database.save([midwife, midwife2])
.then(resp => console.log(resp))
.catch(err => console.log(err))

Database.load()
.then(resp =>console.log(resp))
.catch(err => console.log(err))



/*Database.save([midwife, midwife2])
const loadingFile = Database.load()
console.log(JSON.stringify(loadingFile))*/

//document.body.addEventListener('click) 