import {PropsWithChildren, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {setAccount} from "@/store/accountSlice";
import {useAppDispatch} from "@/store";

export function RouteGuard({children}: PropsWithChildren) {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [authorized, setAuthorized] = useState(false);

    function authCheck(url: string) {
        // redirect to login page if accessing a private page and not logged in
        const publicPaths = ["/"];
        const token = localStorage.getItem("address");
        const path = url.split("?")[0];
        if (!token && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: "/",
                query: {returnUrl: router.asPath},
            });
        } else {
            dispatch(setAccount(token!));
            setAuthorized(true);
        }
    }

    useEffect(() => {
        // on initial load - run auth check
        authCheck(router.asPath);

        const hideContent = () => setAuthorized(false);
        router.events.on("routeChangeStart", hideContent);

        // on route change complete - run auth check
        router.events.on("routeChangeComplete", authCheck);

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off("routeChangeStart", hideContent);
            router.events.off("routeChangeComplete", authCheck);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{authorized && children}</>;
}
