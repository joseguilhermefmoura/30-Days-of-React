/*
    EXERCISES LEVEL 1
*/

console.log("Answers to LEVEL 1 exercises:")

// 1 & 2.   Create an empty object called dog and print the the dog object on the console
let emptyObject = {}
console.log('1 & 2 -> ' + emptyObject)

/* 3 & 4.   Add name, legs, color, age and bark properties for the dog object.
The bark property is a method which return woof woof */

emptyObject.name = 'Rex'
emptyObject.legs = 'short'
emptyObject.color = 'black'
emptyObject.age = 12
emptyObject.bark = function () {
    return 'woof woof'
}

console.log(emptyObject.name, emptyObject.legs, emptyObject.color
            , emptyObject.age, emptyObject.bark())

// 5.   Set new properties the dog object: breed, getDogInfo
emptyObject.breed = 'Poodle'
emptyObject.getDogInfo = function() {
    return this.breed
}