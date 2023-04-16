/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {useMemo, useState} from "react";
import styled from "styled-components";
import {useAppSelector} from "@/store";
import {Url, useFetchBalanceOfTokens} from "@/hooks/useFetchBalanceOfTokens";
import {countOfElements, tokens, totalPages} from "@/utils/tokens";
import {
    createQueryParams,
    createQueryRateChecker,
} from "@/utils/queryCreator";
import TableWithPagination from "@/components/Table/TableWithPagination";
import {BaseRow, Columns} from "@/components/Table/Table";

interface TokenBalance extends BaseRow {
    balance: number;
    balance_usd: number;
    token: string;
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin-top: 10%;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  margin-bottom: 10%;
`;

const columns: Array<Columns<TokenBalance>> = [
    {
        title: "Token",
        key: "token",
        render: ({token}) => <span>{token}</span>,
    },
    {
        title: "Balance",
        key: "balance",
        render: ({balance}) => <span>{balance}</span>,
    },
    {
        title: "Balance USD",
        key: "balance_usd",
        render: ({balance_usd}) => <span>{balance_usd}&#36;</span>,
    },
];

export default function Assets() {
    const [page, setPage] = useState(1);
    const address = useAppSelector((state) => state.account.address);

    const urls = useMemo<Array<Url>>(
        () =>
            tokens.slice((page - 1) * countOfElements, page * countOfElements).map(
                (token) => ({
                    balanceUrl: createQueryParams(address, token.address),
                    coingeckoUrl: {
                        url: createQueryRateChecker(token.coingeckoId),
                        coinId: token.coingeckoId,
                    },
                }),
                [address, page]
            ),
        [address, page]
    );

    const {data, isLoading} = useFetchBalanceOfTokens<TokenBalance>(urls);

    return (
        <Container>
            <Title>Assets</Title>
            {isLoading ? (
                <>Loading...</>
            ) : (
                <TableWithPagination<TokenBalance>
                    totalPages={totalPages}
                    currentPage={page}
                    columns={columns}
                    rows={data}
                    onChangePage={setPage}
                />
            )}
        </Container>
    );
}
