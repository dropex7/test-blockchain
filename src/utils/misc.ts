import {AccountState} from "@/store/accountSlice";

interface PageButtons {
    pages: Array<number>
    isStart: boolean;
    isEnd: boolean
}

export function createTextAddress(address: AccountState["address"]) {
    const length = address.length;
    const start = address.slice(0, 6);
    const end = address.slice(length - 6, length);
    return `${start}...${end}`;
}

export function createPageButtons(
    page: number,
    totalPages: number
): PageButtons {
    const allPages = Array.from(
        {length: totalPages},
        (value, index) => index + 1
    );
    const isFirstElements = page < 5;
    const isLastElements = page + 2 >= totalPages - 1;
    const centerElements = allPages.slice(isFirstElements ? 0 : page - 3, isLastElements ? totalPages : page + 2);
    let result = new Set([...centerElements]);

    return {
        pages: Array.from(result),
        isStart: isFirstElements,
        isEnd: isLastElements
    };
}
