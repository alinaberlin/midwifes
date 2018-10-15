const Midwife = require('./model/Midwife')
const Patient= require('./model/Patient')
const Rating= require('./model/Rating')


let midwife = new Midwife('Alina', 'Landsberger Allee 133', 33, ['Eng', 'De', 'Ro'] );
console.log(midwife)

let patient = new Patient('Cosmina', 'Edison Square 9', 18, ['Eng', 'De', 'Cz'], midwife);
console.log(patient)

let rating = new Rating (5, 'Bad', patient)
console.log(rating)
midwife.addRating(rating)
console.log('midwife rating', midwife.calculateScore() )