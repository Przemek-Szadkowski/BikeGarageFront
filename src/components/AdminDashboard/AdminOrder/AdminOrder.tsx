import React, {useContext, useEffect, useState} from "react";
import { SimpleBikeEntity } from "types";

import './AdminOrder.css';


interface Props {
    bikeInfo: SimpleBikeEntity;
    setCurrentBike: (obj: SimpleBikeEntity) => void;
}

export const AdminOrder = ({bikeInfo, setCurrentBike}: Props) => {

    return (
        <>
            <div className="order-bike" onClick={() => setCurrentBike(bikeInfo)}>
                <p className="order-date">{(String(bikeInfo.dateOfReception).split('T')[0])}</p>
                <p>NO. {bikeInfo.orderNo}</p>
                <p className="order-model">{bikeInfo.bikeModel}</p>
                <p className="order-owner">{bikeInfo.name} {bikeInfo.surname}</p>
                <p className="order-status">{bikeInfo.status}</p>
                <div className={bikeInfo.chat.some(chatLine => chatLine.isNew === 1) ? 'newMsg' : 'oldMsg'}>✉︎</div>
            </div>
        </>

    );
};