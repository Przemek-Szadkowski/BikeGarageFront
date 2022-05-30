import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import {Footer} from "../Footer/Footer";
import {MessageEntity} from 'types';
import {OrderNoContext} from "../../contexts/orderNo.context";
import {Loader} from "../common/Loader/Loader";

import './BikeChat.css';
import {Btn} from "../common/Btn/Btn";

interface Props {
    // why any? only this type is correct? MessageEntity does work?
    chat: MessageEntity[];
}

export const BikeChat = (props: Props) => {

    const {orderNo} = useContext(OrderNoContext);
    const [isLoading, setIsLoading] = useState(false);
    const [textAreaVal, setTextAreaVal] = useState('');
    const [chatMessages, setChatMessages] = useState(props.chat);

    const sendMessage = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const addMessage = await fetch(`http://localhost:3001/bike/${orderNo}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isClientAsk: 1,
                    isNew: 1,
                    textAreaVal,
                    orderNo,
                }),
            });

            const data = await addMessage.json();
            setChatMessages(data);

        } finally {
            setTextAreaVal('');
            setIsLoading(false);
        }

    };

    if(isLoading) {
        return <Loader/>;
    }



  return (
      <>
          <div className="chat-view">
              <div className="chat-info">
                  <form onSubmit={sendMessage}>
                      <label>
                          Pytania o rower? Pisz śmiało!<br/>
                          <textarea value={textAreaVal} onChange={e => setTextAreaVal(e.target.value)}></textarea>
                      </label>
                      <button className="send-btn">Wyślij</button>
                  </form>
              </div>
              <div className="chat-chat">
                  {chatMessages ? chatMessages.map(msg => <p key={msg.id} className={msg.isClientAsk === 1 ? 'client-ask' : ''}>{msg.text}</p>) : ''}
              </div>
          </div>
          <Footer/>
      </>
  );
};