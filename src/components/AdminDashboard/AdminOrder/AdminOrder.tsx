import React from "react";
import { SimpleBikeEntity } from "types";

import './AdminOrder.css';

interface Props {
    bikeInfo: SimpleBikeEntity;
}

export const AdminOrder = ({bikeInfo}: Props) => {
    return (
        <>
            <div className="order-bike">
                <p>{(String(bikeInfo.dateOfReception).split('T')[0])}</p>
                <p>{bikeInfo.bikeModel}</p>
                <p>{bikeInfo.serialNo}</p>
                <p>{bikeInfo.name} {bikeInfo.surname}</p>
                <p>{bikeInfo.phoneNo}</p>
            </div>
        </>

    );
};