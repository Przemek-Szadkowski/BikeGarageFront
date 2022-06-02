import React, {SyntheticEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Logo} from "../common/Logo/Logo";
import {Btn} from "../common/Btn/Btn";
import {Footer} from "../Footer/Footer";

import './AdminLoginView.css';

export const AdminLoginView = () => {

    let navigate = useNavigate();
    const [loginVal, setLoginVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const submitLogin = (e: SyntheticEvent) => {
        e.preventDefault();
        navigate(`/admin/dashboard`);
    }

    return (
        <>
            <div className="admin-login">
                <Logo/>
                <form action="" onSubmit={submitLogin}>
                    <label>
                        Login:
                        <input type="text" value={loginVal} onChange={e => setLoginVal(e.target.value)}/>
                    </label>
                    <label>
                        Hasło:
                        <input type="password" value={passwordVal} onChange={e => setPasswordVal(e.target.value)}/>
                    </label>
                    <Btn text="Zaloguj"/>
                </form>
                <Footer/>
            </div>
        </>
    );
};