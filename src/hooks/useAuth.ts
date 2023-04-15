import {useAppSelector} from "@/store";
import {useMemo} from "react";

export function useAuth() {
    const address = useAppSelector((state) => state.account.address);
    const auth = useMemo(() => (address ?? "").length > 0, [address]);
    return {auth};
}
