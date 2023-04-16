export interface TokenResponse {
    status: string;
    message: string;
    result: string;
}

export interface CurrencyResponse {
    [key: string]: {
        usd: number;
    };
}

export interface AuthProps {
    auth: boolean;
}
