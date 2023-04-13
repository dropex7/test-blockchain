export interface TokenDTO {
    title: string
    address: string
    coingeckoId: string;
}


export const tokens: Array<TokenDTO> = [
    {
        title: 'BTC',
        address: '0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8',
        coingeckoId: 'bitcoin'
    },
    {
        title: 'ETH',
        address: '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378',
        coingeckoId: 'ethereum'
    },
    {
        title: 'XRP',
        address: '0xa83575490D7df4E2F47b7D38ef351a2722cA45b9',
        coingeckoId: 'ripple'
    },
    {
        title: 'BUSD',
        address: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
        coingeckoId: 'binance-usd'
    },
    {
        title: 'USDT',
        address: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
        coingeckoId: 'tether'
    },
    {
        title: 'USDC',
        address: '0x64544969ed7EBf5f083679233325356EbE738930',
        coingeckoId: 'usd-coin'
    },
    {
        title: 'DAI',
        address: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
        coingeckoId: 'dai'
    }
]