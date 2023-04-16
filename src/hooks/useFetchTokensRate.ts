import useSWR from "swr";
import dayjs from "dayjs";

const fetcherCoins = (urls: Array<string>) => {
    const fetchCoin = (url: string) => {
        const dateStart = dayjs();
        return fetch(url).then((r) =>
            r.json().then((data) => {
                const dateEnd = dayjs();
                return {
                    id: data.id,
                    name: data.name,
                    image: data.image.small,
                    price: data.market_data.current_price.usd,
                    status: r.status,
                    ok: r.ok,
                    url,
                    dateStart,
                    dateEnd,
                };
            })
        );
    };

    return Promise.all(urls.map((url) => fetchCoin(url)));
};

export function useFetchTokensRate<T>(urls: Array<string>) {
    const {data, error, mutate} = useSWR(urls, fetcherCoins, {
        revalidateOnFocus: false,
    });

    return {
        data: data as Array<T>,
        isError: !!error,
        isLoading: !data && !error,
        mutate: mutate,
    };
}
