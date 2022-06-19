import React, {SyntheticEvent, useContext, useEffect, useRef, useState} from "react";
import {Footer} from "../Footer/Footer";
import {MessageEntity} from 'types';
import {OrderNoContext} from "../../contexts/orderNo.context";
import {Loader} from "../common/Loader/Loader";
import {BikeChatLine} from "./BikeChatLine/BikeChatLine";

import './BikeChat.css';

interface Props {
    chat: MessageEntity[];
    clientSide: boolean;
    orderNo?: string;
}

export const BikeChat = (props: Props) => {

    const chatForm = useRef(null);

    const {orderNo} = useContext(OrderNoContext);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [textAreaVal, setTextAreaVal] = useState<string>('');
    const [chatMessages, setChatMessages] = useState<MessageEntity[] | []>(props.chat);

    useEffect(() => {
        (async () => {
            setChatMessages(props.chat);
        })();
    }, [props.chat]);

    const sendMessage = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const addMessage = await fetch(`http://localhost:3001/bike/${props.orderNo ? props.orderNo : orderNo}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isClientAsk: props.clientSide ? 1 : 0,
                    isNew: props.clientSide ? 1 : 0,
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
                  <form ref={chatForm} onSubmit={sendMessage}>
                      <label>
                          {props.clientSide ? 'Pytania o rower? Pisz śmiało!' : 'Chat'}<br/>
                          <textarea
                              value={textAreaVal}
                              onChange={e => setTextAreaVal(e.target.value)}
                              onKeyPress={(e) => {
                                  // stop making new line on enter in textarea and sendMessage on enter press???
                                  if(e.key === 'Enter' && !e.shiftKey){
                                      e.preventDefault();
                                  }
                                  if(e.key === 'Enter') {
                                      sendMessage(e);
                                  }
                              }}
                          >
                          </textarea>
                      </label>
                      <button className="send-btn">Wyślij</button>
                  </form>
              </div>
              <div className="chat-chat">
                  {chatMessages ? chatMessages.map(msg => <BikeChatLine key={msg.id} msg={msg}/>) : ''}
              </div>
          </div>
          <Footer/>
      </>
  );
};