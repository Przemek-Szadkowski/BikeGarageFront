import React, {SyntheticEvent, useState} from "react";
import {apiUrl} from "../../config/api";
import {Logo} from "../common/Logo/Logo";
import {Btn} from "../common/Btn/Btn";
import {Footer} from "../Footer/Footer";

import './AdminLoginView.css';

interface Props {
    setToken: (token: {token: string}) => void;
}

export const AdminLoginView = ({setToken}: Props) => {

    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginError, setLoginError] = useState<string>('');

    const loginUser = async (credentials: object) => {
        try {
            const res = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    credentials,
                }),
            });

            const data = await res.json();

            if(data.error) {
                setLoginError(data.error);
                return;
            }

            return data;

        } catch {
            throw new Error('Przepraszamy za chwilowe problemy. Spróbuj za chwilę!');
        }
    }

    const submitLogin = async (e: SyntheticEvent) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <>
            <div className="admin-login">
                <Logo/>
                <form action="" onSubmit={submitLogin}>
                    {loginError && <p className="error-paragraph">{loginError.toUpperCase()}</p>}
                    <label>
                        Login:
                        <input type="text" value={username} onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        Hasło:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <Btn text="Zaloguj"/>
                </form>
                <Footer/>
            </div>
        </>
    );
};