import React, {SyntheticEvent, useContext, useState} from "react";
import {Btn} from "../common/Btn/Btn";
import {OrderNoContext} from "../../contexts/orderNo.context";

import './StartForm.css';

export const StartForm = () => {
    const {orderNo, setOrderNo} = useContext(OrderNoContext);
    const [inputVal, setInputVal] = useState(orderNo);

    const setOrderNoFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setOrderNo(inputVal);
    };

  return (
      <div>
          <form className="main-form" onSubmit={setOrderNoFromLocalState}>
              <label>
                  Numer zlecenia: <br/>
                  <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
              </label>
              {/*This part will add later*/}
              {/*<label>*/}
              {/*    Hasło: <br/>*/}
              {/*    <input type="password"/>*/}
              {/*</label>*/}
              <Btn text="Wyświetl"/>
              {/*<Btn text="Wyświetl" to="/bikeinfo"/>*/}
          </form>
      </div>
  );
};