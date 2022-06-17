import React, {useState} from 'react';
import {StartView} from "./components/StartView/StartView";
import {AdminLoginView} from "./components/AdminLoginView/AdminLoginView";
import {AdminDashboard} from "./components/AdminDashboard/AdminDashboard";
import {Route, Routes} from "react-router-dom";
import {BikeInfo} from "./components/BikeInfo/BikeInfo";
import {AddBikeForm} from "./components/AddBikeForm/AddBikeForm";
import {EditBikeForm} from "./components/EditBikeForm/EditBikeForm";

import {OrderNoContext} from './contexts/orderNo.context';
import {NewOrderNoContext} from './contexts/newOrderNo.context';
import {EditedBikeContext} from './contexts/editedBike.context';

export const App = () => {
  const [orderNo, setOrderNo] = useState('');
  const [newOrderNo, setNewOrderNo] = useState('');
  const [editedBike, setEditedBike] = useState('');

  return (
      <OrderNoContext.Provider value={{orderNo, setOrderNo}}>
        <NewOrderNoContext.Provider value={{newOrderNo, setNewOrderNo}}>
            <EditedBikeContext.Provider value={{editedBike, setEditedBike}}>
                    <Routes>
                        <Route path="/" element={<StartView/>}/>
                        <Route path="/bike/:orderNo" element={<BikeInfo/>}/>
                        <Route path="/admin" element={<AdminLoginView/>}/>
                        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
                        <Route path="/addBike" element={<AddBikeForm/>}/>
                        <Route path="/editBike" element={<EditBikeForm/>}/>
                    </Routes>
            </EditedBikeContext.Provider>
        </NewOrderNoContext.Provider>
      </OrderNoContext.Provider>
  );
}
