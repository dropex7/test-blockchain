/**
 * Created by MIRZOEV A. on 14.04.2023
 */

import {memo, useMemo} from 'react';
import {AccountState} from "@/store/accountSlice";
import styled from "styled-components";
import {add} from "@noble/hashes/_u64";
import {createTextAddress} from "@/utils/misc";

interface AddressViewProps {
    address: AccountState["address"];
}

const AddressContainer = styled.span`
  padding: 12px 10px;
  border: 1px solid #000000;
  border-radius: 4px;
  font-size: 13px;
  text-transform: uppercase;
  opacity: 0.5;
`

const AddressView = memo<AddressViewProps>(({address}): JSX.Element | null => {
    const textAddress = useMemo(() => createTextAddress(address), [address]);
    return <AddressContainer>{textAddress}</AddressContainer>;
});

export default AddressView;