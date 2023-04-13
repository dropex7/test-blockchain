/**
 * Created by MIRZOEV A. on 12.04.2023
 */

import {memo, useMemo} from 'react';
import {TokenDTO} from "@/utils/tokens";
import useSWR from "swr";
import {createQueryParams} from "@/utils/queryCreator";
import {fetcher} from "@/utils/fetcher";
import {useAppSelector} from "@/store";

interface ListItemProps {
    token: TokenDTO
}

interface TokenResponse {
    status: string;
    message: string;
    result: string;
}

interface CurrencyResponse {
    [key: string]: {
        usd: number
    }
}

const ListItem = memo<ListItemProps>(({token}): JSX.Element | null => {
    const address = useAppSelector(state => state.account.address)
    const {
        data,
        error,
        mutate
    } = useSWR<TokenResponse>(address ? createQueryParams(address, token.address) : null, fetcher, {
        revalidateOnFocus: false
    })

    const {data: currency} = useSWR<CurrencyResponse>(address ? `${process.env.API_GECKO}?ids=${token.coingeckoId}&vs_currencies=usd` : null, fetcher)

    if (data?.status === '0') {
        mutate()
    }

    const price = useMemo(() => (data && currency) ? parseFloat(data.result) * currency[token.coingeckoId].usd : 0, [currency, token.coingeckoId, data])

    return <span><strong>{token.title} </strong>{price}</span>
});

ListItem.displayName = 'ListItem'

export default ListItem;