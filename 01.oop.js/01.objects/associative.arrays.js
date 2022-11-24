// Use case of objects as associative arrays
let addr = ''
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`]
}

// Other use case, this time we don't know the name of the property
function addStock(portfolio, stockName, shares) {
  portfolio[stockName] = shares
}