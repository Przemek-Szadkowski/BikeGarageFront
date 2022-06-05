import React, {useContext} from "react";
import { SimpleBikeEntity } from "types";


import './AdminCurrentBike.css';


interface Props {
    currentBike: SimpleBikeEntity;
}

export const AdminCurrentBike = ({currentBike}: Props) => {

    return (
        <>
            <div className="admin-current-order" >
                <p>{currentBike.orderNo}</p>
                <p>{currentBike.bikeModel}</p>
                <p>{currentBike.serialNo}</p>
                <p>{(String(currentBike.dateOfReception).split('T')[0])}</p>
                <p>{currentBike.name}</p>
                <p>{currentBike.surname}</p>
                <p>{currentBike.phoneNo}</p>
                <p>{currentBike.comments}</p>
                <p>{currentBike.downPayment}</p>
                <p>{currentBike.status}</p>
            </div>
        </>
    );
};