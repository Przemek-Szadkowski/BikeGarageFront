import React, {useContext, useEffect, useState} from "react";
import { SimpleBikeEntity } from "types";
import {NewOrderNoContext} from "../../contexts/newOrderNo.context";
import {Logo} from "../common/Logo/Logo";
import {Loader} from "../common/Loader/Loader";
import {AdminLoginView} from "../AdminLoginView/AdminLoginView";
import {AdminOrders} from "./AdminOrders/AdminOrders";
import {AdminCurrentBike} from "./AdminCurrentBike/AdminCurrentBike";
import {BikeChat} from "../BikeChat/BikeChat";
import {AdminControlsPanel} from "./AdminControlsPanel/AdminControlsPanel";
import {findNewOrderNumber} from "../../helpers/helpers";
import {useToken} from "../../myHooks/useToken";

import './Admindashboard.css';

export const AdminDashboard = () => {

    const {setNewOrderNo} = useContext(NewOrderNoContext);
    const {token, setToken} = useToken();
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [bikes, setBikes] = useState<SimpleBikeEntity[]>([]);
    const [bikesInArchive, setBikesInArchive] = useState<number>(0);
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
            setBikes(data[0]);
            setCurrentBike(data[0][0]);
            setBikesInArchive(data[1][0].records);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
            const newOrderNumber = findNewOrderNumber(bikes.length + bikesInArchive);
            setNewOrderNo(newOrderNumber);
    }, [bikes]);

    // to fetch messages when click on next order will change currentbike
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/admin/dashboard/update`);
            const data = await res.json();
            setBikes(data[0]);
        })();
    }, [currentBike]);


    if(!token) {
        return <AdminLoginView setToken={setToken}/>
    }

  return (
          <div className="admin-wrapper">
            <div className="admin-aside">
              <Logo/>
                { isLoading ? <Loader/> : <AdminOrders bikes={bikes} setCurrentBike={setCurrentBike}/>}
            </div>
            <div className="admin-main">
              <div className="admin-current">
                  {isLoading
                      ? <Loader/>
                      : <AdminCurrentBike currentBike={currentBike} setCurrentBike={setCurrentBike} setBikes={setBikes}/>}
                <div className="admin-chat">
                  <BikeChat chat={currentBike.chat} orderNumber={currentBike.orderNo} clientSide={false}/>
                </div>
              </div>
                <AdminControlsPanel/>
            </div>
          </div>
  );
};