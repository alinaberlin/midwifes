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
   static create(name, address, age, languages, midwife){
       return new Patient(name, address, age, languages, midwife)
   }
   giveRating (rating) {
       this.midwife.addRating(rating);
       
   }

 }
 module.exports = Patient