import React, {useContext, useState} from "react";
import { Logo } from "../common/Logo/Logo";
import { StartForm } from "../StartForm/StartForm";
import { Footer } from "../Footer/Footer";
import {OrderNoContext} from "../../contexts/orderNo.context";

import './StartView.css';

export const StartView =  () => {
    const {orderNo} = useContext(OrderNoContext);

    return (
            <main className="start-view">
                <Logo/>
                   <StartForm/>
                <Footer/>
            </main>
    );
};