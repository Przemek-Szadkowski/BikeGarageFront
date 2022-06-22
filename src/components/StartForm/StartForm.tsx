import React, {SyntheticEvent, useContext, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {OrderNoContext} from "../../contexts/orderNo.context";
import {Btn} from "../common/Btn/Btn";

import './StartForm.css';

export const StartForm = () => {
    let navigate = useNavigate();
    const {orderNo, setOrderNo} = useContext(OrderNoContext);
    const [inputVal, setInputVal] = useState<string>(orderNo);

    const setOrderNoFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        if(inputVal) {
            setOrderNo(inputVal);
            navigate(`/bike/${inputVal}`);
        }
    }

  return (
      <div>
          <form className="main-form" onSubmit={setOrderNoFromLocalState}>
              <label>
                  Numer zlecenia: <br/>
                  <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
              </label>
              {/*This part will be add later*/}
              {/*<label>*/}
              {/*    Hasło: <br/>*/}
              {/*    <input type="password"/>*/}
              {/*</label>*/}
              <Btn text="Wyświetl"/>
          </form>
      </div>
  );
};