import Head from "next/head";
import {ethers} from "ethers";
import styled from "styled-components";
import {useRouter} from "next/router";
import {useAppDispatch} from "@/store";
import {setAccount} from "@/store/accountSlice";
import {useCallback, useEffect} from "react";
import BlockWithFigures from "@/components/Figures/BlockWithFigures";
import {useAuth} from "@/hooks/useAuth";

const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  height: 70vh;
`;

const AuthContainer = styled.div`
  display: flex;
  row-gap: 125px;
  flex-direction: column;
`;

const AuthButton = styled.button`
  text-transform: uppercase;
  background: white;
  border: none;
  color: black;
  padding: 10px 0;
  border-radius: 4px;
`;

const Title = styled.h1`
  color: white;
  line-height: 120%;
`;

export default function Home() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {auth} = useAuth()

    const handleButton = useCallback(async () => {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            const address = accounts[0];
            localStorage.setItem("address", address);
            dispatch(setAccount(address));
            router.push("/assets");
        } else {
            alert("INSTALL METAMASK EXTENSION")
        }
    }, [dispatch, router]);

    useEffect(() => {
        if (auth) {
            router.push("/assets");
        }
    }, [auth, router])

    return (
        <>
            <Head>
                <title>Balancer</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Content>
                <AuthContainer>
                    <Title>
                        Track Your Crypto Wealth with Our Wallet Balance Service
                    </Title>
                    <AuthButton onClick={handleButton}>Metamask</AuthButton>
                </AuthContainer>
                <BlockWithFigures/>
            </Content>
        </>
    );
}
