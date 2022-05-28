import React, {useContext, useEffect, useState} from "react";
import {SimpleBikeEntity} from 'types';
import {OrderNoContext} from "../../contexts/orderNo.context";
import {findAllByDisplayValue} from "@testing-library/react";

import './BikeInfo.css';
import {log} from "util";
import {Logo} from "../common/Logo/Logo";
import {Footer} from "../Footer/Footer";
import {Loader} from "../common/Loader/Loader";

export const BikeInfo = () => {

    const {orderNo} = useContext(OrderNoContext);
    const [isLoading, setIsLoading] = useState(false);
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
    });

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await fetch(`http://localhost:3001/bike/${orderNo}`);
            console.log(`http://localhost:3001/bike/${orderNo}`)
            const data = await res.json();
            setBike(data);
            setIsLoading(false);
        })();
    }, []);

    if(isLoading) {
        return (
            <Loader/>
        )
    }

    if(!bike) {
        return (
            <p>Cannot get a bike!</p>
        )
    }

    return (
        <>
            <div className="bike-view">
                <div className="bike-part">
                    {<Logo/>}
                    <div className="information">
                        <div><p>{bike.orderNo}</p></div>
                        <div className="model">
                            <p>
                                {bike.bikeModel}<br/>
                                {bike.serialNo}
                            </p>
                        </div>
                        <div className="status"><p>{bike.status}</p></div>
                        <div><p>{(String(bike.dateOfReception).split('T')[0])}</p></div>
                        <div className="owner">
                            <p>
                                {bike.name} {bike.surname}<br/>
                                {bike.phoneNo}
                            </p>
                        </div>
                        <div><p>{bike.downPayment}</p></div>
                        <div className="comments"><p>{bike.comments}</p></div>
                    </div>
                    <Footer/>
                </div>
                <div className="bike-conversation"></div>
            </div>
        </>
)
};