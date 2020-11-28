// this is your main.js script

alert('Open the browser console whenever you work on JavaScript')
let age = prompt('Enter your age')
if (age < 18) {
    console.log(`You are left with ${18 - age} years to drive.`)
} else {
    console.log(`You are old enough to drive.`)
}

let yourAge = 30;
if (age < yourAge) {
    console.log(`You are ${yourAge - age} years older than me`)
} else {
    console.log(`I am ${age - yourAge} years older than you`)
}

let a = 4
let b = 3

if (a > b) {
    console.log(`A is greater than b`)
} else {
    console.log(`a is less then b`)
}

a > b ? console.log(`A is greater than b`)
    : console.log(`a is less then b`)

let number = prompt('Enter a number')

if (number % 2 == 0) {
    console.log(`${number} is an even number`)
} else {
    console.log(`${number} is an odd number`)
}

let grade = 92;
switch (grade) {
    case grade > 90 && grade < 100:
        console.log('A')
        break
    case grade > 80 && grade < 90:
        console.log('B')
        break
    case grade > 70 && grade < 80:
        console.log('C')
        break
    case grade > 60 && grade < 70:
        console.log('D')
        break
    case grade > 50 && grade < 60:
        console.log('F')
        break
    case grade < 50:
        console.log('Point of no return')
        break
    default:
        console.log('Invalid input')
}

let month = 'October';
switch (month) {
    case month == 'September' || 'October' || 'November':
        console.log('The season is Autumn')
        break
    case month == 'December' || 'January' || 'February':
        console.log('The season is Winter')
        break
    case month == 'March' || 'April' || 'May':
        console.log('The season is Spring')
        break
    case month == 'June' || 'July' || 'August':
        console.log('The season is Summer')
        break
    default:
        console.log('Invalid input')
}
let today = prompt('What is the day today?')
today == 'Saturday' || today == 'Sunday' ? console.log(` ${today} is a weekend`)
    : console.log(`${today} is a working day`)

switch (month) {
    case month == 'December' || 'October' || 'August' || 'July' || 'May' || 'March' || 'January':
        console.log(`${month} has 31 days.`)
        break
    case month == 'November' || 'September' || 'June' || 'April':
        console.log(`${month} has 30 days`)
        break
    case month == 'February':
        console.log(`${month} has 28 days.`)
        break
}