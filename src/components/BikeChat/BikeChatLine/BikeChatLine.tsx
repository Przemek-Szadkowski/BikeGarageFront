import React, {useEffect, useRef} from "react";
import {MessageEntity} from 'types';

import './BikeChatLine.css';

interface Props {
    msg: MessageEntity;
}

export const BikeChatLine = ({msg}: Props) => {

    const lastParagraph = useRef<HTMLParagraphElement>(null);

    // scrolling view to the last line
    useEffect(() => {
        if(lastParagraph.current) {
            lastParagraph.current.scrollIntoView();
        }
    }, [])

    return (
        <p key={msg.id} className={msg.isClientAsk === 1 ? 'client-ask' : ''} ref={lastParagraph}>{msg.text}</p>
    );
};