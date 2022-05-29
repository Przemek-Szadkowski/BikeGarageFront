import React from "react";
import {Footer} from "../Footer/Footer";

import './BikeChat.css';

interface Props {
    // why any? only this type is correct?
    chat: Array<any>;
}

export const BikeChat = (props: Props) => {
  return (
      <>
          <div className="chat-view">
              <div className="chat-info">
                  <form action="">
                      <label>
                          Pytania o rower? Pisz śmiało!<br/>
                          <textarea name="" id=""></textarea>
                      </label>
                  </form>
              </div>
              <div className="chat-chat">
                  {props.chat.map(msg => <p className={msg.isClientAsk === 1 ? 'client-ask' : ''}>{msg.text}</p>)}
              </div>
          </div>
          <Footer/>
      </>
  );
};