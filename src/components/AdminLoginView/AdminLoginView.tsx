import React from "react";
import {Logo} from "../common/Logo/Logo";
import {Btn} from "../common/Btn/Btn";
import {Footer} from "../Footer/Footer";

import './AdminLoginView.css';

export const AdminLoginView = () => {
    return (
        <>
            <div className="admin-login">
                <Logo/>
                <form action="">
                    <label>
                        Login:
                        <input type="text"/>
                    </label>
                    <label>
                        Hasło:
                        <input type="password"/>
                    </label>
                    <Btn text="Zaloguj"/>
                </form>
                <Footer/>
            </div>
        </>
    );
};