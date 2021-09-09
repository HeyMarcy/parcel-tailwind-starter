import './css/tailwind.css'

// prettier-ignore

const digitsKey = {
0:`
 _ 
| |
|_|`,
1: `
    
 |
 |`,
2: `
 _ 
 _|
|_ `,
3: `
 _ 
 _|
 _|`,
4: `
|_|
  |`,
5: `
 _ 
|_ 
 _|`,
6: `
 _ 
|_ 
|_|`,
7: `
 _ 
  |
  |`,
8: `
 _ 
|_|
|_|`,
9: `
 _ 
|_|
 _|`
};

function parseKey(digitsKey) {
    let digitsArrayKey = []
    Object.values(digitsKey).map((value, index) => {
        digitsArrayKey[index] = value.replace(/(\r\n|\n|\r)/gm, '')
    })
    return digitsArrayKey
}

function parseAccountNumber(accountNumStrings) {
    let digitsArrayAccNo = []
    let lines = accountNumStrings.split('\n')
    console.log('lines', lines)
    lines.pop() // removes blank line
    for (let i = 0; i < lines[0].length; i += 3) {
        let digitString = lines.map((line) => line.slice(i, i + 3)).join('')
        digitsArrayAccNo.push(digitString)
    }

    return digitsArrayAccNo
}
const parsedKey = parseKey(digitsKey)
// const parsedAccountNumber = parseAccountNumber(accountNumStrings)

const getAccountNumber = (parsedKey, parsedAccountNumber) => {
    const result = []
    console.log('parsedKey[3]', parsedKey[3])
    console.log('parsedAccountNumber[1]', parsedAccountNumber[1])
    parsedAccountNumber.map((digit) => {
        result.push(parsedKey.indexOf(digit))
    })
    return result.join('')
}

// console.log('getAccountNumber', getAccountNumber(parsedKey,parseAccountNumber(accountNumStrings) ))

document.getElementById('inputfile').addEventListener('change', function () {
    var fr = new FileReader()
    fr.onload = function () {
        document.getElementById('output').textContent = fr.result
        document.getElementById('result').textContent = getAccountNumber(
            parsedKey,
            parseAccountNumber(fr.result)
        )
        console.log(
            'getAccountNumber',
            getAccountNumber(parsedKey, parseAccountNumber(fr.result))
        )
    }

    fr.readAsText(this.files[0])
})
