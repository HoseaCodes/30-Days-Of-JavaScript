// this is your main.js script

const firstName = 'Dom';
const lastName = 'Hosea';
const country = 'USA';
const city = 'Houston';
const age = 28;
const isMarried = false;
const now = new Date();
let year = now.getFullYear();

console.log(`Name: ${firstName} ${lastName} Age: ${age} Married: ${isMarried} from ${city}${country} Year: ${year}`)

let check = '10' == 10;
console.log(check)

let check2 = parseInt('9.8') == 10;
console.log(check2)

//truthy
console.log('whit'.length == 'hots'.length)
console.log(1 == true)
console.log(1 < 2)

//falsey
console.log(undefined == 2)
console.log(NaN == NaN)
console.log(1 == '')

console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') //false
console.log('python'.length != 'jargon'.length)

console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
console.log(!('dragon'.includes('on') && 'python'.includes('on')))

let date = new Date();
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date)
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log()

const rightNow = new Date()
console.log(rightNow.getTime())

//Exercise 2


let b = prompt('Enter the base')
let h = prompt('Enter the height')
let area = 0.5 * b * h
alert(`The area of the trinagle is ${area}`)

let sideA = prompt('Enter the side length A')
let sideB = prompt('Enter the side length B')
let sideC = prompt('Enter the side length C')
let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)
console.log(perimeter)
alert(`The perimeter of the triangle is ${perimeter}`)

let length = prompt('What is the length')
let width = prompt('What is the width')
area = length * width
perimeter = 2 * (length * width)
console.log(`The area is ${area} and the perimeter is ${perimeter}`)

let radius = prompt('Enter the radius')
let PI = 3.14;
area = PI * radius * radius
let circumference = 2 * PI * radius
console.log(`The area is ${area} and the circurmference is ${circumference}`)

function slope(x1, y1, x2, y2) {
    return y2 - y1 / x2 - x1
}


console.log(slope(2, 2, 6, 10))

let y = 0
let x = -3
console.log(x ** 2 + (6 * x) + 9)

let workHours = prompt('Enter the hours worked')
let rate = prompt('Enter the rate per hour')
alert(`Your weekly earning is ${workHours * rate}`)

if (firstName.length > 7) {
    console.log('Your name is long')
} else {
    console.log('Your name is short')
}

if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
} else {
    console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`)

}
let myAge = 28;
let yourAge = 25;

if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`)
} else {
    console.log(` You are ${yourAge - myAge} years younger than me`)
}

let birthYear = prompt('What year were you born?')

if (birthYear <= 1995) {
    console.log(`You are ${now.getFullYear - birthYear}. You are old enough to drive`)
} else {
    console.log(`You are ${now.getFullYear - birthYear}. You will be allowed to drive after ${18 - (now.getFullYear - birthYear)} years.`)
}

let lifespan = prompt('Enter the number of yours you live:')

console.log(`You lived ${lifespan.getSeconds} seconds`)

year = now.getFullYear();
let month = now.getMonth();
date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

if (hours.length < 2 && minutes.length < 2) {
    console.log(`${year}-${month}-${date} 0${hours}:0${minutes}`)
} else {
    console.log(`${year}-${month}-${date} ${hours}:${minutes}`)

}
