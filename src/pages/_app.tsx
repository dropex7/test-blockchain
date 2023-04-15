import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "@/store";
import {RouteGuard} from "@/components/RouteGuard";
import Layout from "@/components/Layout";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <RouteGuard>
                    <Component {...pageProps} />
                </RouteGuard>
            </Layout>
        </Provider>
    );
}
