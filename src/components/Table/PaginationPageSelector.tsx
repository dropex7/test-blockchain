/**
 * Created by MIRZOEV A. on 15.04.2023
 */

import {Dispatch, memo, SetStateAction, useEffect, useMemo} from "react";
import styled from "styled-components";

interface PaginationPageSelectorProps {
    totalPages: number;
    currentPage: number;
    onChangePage: Dispatch<SetStateAction<number>>;
}

const PageSelectButton = styled.button``;

const createPageButtons = (page: number, totalPages: number) => {
    const allPages = Array.from(Array(10).keys()).slice(1)
    const centerElements = allPages.slice(page - 2, page + 2)
    console.log(centerElements)

    console.log(allPages.filter((page) => {

        return true
    }))
    return []
}

const PaginationPageSelector = memo<PaginationPageSelectorProps>(
    ({totalPages, currentPage, onChangePage}): JSX.Element | null => {
        const kek = useMemo(() => createPageButtons(currentPage, totalPages), [currentPage, totalPages])

        return <span>Current page: {currentPage}</span>;
    }
);

export default PaginationPageSelector;
