import React, {useState} from "react";
import { Logo } from "../common/Logo/Logo";
import { StartForm } from "../StartForm/StartForm";
import { Footer } from "../Footer/Footer";
import {BikeInfo} from "../BikeInfo/BikeInfo";
import {OrderNoContext} from '../../contexts/orderNo.context';

import './StartView.css';

export const StartView =  () => {
    const [orderNo, setOrderNo] = useState('');

    return (
            <main className="start-view">
                <OrderNoContext.Provider value={{orderNo, setOrderNo}}>
                <Logo/>
                    {orderNo ? <BikeInfo/> : <StartForm/>}
                <Footer/>
                </OrderNoContext.Provider>
            </main>
    );
};