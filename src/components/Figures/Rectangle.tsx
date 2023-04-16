/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {memo} from "react";
import {SvgContainer} from "@/components/Figures/Circle";

interface RectangleProps {
    color: string;
    top: number;
    right: number;
}

const Rectangle = memo<RectangleProps>(
    ({color, right, top}): JSX.Element | null => {
        return (
            <SvgContainer right={right} top={top}>
                <svg
                    width="90"
                    height="90"
                    viewBox="0 0 90 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.785156"
                        y="0.988281"
                        width="88.2675"
                        height="88.2675"
                        fill={color}
                    />
                </svg>
            </SvgContainer>
        );
    }
);

export default Rectangle;
