import React from "react";
import {Link} from "react-router-dom";
import {Btn} from "../../common/Btn/Btn";

import './AdminContrrolsPanel.css';

export const AdminControlsPanel = () => {

    return (
        <>
            <div className="admin-controls">
                <Link to='/addBike' className="link">Nowe zlecenie</Link>
                <Link to='/archive' className="link">Archiwum</Link>
                <Btn text="Wyloguj"/>
            </div>
        </>
    );
};