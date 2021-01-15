/*
    EXERCISES LEVEL 1
*/

console.log("Answers to LEVEL 1 exercises:")

/* 1.   Declare a function fullName and it takes firstName,
/       lastName as a parameter and it returns your full - name. */

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log('1 -> ' + fullName('Thais', 'Araujo'))

// 2.   Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b){
    return (a + b)
}
console.log('2 -> ' + addNumbers(2, 2))

/* 3.   Area of a circle is calculated as follows: area = π x r x r.
        Write a function which calculates _areaOfCircle */
function areaOfCircle(r){
    return (3.14 * (r * r))
}
console.log('3 -> ' + areaOfCircle(3))

/* 4.   Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
        Write a function which convert oC to oF convertCelciusToFahrenheit. */
function convertCelciusToFarenheit(celsius){
    return ((celsius * (9/5)) + 32)
}
console.log('4 -> ' + convertCelciusToFarenheit(72))

/* 5.   Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
        Write a function which calculates bmi.
        BMI is used to broadly define different weight groups in adults 20 years old or older.
        Check if a person is underweight, normal, overweight or obese based the information given below.
        
        Underweight: BMI is less than 18.5
        Normal weight: BMI is 18.5 to 24.9
        Overweight: BMI is 25 to 29.9
        Obese: BMI is 30 or more
        
        */
function calculateBMI(weight, height){
    let bmi = weight / (height * height)

    if (bmi < 18.5){
        return 'underweight'
    } else if (bmi > 18.5 && bmi < 24.9){
        return 'normal weight'
    } else if (bmi > 25 && bmi < 29.9){
        return 'normal weight'
    } else {
        return 'obese'
    }
}
console.log('5 -> ' + calculateBMI(55, 1.68))

/* 6.   Write a function called checkSeason, it takes a month parameter and returns the season:
Autumn, Winter, Spring or Summer */
function checkSeason(month){
    let seasons = {
        'Summer' : ['January', 'February', 'March'],
        'Autumn' : ['April', 'May', 'June'],
        'Winter' : ['July', 'August'],
        'Spring' : ['September', 'October', 'November', 'December']
    }

    for (const season in seasons) {
        if (seasons[season].indexOf(month) != -1){
            return season
        }
    }

    return null // if not found
}
console.log('6 -> ' + checkSeason('November'))