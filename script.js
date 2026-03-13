
// Задача 1 синтаксисом
function splitEvenOddSyntax(arr) {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }

    return [...even, ...odd]
}

console.log(splitEvenOddSyntax([1, 2, 3, 4, 5, 6]))

// Задача 1 методами
function splitEvenOddMethods(arr) {
    let even = arr.filter(n => n % 2 === 0);
    let odd = arr.filter(n => n % 2 !== 0);

    return even.concat(odd)
}

console.log(splitEvenOddMethods([1, 2, 3, 4, 5, 6]))


// Задача 2 синтаксисом
function averageOfArraySyntax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

    }

    return Math.round((sum / arr.length) * 100) / 100
}

console.log(averageOfArraySyntax([1.5, 2.5, 3.5]))

// Задача 2 методами
function averageOfArrayMethods(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0
    let sum = arr.reduce((acc, current) => current + acc, 0)
    const average = sum / arr.length;
    return Number(average.toFixed(2))
}

console.log(averageOfArrayMethods([1.5, 2.5, 3.5]));


// Задача 3 синтаксисом
function censorWordSyntax(str, word) {
    let arr = str.split(' ')
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let cleanWord = arr[i].replace(/^[^a-zA-Zа-яА-Я0-9]+|[^a-zA-Zа-яА-Я0-9]+$/g, '')
        let punctuation = arr[i].slice(cleanWord.length)
        if (cleanWord.toLowerCase() === word.toLowerCase()) {
            result.push('[ЦЕНЗУРА]' + punctuation)
        } else {
            result.push(arr[i])
        }
    }

    return result.join(' ')
}

console.log(censorWordSyntax("JavaScript это круто. Я люблю JavaScript!", "JavaScript"))

// Задача 3 методами
function censorWordMethods(str, word) {
    const target = word.toLowerCase();
    
    return str.split(' ').map(currentWord => {
        const cleanWord = currentWord.replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
        
        if (cleanWord === target) {
            const punctuation = currentWord.match(/[^a-zA-Zа-яА-Я0-9]+$/);
            return '[ЦЕНЗУРА]' + (punctuation ? punctuation[0] : '');
        }
        
        return currentWord;
    }).join(' ');
}

console.log(censorWordMethods("JavaScript это круто. Я люблю JavaScript!", "JavaScript"))

// Задача 4 синтаксисом
const cart = {
    "яблоки": 5,
    "бананы": 3,
    "молоко": 1
}

function addToCartSyntax(cart, productName, amount) {
    cart[productName] = cart[productName] ?? 0 + amount
    return cart
}

console.log(addToCartSyntax(cart, 'чипсы', 2))
console.log(addToCartSyntax(cart, 'бананы', 3))

// Задача 4 методами
function addToCartMethods(cart, productName, amount) {
    Object.assign(cart, { [productName]: (cart[productName] || 0) + amount })
    return cart
}

console.log(addToCartMethods(cart, 'чипсы', 2))
console.log(addToCartMethods(cart, 'бананы', 3))


// Задача 5 синтаксисом
const cartExample = {
    a: 'apple',
    b: 'banana',
    c: 100,
}

function swapKeysAndValuesSyntax(obj) {
    let invertedObj = {}
    for (const key in obj) {
        invertedObj[obj[key]] = key
    }

    return invertedObj
}

console.log(swapKeysAndValuesSyntax(cartExample))

// Задача 5 методами
function swapKeysAndValuesMethods(obj) {
    let objEntries = Object.entries(obj)
    const invertedEntries = objEntries.map(([key, value]) => [value, key])
    return Object.fromEntries(invertedEntries)
}

console.log(swapKeysAndValuesMethods(cartExample))



// Задача 6 синтаксисом
function filterStringsSyntax(arr, minLength) {
    let filteredArr = []
    for (const n of arr) {

        if (typeof n === "string" && n.length >= minLength) filteredArr.push(n)
    }
    return filteredArr
}

console.log(filterStringsSyntax(["apple", "banana", "orange", "grape", "kiwi"], 6))


// Задача 6 методами
function filterStringsMethods(arr, minLength) {
    let filteredArr = arr.filter(n => n.length >= minLength)
    return filteredArr
}

console.log(filterStringsMethods(["apple", "banana", "orange", "grape", "kiwi"], 6))

// Задача 7
function delayMessage(message, delayMs, callback) {
    setTimeout(() => {
        console.log(message)
        callback()
    }, delayMs);
}

delayMessage("Привет!", 2000, () => console.log("Callback!"))

