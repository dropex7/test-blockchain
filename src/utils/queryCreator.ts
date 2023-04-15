const queryParams = process.env.API_URL +
    '?module=account' +
    '&action=tokenbalance' +
    '&tag=latest' +
    `&apikey=${process.env.API_KEY}`

export const createQueryParams = (address: string, tokenAddress: string): string =>
    queryParams +
    `&contractaddress=${tokenAddress}` +
    `&address=${address}`

export const createQueryRateChecker = (coingeckoId: string) => `${process.env.API_GECKO}/simple/price?ids=${coingeckoId}&vs_currencies=usd`

export const createQueryRateInfo = (coingeckoId: string) => `${process.env.API_GECKO}/coins/${coingeckoId}?tickers=false&community_data=false&developer_data=false&sparkline=false`