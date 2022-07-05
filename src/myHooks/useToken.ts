import {useState} from "react";

interface Token {
    setToken: (token: {token: string}) => void;
    token: string | null
}

export const useToken = (): Token => {
    const getToken = (): string | null => {
        // zmienić to any na właściwy typ?!
        const tokenString: any = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    }

    const [token, setToken] = useState<string | null>(getToken());

    const saveToken = (userToken: { token: string } | null) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        if(userToken) setToken(userToken.token);
    }

    return {
        setToken: saveToken,
        token
    }
}