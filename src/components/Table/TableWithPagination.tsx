/**
 * Created by MIRZOEV A. on 15.04.2023
 */

import {Dispatch, SetStateAction} from "react";
import Table, {BaseRow, Columns} from "@/components/Table/Table";
import Pagination from "@/components/Table/Pagination";
import styled from "styled-components";

interface TableWithPaginationProps<T> {
    currentPage: number;
    totalPages: number;
    onChangePage: Dispatch<SetStateAction<number>>;
    columns: Array<Columns<T>>;
    rows: Array<T & BaseRow>;
}

const Container = styled.div`
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  overflow-x: scroll;
`;

function TableWithPagination<T>({
                                    currentPage,
                                    totalPages,
                                    columns,
                                    rows,
                                    onChangePage,
                                }: TableWithPaginationProps<T>) {
    return (
        <>
            <Container>
                <Table<T> columns={columns} rows={rows}/>
            </Container>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onChangePage={onChangePage}
            />
        </>
    );
}

export default TableWithPagination;
