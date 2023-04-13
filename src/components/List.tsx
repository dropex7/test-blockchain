/**
 * Created by MIRZOEV A. on 12.04.2023
 */

import {memo, ReactElement, useMemo, useState} from 'react';
import ListItem from "@/components/ListItem";
import {tokens} from "@/utils/tokens";
import styled from "styled-components";

interface ListProps {
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
`

const PaginationButton = styled.button`

`

const rows: Array<ReactElement> = []
const totalPages = Math.ceil(tokens.length / 3)

for (const token of tokens) {
    rows.push(<ListItem key={token.address} token={token}/>)
}

const List = memo<ListProps>((): JSX.Element | null => {
    const [page, setPage] = useState(1)

    const actualRows = useMemo(() => {
        const countOfElements = 3 * page
        return rows.slice(countOfElements - 3, countOfElements)
    }, [page])

    return (
        <Column>
            {actualRows}
            <Pagination>
                <PaginationButton disabled={page === 1}
                                  onClick={() => setPage(prev => prev - 1)}>prev</PaginationButton>
                <span>Current page: {page}</span>
                <PaginationButton disabled={page === totalPages}
                                  onClick={() => setPage(prev => prev + 1)}>next</PaginationButton>
            </Pagination>
        </Column>
    );
});

List.displayName = 'List';

export default List;