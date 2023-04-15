/**
 * Created by MIRZOEV A. on 15.04.2023
 */

import Circle from "@/components/Figures/Circle";
import Rectangle from "@/components/Figures/Rectangle";
import styled from "styled-components";

const FiguresContainer = styled.div`
  position: relative;
  height: 100%;
`;

const BlockWithFigures = (): JSX.Element | null => {
    return (
        <FiguresContainer>
            <Circle top={10} right={80} color={"var(--red)"}/>
            <Circle top={40} right={40} color={"var(--blue)"}/>
            <Circle top={10} right={30} color={"var(--blue)"}/>
            <Circle top={60} right={30} color={"var(--red)"}/>
            <Rectangle top={25} right={60} color={"var(--yellow)"}/>
            <Rectangle top={45} right={60} color={"var(--yellow)"}/>
            <Rectangle top={20} right={10} color={"var(--yellow)"}/>
            <Rectangle top={65} right={10} color={"var(--yellow)"}/>
        </FiguresContainer>
    );
};

export default BlockWithFigures;
