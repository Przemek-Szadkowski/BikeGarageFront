import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {OrderNoContext} from "../../contexts/orderNo.context";
import {Logo} from "../common/Logo/Logo";

import './BikeErrorView.css';

export const BikeErrorView = () => {

    const {orderNo} = useContext(OrderNoContext);

    return (
        <div className="error-wrapper">
            <Logo/>
            <div className="error-info">
                <p>{`Zlecenie o numerze ${orderNo} nie jest zarejestrowane w systemie`}</p>
                <Link className='back' to='/'>Wróć</Link>
            </div>
        </div>
    );
}