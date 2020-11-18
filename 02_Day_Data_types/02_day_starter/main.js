// this is your main.js script

var challenge = '30 Days Of JavaScript'
console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substr(2))

console.log(challenge.slice(0, 3))

console.log(challenge.includes('Script'))

console.log(challenge.split())

console.log(challenge.split(' '))

var toptech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(toptech.split(','))

console.log(challenge.replace('JavaScript', 'Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt('J'))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

var becauseText = 'You cannot end a sentence with because because because is a conjunction'

console.log(becauseText.indexOf('because'))

console.log(becauseText.lastIndexOf('because'))

console.log(becauseText.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith('3'))

console.log(challenge.endsWith('t'))

console.log(challenge.match('a'))

console.log(challenge.concat('30 Days of', 'JavaScript'))

console.log(challenge.repeat(2))

var quote = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`

console.log(quote)

var motherTeresa = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log(motherTeresa)

function check(num) {
    const ten = num
    if (ten === 10)
        return 'equal to 10'
    else {
        var newTen = parseInt(ten)
        if (newTen == 10) {
            return 'You converted the number to ' + newTen
        }
    }
}
console.log(check('10'))


function checkFloat(num) {
    const float = num
    if (float === 10) {
        return 'float not equal to 10'
    } else {
        var newFloat = parseFloat(float)
        var difference = 10 - newFloat
        var sum = newFloat + Math.round(difference)
        if (sum === 10) {
            return 'Float is ' + newFloat + 'the difference is' + difference + ' is ' + sum
        }
    }
}
console.log(checkFloat('9.8'))

function str() {
    let python = 'python'
    let jargon = 'jargon'
    if (python.includes('on') && jargon.includes('on')) {
        return python + ' and ' + jargon + " include the word \'on' in it"
    }
}
console.log(str())

var jargon = 'I hope this course is not full of jargon.'

console.log(jargon.includes('jargon'))

console.log(Math.floor(Math.random() * 100))

console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50)

console.log(Math.floor(Math.random() * 255))

var js = 'JavaScript'

console.log(Math.floor(Math.random() * js.charCodeAt()))

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

console.log(becauseText.substr(31, 24))

console.log(becauseText.indexOf('because'))

var tuff = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(tuff.search('love'))

console.log(becauseText.match('because'))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// const regEx =

//     console.log(sentence)

const annualIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const num1 = annualIncome.substr(9, 4)
console.log(annualIncome.indexOf(10000))
const num2 = annualIncome.substr(67, 5)
const num3 = annualIncome.substr(42, 5)
console.log(num1)
console.log(num2)
console.log(num3)

function annualIncomeFunc(x, y, z) {
    var salary = x * 12
    var bonus = y
    var onlineIncome = z * 12
    console.log(bonus)
    var incomeSum = salary + onlineIncome

    var sum = incomeSum + parseInt(bonus.trim())

    return sum
}

console.log(annualIncomeFunc(num1, num3, num2))