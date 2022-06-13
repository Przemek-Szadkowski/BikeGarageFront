import React, {useContext, useEffect, useState} from "react";
import { SimpleBikeEntity } from "types";
import {Logo} from "../common/Logo/Logo";
import {Loader} from "../common/Loader/Loader";
import {AdminOrders} from "./AdminOrders/AdminOrders";
import {AdminCurrentBike} from "./AdminCurrentBike/AdminCurrentBike";
import {BikeChat} from "../BikeChat/BikeChat";
import {AdminControlsPanel} from "./AdminControlsPanel/AdminControlsPanel";
import {findNewOrderNumber} from "../../helpers/helpers";

import './Admindashboard.css';
import {OrderNoContext} from "../../contexts/orderNo.context";

export const AdminDashboard = () => {

    const {orderNo, setOrderNo} = useContext(OrderNoContext);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [isAddFormVisible, setIsAddFormVisible] = useState<Boolean>(false);
    const [bikes, setBikes] = useState<SimpleBikeEntity[]>([]);
    // const [newOrderNo, setNewOrderNo] = useState<string | null>(null);
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
            setCurrentBike(data[0]);
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
            const newOrderNumber = findNewOrderNumber(bikes.length);
            // setNewOrderNo(newOrderNumber);
            setOrderNo(newOrderNumber);
    }, [bikes]);

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
                  <BikeChat chat={currentBike.chat} orderNo={currentBike.orderNo} clientSide={false}/>
                </div>
              </div>
                <AdminControlsPanel/>
            </div>
          </div>
  );
};