import React, {SyntheticEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import { SimpleBikeEntity } from "types";
import {NewOrderNoContext} from "../../contexts/newOrderNo.context";
import {Logo} from "../common/Logo/Logo";
import {Footer} from "../Footer/Footer";
import {Loader} from "../common/Loader/Loader";
import {FormModel} from "./FormModel/FormModel";

import './AddBikeForm.css';

export const AddBikeForm = () => {

    let navigate = useNavigate();
    const {newOrderNo} = useContext(NewOrderNoContext);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [isBikeAdded, setIsBikeAdded] = useState<Boolean>(false);
    const [form, setForm] = useState<SimpleBikeEntity>({
        id: '',
        orderNo: '',
        bikeModel: '',
        serialNo: '',
        comments: '',
        dateOfReception: {},
        name: '',
        surname: '',
        phoneNo: '',
        downPayment: 0,
        status: 'PRZYJĘTY DO SERWISU',
        chat: [],
    });

    const updateForm = (key: string, value: any) => {

        setForm(form => ({
            ...form,
            [key]: value,
        }));

    };

    const handleFormSubmit = async (e: SyntheticEvent) => {

        e.preventDefault();

        setIsLoading(true);

        try {
            const addBike = await fetch(`http://localhost:3001/addBike`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    orderNo: newOrderNo,
                    // to set today date in submit form if input date is not change (when default value is still there)
                    dateOfReception: form.dateOfReception instanceof Date ? form.dateOfReception : new Date(),
                }),
            });

            const data = await addBike.json();

            if(data) setIsBikeAdded(true);

        } finally {
                setIsLoading(false);
            setTimeout(() => {
                setIsBikeAdded(false);
                navigate('/admin/dashboard');
            }, 1500)
        }

    }

    return(
        <>
            <div className="add-bike">
                <Logo/>
                <div className="add-form-wrapper">
                    {isBikeAdded ? <div className="confirmSubmit"><p>Rower {form.bikeModel} został dodany</p></div> : null}
                    {isLoading ? <Loader/> : <FormModel updateForm={updateForm} handleFormSubmit={handleFormSubmit}/>}
                </div>
                <Footer/>
            </div>
        </>
    );
};