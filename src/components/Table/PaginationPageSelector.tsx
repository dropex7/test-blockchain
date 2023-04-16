/**
 * Created by MIRZOEV A. on 15.04.2023
 */

import {Dispatch, memo, SetStateAction, useMemo} from "react";
import styled from "styled-components";
import {createPageButtons} from "@/utils/misc";

interface PaginationPageSelectorProps {
    totalPages: number;
    currentPage: number;
    onChangePage: Dispatch<SetStateAction<number>>;
}

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const PageSelectButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px 16px;
  ${({active}: { active: boolean }) =>
          active ? "background: var(--light-primary); border-radius: 4px;" : ""}
`;

const PageSelectText = styled.span`
  ${({active}: { active: boolean }) =>
          active ? "color: var(--link-text)" : ""};
`;

const EllipsisText = styled.span`
  padding: 10px 16px;
`;

const PaginationPageSelector = memo<PaginationPageSelectorProps>(
    ({totalPages, currentPage, onChangePage}): JSX.Element | null => {
        const {pages, isStart, isEnd} = useMemo(
            () => createPageButtons(currentPage, totalPages),
            [currentPage, totalPages]
        );

        return (
            <Container>
                {!isStart ? (
                    <>
                        <PageSelectButton active={false} onClick={() => onChangePage(1)}>
                            <PageSelectText active={false}>{1}</PageSelectText>
                        </PageSelectButton>
                        <EllipsisText>...</EllipsisText>
                    </>
                ) : null}
                {pages.map((page) => {
                    const active = page === currentPage;
                    return (
                        <PageSelectButton
                            active={active}
                            key={page}
                            onClick={() => onChangePage(page)}
                        >
                            <PageSelectText active={active}>{page}</PageSelectText>
                        </PageSelectButton>
                    );
                })}
                {!isEnd ? (
                    <>
                        <EllipsisText>...</EllipsisText>
                        <PageSelectButton
                            active={false}
                            onClick={() => onChangePage(totalPages)}
                        >
                            <PageSelectText active={false}>{totalPages}</PageSelectText>
                        </PageSelectButton>
                    </>
                ) : null}
            </Container>
        );
    }
);

export default PaginationPageSelector;
