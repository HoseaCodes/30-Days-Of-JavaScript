alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')

let arr = Array();
let arr1 = Array(5).fill(5);
let arr2 = ['first', 'second', 'third', 'fourth', 'fifth']
console.log(arr1)
console.log(arr1.length)
console.log(arr2[0])
let lastindex = arr2.length - 1
console.log(arr2[lastindex])
let middleIndex = Math.round((arr2.length - 1) / 2)
console.log(arr2[middleIndex])
let mixedDataTypes = [250, 'A', { 1: 'B' }, {}, ['A', 'B']]
console.log(mixedDataTypes.length)
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
lastindex = itCompanies.length - 1
middleIndex = Math.round((itCompanies.length - 1) / 2)
console.log(itCompanies[0])
console.log(itCompanies[middleIndex])
console.log(itCompanies[lastindex])
itCompanies.forEach(element => {
    console.log(element)
});
itCompanies.forEach(element => {
    console.log(element.toUpperCase())
});
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let group = itCompanies.join(', ')
console.log(`${group} are big IT compaines.`)

function test(var1) {
    if (itCompanies.includes(var1)) {
        let index = itCompanies.indexOf(var1)
        return itCompanies[index]
    } else {
        return 'does not exist'
    }
}

console.log(test('Apple'))

function find(var1) {
    if (itCompanies.includes(var1)) {
        itCompanies.forEach(element => {
            return element
        });
    } else {
        return 'does not exist'
    }
}
console.log(find('o'))

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(4, 7))
console.log(itCompanies.slice(3, 4))
console.log(itCompanies.pop())
console.log(itCompanies.shift())
console.log(itCompanies.splice())


//First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(','))
let removePunc = text.split(',')
console.log(removePunc.join(''))
let removePunc2 = removePunc.toString()
let removePunc3 = removePunc2.split('.')
console.log(removePunc3.join(''))

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.pop('Honey')
shoppingCart.push('Sugar')
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)

const bountries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
if (bountries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    console.log('It does not exist')
}
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages[0])
console.log(ages.length - 1)
console.log(age[middleIndex])
