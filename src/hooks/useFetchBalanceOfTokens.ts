import useSWR from "swr";
import {tokenNamesMap} from "@/utils/tokens";

export interface Url {
    balanceUrl: string;
    coingeckoUrl: {
        coinId: string;
        url: string;
    };
}

const fetcherBalance = (urls: Array<Url>) => {
    const fetchBalance = (url: Url) => {
        const {balanceUrl, coingeckoUrl} = url;
        let balance = 0;
        return fetch(balanceUrl)
            .then((r) => r.json())
            .then((data) => {
                balance = parseFloat(data.result);
                return fetch(coingeckoUrl.url);
            })
            .then((r) => r.json())
            .then((rate) => {
                const urlParams = new URLSearchParams(balanceUrl);
                const address = urlParams.get("contractaddress");
                const usd = balance * rate[coingeckoUrl.coinId].usd;
                return {
                    id: address,
                    token: tokenNamesMap.get(address),
                    balance: isNaN(balance) ? 0 : balance,
                    balance_usd: isNaN(usd) ? 0 : usd,
                };
            });
    };

    return Promise.all(urls.map((url) => fetchBalance(url)));
};

export function useFetchBalanceOfTokens<T>(urls: Array<Url>) {
    const {data, error} = useSWR(urls, fetcherBalance, {
        revalidateOnFocus: false,
    });
    return {
        data: data as Array<T>,
        isError: !!error,
        isLoading: !data && !error,
    };
}
