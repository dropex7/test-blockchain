/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {memo, useMemo} from "react";
import {AccountState} from "@/store/accountSlice";
import styled from "styled-components";
import {createTextAddress} from "@/utils/misc";
import AddressView from "@/components/View/AddressView";

interface AccountViewProps {
    address: AccountState["address"];
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  opacity: 0.5;
  margin-right: 13px;
`;

const AccountView = memo<AccountViewProps>(
    ({address}): JSX.Element | null => {
        return (
            <Container>
                <DescriptionText>Account</DescriptionText>
                <AddressView address={address}/>
            </Container>
        );
    }
);

export default AccountView;
