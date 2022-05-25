import React from "react";
import { Logo } from "../common/Logo/Logo";
import { StartForm } from "../StartForm/StartForm";
import { Footer } from "../Footer/Footer";

import './StartView.css';

export const StartView =  () => {
    return (
            <main className="start-view">
                <Logo/>
                <StartForm/>
                <Footer/>
            </main>
    );
};