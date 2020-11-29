console.log(countries)
alert('Open the console and check if the countries has been loaded')
//Count from 0 - 10
for (i = 0; i <= 10; i++) {
    console.log(i)
}
let k = 0;
while (k <= 10) {
    console.log(k)
    k++
}
let j = 0;
do {
    console.log(j)
    j++
} while (j <= 10)

//Count from 10 - 0
for (i = 10; i >= 0; i--) (
    console.log(i)
)
k = 10;
while (k >= 0) {
    console.log(k)
    k--
}
j = 10;
do {
    console.log(j)
    j--
} while (j >= 0)

let num = '';
let arr = Array(7).fill('#')
for (i = 0; i <= arr.length - 1; i++) {
    num = num + arr[i]
    console.log(num)
}

for (i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}
console.log(`i i^2 i^3`)
for (i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`)
}
for (i = 0; i <= 100; i++) {
    if (!(i % 2)) {
        console.log(i)
    }
}

for (i = 0; i <= 100; i++) {
    if (i % 2) {
        console.log(i)
    }
}



let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i
}
console.log(sum)

sum = 0
for (let i = 0; i <= 100; i++) {
    if (!(i % 2)) {
        sum = sum + i
    }
}
console.log(sum)

sum = 0
for (let i = 0; i <= 100; i++) {
    if ((i % 2)) {
        sum = sum + i
    }
}
console.log(sum)

randomArr = new Array(5).fill().map(() => Math.floor(Math.random() * 5))

console.log(randomArr)

arr = [];
while (arr.length < 5) {
    var r = Math.floor(Math.random() * 10) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

randomStrArr = Math.random().toString(36).substring(6)
console.log(randomStrArr)

newrandomStrArr = Math.random().toString(36).substring(Math.floor(Math.random() * 20))
console.log(newrandomStrArr)

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code())

function rgba(x, y, z) {
    x = Math.floor(Math.random() * 240) + 1
    y = Math.floor(Math.random() * 240) + 1
    z = Math.floor(Math.random() * 240) + 1
    return 'rbga(' + x + ',' + y + ',' + z + ')';
}
console.log(rgba())

let newcountries = [
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
    'Kenya']
const arrCountries = []
for (i = 0; i <= newcountries.length - 1; i++) {
    arrCountries.push(newcountries[i].toUpperCase())
}
console.log(arrCountries)

let newarrCountries2 = []
for (i = 0; i <= newcountries.length - 1; i++) {
    newarrCountries2.push(newcountries[i].length)
}
console.log(newarrCountries2)

let newarrCountries3 = []
for (i = 0; i < newcountries.length; i++) {
    newarrCountries3.push(newcountries[i], newcountries[i].slice(0, 3), newcountries[i].length)
}
console.log(newarrCountries3)

for (i = 0; i < newcountries.length; i++) {
    if (newcountries[i].includes('land')) {
        console.log(newcountries.filter(newcountries => newcountries.includes('land')))
    } else {
        console.log('All these countries are without land')
    }
}

for (i = 0; i < newcountries.length; i++) {
    if (newcountries[i].includes('ia')) {
        console.log(newcountries.filter(newcountries => newcountries.includes('ia')))
    } else {
        console.log('All these countries are without land')
    }
}
for (i = 0; i < newcountries.length; i++) {
    if (newcountries[i].length > newcountries[i].length) {
        console
    }
}