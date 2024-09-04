const fs = require('fs')

const json = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'))

const revenue = json.filter(day => day.valor > 0) 

const lowerRevenue = () => {
    let lower = 0
    revenue.forEach( e => {
        lower == 0 ? lower = e.valor : 0
        lower > e.valor ? lower = e.valor : 0
    });
    return lower
}

const higherRevenue = () => {
    let higher = 0
    revenue.forEach( e => {
        higher == 0 ? higher = e.valor : 0
        higher < e.valor ? higher = e.valor : 0
    });
    return higher
}

const averageRevenue = () => {
    average = revenue.reduce((acc, e) => {
        return acc + e.valor
    },0)

    return average / revenue.length
}

const daysAboveAverage = () => {
    const average = averageRevenue()
    return revenue.filter(e => e.valor >= average).length
}

console.log('Menor valor de faturamento:', lowerRevenue());
console.log('Maior valor de faturamento:', higherRevenue());
console.log('Número de dias com faturamento acima da média mensal:', daysAboveAverage());