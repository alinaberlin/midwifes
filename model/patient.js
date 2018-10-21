let Patient = class {
    constructor (name, address, age, languages, midwife){
        this.name = name;
        this.address = address;
        this.age = age;
        this.languages = languages;
        this.midwife = midwife
    }
  /*giveRating (rating) {
      this.midwife.addRating(rating);
      
  }*/
   giveRating (rating, midwife) {
       midwife.addRating(rating);
       this.midwife = midwife
   }

 }
 module.exports = Patient