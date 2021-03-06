import React, {useContext, useEffect, useState} from "react";
import {SimpleBikeEntity} from 'types';
import {OrderNoContext} from "../../contexts/orderNo.context";
import {apiUrl} from "../../config/api";
import {Logo} from "../common/Logo/Logo";
import {Loader} from "../common/Loader/Loader";
import {BikeChat} from "../BikeChat/BikeChat";
import {BikeErrorView} from "../BikeErrorView/BikeErrorView";

import './BikeInfo.css';

export const BikeInfo = () => {

    const {orderNo} = useContext(OrderNoContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [bike, setBike] = useState<SimpleBikeEntity>({
        id: '',
        orderNo: '',
        name: '',
        surname: '',
        bikeModel: '',
        serialNo: '',
        dateOfReception: {},
        phoneNo: '',
        downPayment: 0.00,
        status: '',
        comments: '',
        chat: [],
    });

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await fetch(`${apiUrl}/bike/${orderNo}`);
            const data = await res.json();
            setBike(data);
            setIsLoading(false);
        })();
    }, [orderNo]);

    if(isLoading) {
        return (
            <>
                <div className="bike-loader-wrapper">
                    <Loader/>
                </div>
            </>
        )
    }

    if(!bike.id) {
        return (
            <BikeErrorView/>
        )
    }

    return (
        <>
            <div className="bike-view">
                <div className="bike-part">
                    {<Logo/>}
                    <div className="information">
                        <div><p><span className="info">Nr zlecenia </span>{bike.orderNo}</p></div>
                        <div className="model">
                            <p>
                                <span className="info">Rower </span> {bike.bikeModel}<br/>
                                <span className="info">Nr seryjny ramy</span> {bike.serialNo}
                            </p>
                        </div>
                        <div className="status"><p><span className="info">Status</span> {bike.status}</p></div>
                        <div><p><span className="info">Data przyj??cia</span> {(String(bike.dateOfReception).split('T')[0])}</p></div>
                        <div className="owner">
                            <p>
                                <span className="info">W??a??ciciel</span> {bike.name} {bike.surname}<br/>
                                <span className="info">Nr telefonu</span> {bike.phoneNo}
                            </p>
                        </div>
                        <div><p><span className="info">Zaliczka</span> {bike.downPayment} z??</p></div>
                        <div className="comments"><p><span className="info">Uwagi</span> {bike.comments}</p></div>
                    </div>
                </div>
                <div className="bike-conversation">
                    <BikeChat chat={bike.chat} clientSide={true}/>
                </div>
            </div>
        </>
)
};