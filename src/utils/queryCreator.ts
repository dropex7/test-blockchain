const queryParams = process.env.API_URL +
    '?module=account' +
    '&action=tokenbalance' +
    '&tag=latest' +
    `&apikey=${process.env.API_KEY}`

export const createQueryParams = (address: string, tokenAddress: string): string =>
    queryParams +
    `&contractaddress=${tokenAddress}` +
    `&address=${address}`

