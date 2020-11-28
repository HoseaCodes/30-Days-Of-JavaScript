// this is your main.js script

const firstName = 'Dom';
const lastName = 'Hosea';
const country = 'USA';
const city = 'Houston';
const age = 28;
const isMarried = false;
const now = new Date();
const year = now.getFullYear();

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