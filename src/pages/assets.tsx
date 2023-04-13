import {useAppSelector} from "@/store";
import {useEffect} from "react";

import {useRouter} from "next/router";
import List from "@/components/List";


export default function Assets() {
    const router = useRouter();
    const address = useAppSelector(state => state.account.address)

    useEffect(() => {
        if (address.length < 1) {
            router.push('/')
        }
    }, [address.length, router])


    return <><List/></>
}