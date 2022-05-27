import React, {useContext, useEffect, useState} from "react";
import {SimpleBikeEntity} from 'types';
import {OrderNoContext} from "../../contexts/orderNo.context";
import {findAllByDisplayValue} from "@testing-library/react";

export const BikeInfo = () => {

    const {orderNo} = useContext(OrderNoContext);
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
            const res = await fetch(`http://localhost:3001/${orderNo}`);
            const data = await res.json();
            setBike(data);
        })();
    }, []);

    return (
        <>
        <p>{bike.name}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cumque debitis, deleniti dolorum    et id laborum magnam maxime neque officiis possimus quaerat quasi quidem quos recusandae reiciendis sed, velit!</p>
        </>
)
};