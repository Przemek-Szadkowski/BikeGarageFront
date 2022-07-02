import React from "react";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './AdminContrrolsPanel.css';

export const AdminControlsPanel = () => {

    let navigate = useNavigate();

    const logout = (): void => {
        sessionStorage.clear();
        navigate(`/`);
    }

    return (
        <>
            <div className="admin-controls">
                <Link to='/addBike' className="link">Nowe zlecenie</Link>
                <Link to='/archive' className="link">Archiwum</Link>
                <button onClick={logout}>Wyloguj</button>
            </div>
        </>
    );
};