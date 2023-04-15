/**
 * Created by MIRZOEV A. on 13.04.2023
 */

import {Dispatch, memo, SetStateAction, useState} from "react";
import styled from "styled-components";
import circleIcon from "../../../public/icons/circle.svg";
import Image from "next/image";
import PaginationPageSelector from "@/components/Table/PaginationPageSelector";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onChangePage: Dispatch<SetStateAction<number>>;
}

const PaginationEl = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: var(--white);
  padding: 14px;
  width: 100%;
`;

const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  gap: 10px;
`

const Pagination = memo<PaginationProps>(
    ({currentPage, totalPages, onChangePage}): JSX.Element | null => {
        return (
            <PaginationEl>
                <PaginationButton
                    disabled={currentPage === 1}
                    onClick={() => onChangePage((prev) => prev - 1)}
                >
                    <Image src={circleIcon} priority alt="circle_icon"/>
                    <span>Prev</span>
                </PaginationButton>
                <PaginationPageSelector currentPage={currentPage} totalPages={totalPages}/>
                <PaginationButton
                    disabled={currentPage === totalPages}
                    onClick={() => onChangePage((prev) => prev + 1)}
                >
                    <span>Next</span>
                    <Image src={circleIcon} priority alt="circle_icon"/>
                </PaginationButton>
            </PaginationEl>
        );
    }
);

export default Pagination;
