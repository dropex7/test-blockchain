/**
 * Created by MIRZOEV A. on 15.04.2023
 */

import {HTMLProps, memo, PropsWithChildren} from 'react';
import styled from "styled-components";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    isLoading?: boolean
}

const StyledButton = styled.button`
  background: black;
  border: none;
  padding: 16px;
  width: 200px;
  border-radius: 4px;
  color: var(--white);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: background-color 0.2s ease-out 100ms;

  &:hover {
    background: var(--red);
    cursor: pointer;
  }
`

const Button = memo<PropsWithChildren<ButtonProps>>(({children, isLoading = false, onClick}): JSX.Element | null => {
    return <StyledButton onClick={onClick}>{isLoading ?
        "Loading..." : children}</StyledButton>;
});

export default Button;