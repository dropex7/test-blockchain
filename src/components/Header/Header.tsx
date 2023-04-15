/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {memo} from "react";
import {useAppSelector} from "@/store";
import styled from "styled-components";
import AccountView from "@/components/View/AccountView";
import {useAuth} from "@/hooks/useAuth";
import {AuthProps} from "@/components/types";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({auth}: AuthProps) => auth ? '' : 'color: white'}
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
`

const Header = memo((): JSX.Element | null => {
    const {auth} = useAuth()
    const address = useAppSelector(state => state.account.address)

    return (
        <Container auth={auth}>
            <Title>BALANCER</Title>
            {auth && <AccountView address={address}/>}
        </Container>
    );
});

export default Header;
