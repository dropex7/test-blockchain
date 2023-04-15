import {useEffect, useMemo, useState} from "react";

import {countOfElements, tokens, totalPages} from "@/utils/tokens";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";
import {Container} from "@/pages/assets";
import {createQueryRateInfo} from "@/utils/queryCreator";
import {useAppSelector} from "@/store";
import {Url} from "@/hooks/useFetchBalanceOfTokens";
import {useFetchTokensRate} from "@/hooks/useFetchTokensRate";
import {BaseRow, Columns} from "@/components/Table/Table";
import TableWithPagination from "@/components/Table/TableWithPagination";
import dayjs, {Dayjs} from "dayjs";
import Button from "@/components/Controls/Button";
import styled from "styled-components";
import NameView from "@/components/View/NameView";

interface TokenDetail extends BaseRow {
    id: string;
    name: string;
    image: string;
    price: number;
    url: string;
    dateStart: Dayjs;
    dateEnd: Dayjs;
    status: string;
    ok: boolean;
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7%;
`;

const Title = styled.h2`
  margin-bottom: 5%;
`;

const columns: Array<Columns<TokenDetail>> = [
    {
        title: "Name",
        key: "name",
        render: ({name, image}) => <NameView name={name} image={image}/>,
    },
    {
        title: "Price",
        key: "price",
        render: ({price}) => <span>{price}&#36;</span>,
    },
    {
        title: "Url",
        key: "url",
        render: ({url}) => <span>{url}</span>,
    },
    {
        title: "Date start",
        key: "dateStart",
        render: ({dateStart}) => (
            <span>{dayjs(dateStart).format("DD.MM.YYYY HH:mm'ss")}</span>
        ),
    },
    {
        title: "Date end",
        key: "dateEnd",
        render: ({dateEnd}) => (
            <span>{dayjs(dateEnd).format("DD.MM.YYYY HH:mm'ss")}</span>
        ),
    },
    {
        title: "Status",
        key: "status",
        render: ({status, ok}) => (
            <span>
                {status} {ok ? "OK" : "NOTOK"}
            </span>
        ),
    },
];

export default function MarketCap() {
    const [page, setPage] = useState(1);
    const address = useAppSelector((state) => state.account.address);
    const router = useRouter();
    const {auth} = useAuth();

    const urls = useMemo<Array<string>>(
        () =>
            tokens
                .slice((page - 1) * countOfElements, page * countOfElements)
                .map((token) => createQueryRateInfo(token.coingeckoId)),
        [page]
    );
    const {data, isLoading, mutate} = useFetchTokensRate<TokenDetail>(urls);

    useEffect(() => {
        if (!auth) {
            router.push("/");
        }
    }, [auth, router]);

    return (
        <Container>
            <TitleContainer>
                <Title>Market Cap</Title>
                <Button onClick={() => mutate()} isLoading={isLoading}>Check</Button>
            </TitleContainer>

            {isLoading ? (
                <>Loading...</>
            ) : (
                <TableWithPagination<TokenDetail>
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
