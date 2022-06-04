import React, {useContext, useEffect, useState} from "react";
import { SimpleBikeEntity } from "types";
import {Logo} from "../common/Logo/Logo";
import {Loader} from "../common/Loader/Loader";
import {AdminOrders} from "./AdminOrders/AdminOrders";

import './Admindashboard.css';

export const AdminDashboard = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [bikes, setBikes] = useState<SimpleBikeEntity[]>([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await fetch(`http://localhost:3001/admin/dashboard`);
            const data = await res.json();
            setBikes(data);
            console.log(data);
            setIsLoading(false);
        })();
    }, []);

  return (
      <div className="admin-wrapper">
        <div className="admin-aside">
          <Logo/>
            { isLoading ? <Loader/> : <AdminOrders bikes={bikes}/>}
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