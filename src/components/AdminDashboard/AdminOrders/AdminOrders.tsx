import React from "react";
import { SimpleBikeEntity } from "types";
import {AdminOrder} from "../AdminOrder/AdminOrder";

import './AdminOrders.css';

interface Props {
    bikes: SimpleBikeEntity[];
    setCurrentBike: (obj: SimpleBikeEntity) => void;
}

export const AdminOrders = ({bikes, setCurrentBike}: Props) => {
    return (
        <>
            <div className="admin-orders">
                {bikes.map(bike => <AdminOrder key={bike.id} bikeInfo={bike} setCurrentBike={setCurrentBike}/>)}
            </div>
        </>
    );
}