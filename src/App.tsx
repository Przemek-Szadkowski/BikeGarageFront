import React, {useState} from 'react';
import {StartView} from "./components/StartView/StartView";
import {AdminLoginView} from "./components/AdminLoginView/AdminLoginView";
import {AdminDashboard} from "./components/AdminDashboard/AdminDashboard";
import {Route, Routes} from "react-router-dom";
import {BikeInfo} from "./components/BikeInfo/BikeInfo";
import {AddBikeForm} from "./components/AddBikeForm/AddBikeForm";
import {OrderNoContext} from './contexts/orderNo.context';

export const App = () => {
  const [orderNo, setOrderNo] = useState('');

  return (
      <OrderNoContext.Provider value={{orderNo, setOrderNo}}>
        <Routes>
            <Route path="/" element={<StartView/>}/>
            <Route path="/bike/:orderNo" element={<BikeInfo/>}/>
            <Route path="/admin" element={<AdminLoginView/>}/>
            <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route path="/addBike" element={<AddBikeForm/>}/>
        </Routes>
      </OrderNoContext.Provider>
  );
}
