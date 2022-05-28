import React, {useState} from 'react';
import {StartView} from "./components/StartView/StartView";
import {Route, Routes} from "react-router-dom";
import {BikeInfo} from "./components/BikeInfo/BikeInfo";
import {OrderNoContext} from './contexts/orderNo.context';


import './App.css';

export const App = () => {
  const [orderNo, setOrderNo] = useState('');

  return (
      <OrderNoContext.Provider value={{orderNo, setOrderNo}}>
        <Routes>
          <Route path="/" element={<StartView/>}/>
          <Route path="/bike/:orderNo" element={<BikeInfo/>}/>
        </Routes>
      </OrderNoContext.Provider>
  );
}
