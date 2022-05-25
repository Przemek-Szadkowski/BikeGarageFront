import React from "react";
import {Btn} from "../common/Btn/Btn";

import './StartForm.css';

export const StartForm = () => {
  return (
      <div>
          <form className="main-form" action="">
              <label>
                  Numer zlecenia: <br/>
                  <input type="number"/>
              </label>
              {/*This part will add later*/}
              {/*<label>*/}
              {/*    Hasło: <br/>*/}
              {/*    <input type="password"/>*/}
              {/*</label>*/}
              <Btn text="Wyświetl"/>
          </form>
      </div>
  );
};