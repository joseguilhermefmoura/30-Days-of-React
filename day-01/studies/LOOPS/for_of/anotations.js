/*
    The for of loop is very handy to use it with array.
    If we are not interested in the index of the array a for of loop is
    preferable to regular for loop or forEach loop.
*/

const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
  console.log(number)
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country of countries) {
  console.log(country.toUpperCase())
}