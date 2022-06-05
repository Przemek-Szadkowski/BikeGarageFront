import React, {useContext, useEffect, useState} from "react";
import { SimpleBikeEntity } from "types";
import {Logo} from "../common/Logo/Logo";
import {Loader} from "../common/Loader/Loader";
import {AdminOrders} from "./AdminOrders/AdminOrders";
import {AdminCurrentBike} from "./AdminCurrentBike/AdminCurrentBike";
import {BikeChat} from "../BikeChat/BikeChat";

import './Admindashboard.css';

export const AdminDashboard = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [bikes, setBikes] = useState<SimpleBikeEntity[]>([]);
    const [currentBike, setCurrentBike] = useState<SimpleBikeEntity>({
        id: '',
        orderNo: '',
        name: '',
        surname: '',
        bikeModel: '',
        serialNo: '',
        dateOfReception: {},
        phoneNo: '',
        downPayment: 0.00,
        status: '',
        comments: '',
        chat: [],
    });

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await fetch(`http://localhost:3001/admin/dashboard`);
            const data = await res.json();
            setBikes(data);
            console.log(data);
            setCurrentBike(data[0]);
            setIsLoading(false);
        })();
    }, []);

  return (
          <div className="admin-wrapper">
            <div className="admin-aside">
              <Logo/>
                { isLoading ? <Loader/> : <AdminOrders bikes={bikes} setCurrentBike={setCurrentBike}/>}
            </div>
            <div className="admin-main">
              <div className="admin-current">
                  {isLoading ? <Loader/> : <AdminCurrentBike currentBike={currentBike}/>}
                <div className="admin-chat">
                  <BikeChat chat={currentBike.chat} orderNo={currentBike.orderNo}/>
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