/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {memo, PropsWithChildren} from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import {useAuth} from "@/hooks/useAuth";
import {AuthProps} from "@/components/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({auth}: AuthProps) => (auth ? "var(--bg)" : "black")};
  height: 100vh;
  padding: 3rem;
`;

const Layout = memo<PropsWithChildren>(({children}): JSX.Element | null => {
    const {auth} = useAuth();
    return (
        <>
            <Container auth={auth}>
                <Header/>
                {children}
                <Footer/>
            </Container>
        </>
    );
});

export default Layout;
