let Midwife = class {
    constructor(name, address, age, languages) {
        this.name = name;
        this.address = address;
        this.age = age;
        this.languages = languages;
        this.ratings = []
    }

    addRating(rating) {
        this.ratings.push(rating)

    }
    calculateScore() {
        let sum = this.ratings.reduce(function(total, rating) {
         return total + rating.score
        },0);
        return sum / this.ratings.length

    }
}
module.exports = Midwife