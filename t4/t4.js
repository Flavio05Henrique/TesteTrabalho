const revenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalRevenue = Object.values(revenue).reduce((acc, e) => acc + e, 0);

for (const state in revenue) {
    const percentage = revenue[state] * 100 / totalRevenue 
    console.log(`${state} - ${percentage.toFixed(2)}%`);
}