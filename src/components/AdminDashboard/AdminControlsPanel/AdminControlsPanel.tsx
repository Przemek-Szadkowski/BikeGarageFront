import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {NewOrderNoContext} from "../../../contexts/newOrderNo.context";
import {Btn} from "../../common/Btn/Btn";

import './AdminContrrolsPanel.css';


export const AdminControlsPanel = () => {

    const {newOrderNo} = useContext(NewOrderNoContext);

    return (
        <>
            <div className="admin-controls">
                <Link to='/addBike' className="link">Nowe zlecenie</Link>
                <Link to='/addBike' className="link">Archiwum</Link>
                <Btn text="Wyloguj"/>
            </div>
        </>
    );
};