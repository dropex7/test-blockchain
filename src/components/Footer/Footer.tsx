/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {memo} from "react";
import styled from "styled-components";
import {useAuth} from "@/hooks/useAuth";
import {AuthProps} from "@/components/types";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  justify-self: flex-end;
`;

const FooterText = styled.span`
  ${({auth}: AuthProps) => (auth ? "" : "color: var(--white)")}
`;

const FooterLink = styled.a`
  font-size: large;
  ${({auth}: AuthProps) => (auth ? "color: var(--black)" : "color: white")}
`;

const Footer = memo((): JSX.Element | null => {
    const {auth} = useAuth();

    return (
        <FooterContainer>
            <FooterLink auth={auth} href="#">
                PRIVACY POLICY
            </FooterLink>
            <FooterText auth={auth}>© 2023 All rights reserved</FooterText>
        </FooterContainer>
    );
});

export default Footer;
