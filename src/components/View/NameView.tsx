/**
 * Created by MIRZOEV A. on 15.04.2023
 */

import {memo} from "react";
import styled from "styled-components";
import Image from "next/image";

interface NameViewProps {
    name: string;
    image: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NameView = memo<NameViewProps>(({name, image}): JSX.Element | null => {
    return (
        <Container>
            <Image src={image} alt={name} width={40} height={40}/>
            <span>{name}</span>
        </Container>
    );
});

export default NameView;
