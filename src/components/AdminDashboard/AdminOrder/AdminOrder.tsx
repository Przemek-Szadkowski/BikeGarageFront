import React from "react";
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
                <p>{(String(bikeInfo.dateOfReception).split('T')[0])}</p>
                <p>{bikeInfo.orderNo}</p>
                <p>{bikeInfo.bikeModel}</p>
                <p>{bikeInfo.serialNo}</p>
                <p>{bikeInfo.name} {bikeInfo.surname}</p>
                <p>{bikeInfo.phoneNo}</p>
            </div>
        </>

    );
};