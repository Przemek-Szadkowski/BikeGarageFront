import React from "react";
import {Logo} from "../common/Logo/Logo";

import './Admindashboard.css';

export const AdminDashboard = () => {
  return (
      <div className="admin-wrapper">
        <div className="admin-aside">
          <Logo/>
          <div className="admin-orders">
            <p>Zlecenia</p>
          </div>
        </div>
        <div className="admin-main">
          <div className="admin-current">
            <div className="admin-current-order">
              <p>Aktualne zlecenie</p>
            </div>
            <div className="admin-chat">
              <p>Chat</p>
            </div>
          </div>
          <div className="admin-controls">
            <p>Nowe zlecenie</p>
            <p>Archiwum???</p>
            <p>( Wyszukiwanie??? Z inputem??? )</p>
            <p>Wyloguj</p>
          </div>
        </div>
      </div>
  );
};