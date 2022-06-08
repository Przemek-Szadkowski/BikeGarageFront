import React, {useContext, useState} from "react";
import { SimpleBikeEntity } from "types";
import {Btn} from "../../common/Btn/Btn";


import './AdminCurrentBike.css';

const optionsValues = ['PRZYJĘTY DO SERWISU', 'OCZEKUJĄCY NA NAPRAWĘ', 'OCZEKUJĄCY', 'OCZEKUJĄCY NA CZĘŚCI', 'W NAPRAWIE', 'OCZEKUJĄCY NA KONTAKT Z KLIENTEM', 'NAPRAWIONY', 'ZAKOŃCZONY', 'GOTOWY DO ODBIORU', 'ZLECENIE ANULOWANE'];

interface Props {
    currentBike: SimpleBikeEntity;
}

export const AdminCurrentBike = ({currentBike}: Props) => {

    const [selectValue, setSelectValue] = useState('');

    return (
        <>
            <form action="">
                <div className="admin-current-order" >
                    <p className="admin-current-orderNo"><span>No.</span>{currentBike.orderNo}</p>
                    <p className="admin-current-bikeModel">{currentBike.bikeModel}</p>
                    <p className="admin-current-serialNo"><span>Serial No.</span> {currentBike.serialNo}</p>
                    <p className="admin-current-dateOfReception">{(String(currentBike.dateOfReception).split('T')[0])}</p>
                    <select className="admin-current-status" value={currentBike.status} onChange={e => setSelectValue(e.target.value)}>
                        {optionsValues.map(optionValue => {
                            return (
                                <option key={optionValue} value={optionValue}>{optionValue}</option>
                            );
                        })}
                    </select>
                    <p className="admin-current-comments">{currentBike.comments}</p>
                    <p className="admin-current-name">{currentBike.name}</p>
                    <p className="admin-current-surname">{currentBike.surname}</p>
                    <p className="admin-current-phoneNo">☎️ {currentBike.phoneNo}</p>
                    <p className="admin-current-downPayment">Zaliczka: <span>{currentBike.downPayment}</span> zł</p>
                    <div className="editForm">
                        <Btn text="edytuj"></Btn>
                        <Btn text="usuń"></Btn>
                    </div>
                </div>
            </form>
        </>
    );
};