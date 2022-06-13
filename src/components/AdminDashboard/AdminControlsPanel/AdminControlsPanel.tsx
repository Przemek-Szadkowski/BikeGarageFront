import React from "react";
import {Btn} from "../../common/Btn/Btn";

import './AdminContrrolsPanel.css';
import {Link} from "react-router-dom";


export const AdminControlsPanel = () => {

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