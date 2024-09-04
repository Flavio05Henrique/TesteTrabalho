let fib = [0,1]
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um numero: ', (value) => {
    while(value > fib[0]) {
        fibonacci(fib)
    }
    value == fib[0] ? console.log("Número digitado é Fibonacci. ", value) : console.log("Número digitado não é Fibonacci. ", value)
    rl.close()
});

const fibonacci = (num) => {
    fib = [num[1] ,num[0] + num[1]]
}