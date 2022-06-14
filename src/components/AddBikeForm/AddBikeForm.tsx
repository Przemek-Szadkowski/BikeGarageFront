import React, {SyntheticEvent, useContext, useState} from "react";
import {NewOrderNoContext} from "../../contexts/newOrderNo.context";
import {Logo} from "../common/Logo/Logo";
import {Footer} from "../Footer/Footer";
import {Btn} from "../common/Btn/Btn";
import {Loader} from "../common/Loader/Loader";

import './AddBikeForm.css';


export const AddBikeForm = () => {

    const {newOrderNo} = useContext(NewOrderNoContext);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [form, setForm] = useState({
        orderNo: '',
        bikeModel: '',
        serialNo: '',
        comments: '',
        dateOfReception: {},
        name: '',
        surname: '',
        phoneNo: '',
        downPayment: 0.00,
        status: 'PRZYJĘTY DO SERWISU',
        chat: [],
    })

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    const handleFormSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(form);

        try {
            const addBike = await fetch(`http://localhost:3001/addBike`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    orderNo: newOrderNo,
                }),
            });

            const data = await addBike.json();

        } finally {
            setIsLoading(false);
        }

    }

    return(
        <>
            <div className="add-bike">
                <Logo/>
                <div className="add-form-wrapper">
                    {isLoading ? <Loader/> : <form className="add-form" onSubmit={handleFormSubmit}>
                        <div className="add-form-inputs">
                            <div className="add-form-bike">
                                <label>
                                    No. <input
                                            type="text"
                                            disabled={true}
                                            value={newOrderNo}
                                        /><br/>
                                </label>
                                <label>
                                    Model roweru: <input
                                                    type="text"
                                                    onChange={e => updateForm('bikeModel', e.target.value)}
                                                    /><br/>
                                </label>
                                <label>
                                    Nr seryjny ramy: <input
                                                    type="text"
                                                    onChange={e => updateForm('serialNo', e.target.value)}
                                                    /><br/>
                                </label>
                                <label className="textArea-label">
                                    Uwagi: <textarea
                                                onChange={e => updateForm('comments', e.target.value)}
                                            ></textarea>
                                </label>
                            </div>
                            <div className="add-form-owner">
                                <label>
                                    Data przyjęcia: <input
                                                        type="date"
                                                        onChange={e => updateForm('dateOfReception', e.target.value)}
                                                    /><br/>
                                </label>
                                <label>
                                    Imię: <input
                                            type="text"
                                            onChange={e => updateForm('name', e.target.value)}
                                            /><br/>
                                </label>
                                <label>
                                    Nazwisko: <input
                                                type="text"
                                                onChange={e => updateForm('surname', e.target.value)}
                                                /><br/>
                                </label>
                                <label>
                                    Nr telefonu: <input
                                                    type="tel"
                                                    onChange={e => updateForm('phoneNo', e.target.value)}
                                                /><br/>
                                </label>
                                <label>
                                    Zaliczka: <input
                                                type="number"
                                                onChange={e => updateForm('downPayment', Number(e.target.value))}
                                                onKeyPress={(e) => {
                                                    if(e.key === 'Enter' && !e.shiftKey){
                                                        e.preventDefault();
                                                    }
                                                    if(e.key === 'Enter') {
                                                        updateForm('downPayment', e);
                                                    }
                                                }}
                                                />
                                </label>
                            </div>
                        </div>
                        <div className="add-form-buttons">
                            <Btn text="Dodaj"></Btn>
                            <Btn text="Powrót"></Btn>
                        </div>
                    </form>}
                </div>
                <Footer/>
            </div>
        </>
    );
};