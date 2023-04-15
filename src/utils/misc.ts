import {AccountState} from "@/store/accountSlice";

export function createTextAddress(address: AccountState['address']) {
    const length = address.length
    const start = address.slice(0, 6)
    const end = address.slice(length - 6, length)
    return `${start}...${end}`
}