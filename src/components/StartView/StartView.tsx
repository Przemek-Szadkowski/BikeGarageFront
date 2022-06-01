import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { Logo } from "../common/Logo/Logo";
import { StartForm } from "../StartForm/StartForm";
import { Footer } from "../Footer/Footer";
import {OrderNoContext} from "../../contexts/orderNo.context";

import './StartView.css';

export const StartView =  () => {

    return (
            <main className="start-view">
                <Link to='/admin' className="link-admin">Admin</Link>
                <Logo/>
                   <StartForm/>
                <Footer/>
            </main>
    );
};