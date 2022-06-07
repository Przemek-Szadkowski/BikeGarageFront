import React, {useContext} from "react";
import { SimpleBikeEntity } from "types";
import {Btn} from "../../common/Btn/Btn";


import './AdminCurrentBike.css';


interface Props {
    currentBike: SimpleBikeEntity;
}

export const AdminCurrentBike = ({currentBike}: Props) => {

    return (
        <>
            <div className="admin-current-order" >
                <p className="admin-current-orderNo"><span>No.</span>{currentBike.orderNo}</p>
                <p className="admin-current-bikeModel">{currentBike.bikeModel}</p>
                <p className="admin-current-serialNo"><span>Serial No.</span> {currentBike.serialNo}</p>
                <p className="admin-current-dateOfReception">{(String(currentBike.dateOfReception).split('T')[0])}</p>
                {/*następne p we formie?*/}
                <p className="admin-current-status">{currentBike.status}</p>
                <p className="admin-current-comments">{currentBike.comments}</p>
                <p className="admin-current-name">{currentBike.name}</p>
                <p className="admin-current-surname">{currentBike.surname}</p>
                <p className="admin-current-phoneNo">{currentBike.phoneNo}</p>
                <p className="admin-current-downPayment">{currentBike.downPayment}</p>
                <div className="editForm">
                    <form action="">
                        <Btn text="edytuj"></Btn>
                        <Btn text="usuń"></Btn>
                    </form>
                </div>
            </div>
        </>
    );
};