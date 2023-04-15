/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {ReactElement, useMemo} from "react";
import styled from "styled-components";
import circleIcon from "../../../public/icons/circle.svg";
import Image from "next/image";

export interface Columns<T> {
    title: string;
    key: keyof T;
    render: (value: T) => ReactElement;
}

export type BaseRow = { id: string };

interface TableProps<T> {
    columns: Array<Columns<T>>;
    rows: Array<T & BaseRow>;
}

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0 1px;
  border-radius: 100px;
`

const TableHead = styled.thead`
  background: #F2F2F2;
`

const TableHeadElement = styled.th`
  padding: 14px;
  text-align: start;
  font-weight: 400;
  color: var(--text-light);
`

const TableBody = styled.tbody`
  background: #FFFFFF;
`

const TableRow = styled.tr`
`

const TableColumn = styled.td`
  text-align: start;
  padding: 14px;
`

const CheckBoxColumn = styled(TableColumn)`
  width: 30px;
`

function Table<Type>({rows, columns}: TableProps<Type>) {
    const titles = useMemo(
        () => columns.map(({title}) => <TableHeadElement key={title}>{title}</TableHeadElement>),
        [columns]
    );

    const renderedRows = useMemo(
        () =>
            rows.map((row, index) => {
                const cols = columns.map(({render, title}) => (
                    <TableColumn key={`${title}_${row.id}`}>{render(row)}</TableColumn>
                ));
                return (
                    <TableRow key={row.id}>
                        <CheckBoxColumn>
                            <input type="checkbox" name="horns"/>
                        </CheckBoxColumn>
                        {cols}
                        <TableColumn style={{textAlign: "end"}}>
                            <Image src={circleIcon} priority alt="circle_icon"/>
                        </TableColumn>
                    </TableRow>
                );
            }),
        [columns, rows]
    );

    return (
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableColumn style={{width: '30px'}}>
                        <input type="checkbox" name="horns"/>
                    </TableColumn>
                    {titles}
                    <TableColumn/>
                </TableRow>
            </TableHead>
            <TableBody>
                {renderedRows}
            </TableBody>
        </StyledTable>
    );
}

export default Table;
