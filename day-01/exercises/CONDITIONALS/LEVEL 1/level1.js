/*
    EXERCISES LEVEL 1
*/

console.log("Answers to LEVEL 1 exercises:")

/* 1 .
    Get user input using prompt(“Enter your age:”).
    If user is 18 or older , give feedback:'You are old enough to drive' but if not
    18 give another feedback stating to wait for the number of years he needs to turn 18.
*/
let yourAge = parseInt(prompt("Enter your age: "))
if (yourAge >= 18)
    console.log('1 -> You are old enough to drive.')
else
    console.log('1 -> You are left with ' + (18 - yourAge) + ' years to drive.')

/* 2 .
    Compare the values of myAge and yourAge using if … else.
    Based on the comparison and log the result to console stating who is older (me or you).
    Use prompt(“Enter your age:”) to get the age as input.
*/
yourAge = parseInt(prompt("Enter your age: "))
let myAge = 21
if (yourAge - myAge > 0)
    console.log('2 -> You are ' + (yourAge - myAge) +' years older than me.')
else
    console.log('2 -> You are ' + (myAge - yourAge) +' years younger than me.')

/* 3 .
    If a is greater than b return 'a is greater than b' else 'a is less than b'.
    Try to implement it in two ways
*/
let a = 10
let b = 8

if (a > b)
    console.log('3 -> a is greater than b')
else if (a == b)
    console.log('3 -> a is equal to b')
else
    console.log('3 -> a is less than b')

/* 4 .
    Even numbers are divisible by 2 and the remainder is zero.
    How do you check, if a number is even or not using JavaScript?
*/
let number = 21
if(number % 2 == 0)
    console.log('4 -> ' + number + ' is an even number.')
else
    console.log('4 -> ' + number + ' is an odd number.')