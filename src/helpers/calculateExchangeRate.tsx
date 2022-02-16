export const calculateExchangeRate = async (
  sourceCurrency: string,
  targetCurrency: string,
  amount: number
): Promise<any> => {
  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`
  )
  const data = await response.json()
  const rates = data
  if (rates.base === 'USD') {
    if (targetCurrency === 'EUR') return rates.rates.EUR * amount
    else if (targetCurrency === 'GBP') return rates.rates.GBP * amount
  } else if (rates.base === 'EUR') {
    if (targetCurrency === 'USD') return rates.rates.USD * amount
    else if (targetCurrency === 'GBP') return rates.rates.GBP * amount
  } else if (rates.base === 'GBP') {
    if (targetCurrency === 'EUR') return rates.rates.EUR * amount
    else if (targetCurrency === 'USD') return rates.rates.USD * amount
  }
}
