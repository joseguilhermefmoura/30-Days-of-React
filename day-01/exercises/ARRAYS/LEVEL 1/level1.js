/*
    EXERCISE LEVEL 1
*/

console.log("Answers to LEVEL 1 exercises:")

// 1.   Declare an empty array;
let emptyArray = []
console.log("1 -> " + emptyArray)

// 2.   Declare an array with more than 5 number of elements
let fiveElementsArray = ['1', '2', '3', '4', '5']
console.log("2 -> " + fiveElementsArray)

// 3.   Find the length of your array
let lengthOfMyArray = fiveElementsArray.length
console.log("3 -> " + lengthOfMyArray)

// 4.   Get the first item, the middle item and the last item of the array
let firstItemOfMyArray = fiveElementsArray[0]
let middleItemOfMyArray = fiveElementsArray[parseInt(lengthOfMyArray / 2)]
let lastItemOfMyArray = fiveElementsArray[(lengthOfMyArray - 1)]

console.log("4 -> " + firstItemOfMyArray + ", " + middleItemOfMyArray + ", " + lastItemOfMyArray + ".")

// 5.   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    'String',
    true,
    150,
    ['array'],
    {'name': 'object'},
    null
]
console.log("5 -> " + mixedDataTypes.length)

// 6.   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// 7.   Print the array using console.log()
console.log("6 & 7 -> " + itCompanies)
// 8.   Print the number of companies in the array
console.log("8 -> " + itCompanies.length)
// 9.   Print the first company, middle and last company
console.log("9 -> " + itCompanies[0] + ", " + itCompanies[parseInt(itCompanies.length / 2)] + ", " + itCompanies[(itCompanies.length - 1)] + ".")
// 10.  Print out each company
console.log("10 -> ")
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// 11.  Change each company name to uppercase one by one and print them out
console.log("11 -> ")
console.log(itCompanies[0] = itCompanies[0].toUpperCase())
console.log(itCompanies[1] = itCompanies[1].toUpperCase())
console.log(itCompanies[2] = itCompanies[2].toUpperCase())
console.log(itCompanies[3] = itCompanies[3].toUpperCase())
console.log(itCompanies[4] = itCompanies[4].toUpperCase())
console.log(itCompanies[5] = itCompanies[5].toUpperCase())
console.log(itCompanies[6] = itCompanies[6].toUpperCase())

// 12.  Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log("12 -> " + itCompanies[0] + ", " + itCompanies[1] + ", " + itCompanies[2] + ", " + itCompanies[3] + ", " + itCompanies[4] + ", " + itCompanies[5] + ", and " + itCompanies[6] + " are big IT companies.")

// 13.  Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = 'Twitter'
if (itCompanies.indexOf(company) != -1){
    console.log("13 -> " + itCompanies[itCompanies.indexOf(company)])
} else {
    console.log("13 -> This company was not found.")
}
// 14.  Filter out companies which have more than one 'o' without the filter method
let newCompanies = []
itCompanies.forEach(company => {
    let count = 0;
    company.split("").forEach(letter => {
        if(letter == 'O'){
            count++;
        }
    });
    if(count > 1){
        newCompanies.push(company)
    }
});
newCompanies.forEach(company => {
    itCompanies.splice(itCompanies.indexOf(company), 1)
});
console.log("14 -> " + itCompanies)

// 15.  Sort the array using sort() method
itCompanies.sort(function(a, b){
    if (a < b) //sort string ascending
        return -1;
    if (a > b)
        return 1;
    return 0; //default return value (no sorting)
   });
console.log("15 -> " + itCompanies)

// 16.  Reverse the array using reverse() method
itCompanies.reverse()
console.log("16 -> " + itCompanies)

// 17.  Slice out the first 3 companies from the array
console.log("17 -> " + itCompanies.slice(0, 3))

// 18.  Slice out the last 3 companies from the array
console.log("18 -> " + itCompanies.slice(-3))

// 19.  Slice out the middle IT company or companies from the array
console.log("19 -> " + itCompanies[parseInt(itCompanies.length / 2)])

// 20.  Remove the first IT company from the array
itCompanies.shift()
console.log("20 -> " + itCompanies)

// 21.  Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.indexOf(parseInt(itCompanies.length / 2)), 1)
console.log("21 -> " + itCompanies)

// 22.  Remove the last IT company from the array
itCompanies.pop()
console.log("22 -> " + itCompanies)

// 23.  Remove all IT companies
itCompanies = []
console.log("23 -> " + itCompanies)
