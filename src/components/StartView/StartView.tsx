import React from "react";
import {Link} from "react-router-dom";
import { Logo } from "../common/Logo/Logo";
import { StartForm } from "../StartForm/StartForm";
import { Footer } from "../Footer/Footer";

import './StartView.css';

export const StartView =  () => {

    return (
            <main className="start-view">
                <Link to='/admin/dashboard' className="link-admin">Admin</Link>
                <Logo/>
                   <StartForm/>
                <Footer/>
            </main>
    );
};