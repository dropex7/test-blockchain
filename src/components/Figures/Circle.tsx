/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {memo} from "react";
import styled from "styled-components";

interface CircleProps {
    color: string;
    top: number;
    right: number;
}

export const SvgContainer = styled.div`
  position: absolute;
  right: ${(props: Pick<CircleProps, "top" | "right">) => props.right}%;
  top: ${(props) => props.top}%;
`;

const Circle = memo<CircleProps>(
    ({color, top, right}): JSX.Element | null => {
        return (
            <SvgContainer right={right} top={top}>
                <svg
                    width="90"
                    height="89"
                    viewBox="0 0 90 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="44.7288" cy="44.4612" r="44.4612" fill={color}/>
                </svg>
            </SvgContainer>
        );
    }
);

export default Circle;
