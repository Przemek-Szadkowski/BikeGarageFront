import React, {useContext, useState} from "react";
import {Logo} from "../common/Logo/Logo";
import {Footer} from "../Footer/Footer";
import {Btn} from "../common/Btn/Btn";

import './AddBikeForm.css';
import {OrderNoContext} from "../../contexts/orderNo.context";


export const AddBikeForm = () => {

    const {orderNo, setOrderNo} = useContext(OrderNoContext);
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
        status: '',
        chat: [],
        // status i chat tworzone na backendzie?
    })

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    return(
        <>
            <div className="add-bike">
                <Logo/>
                <div className="add-form-wrapper">
                    <form className="add-form">
                        <div className="add-form-inputs">
                            <div className="add-form-bike">
                                <label>
                                    No. <input
                                            type="text"
                                            disabled={true}
                                            value={orderNo}
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
                                                onChange={e => updateForm('downPayment', e.target.value)}
                                                onKeyPress={(e) => {
                                                    // stop making new line on enter in textarea and sendMessage on enter press???
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
                    </form>
                </div>
                <Footer/>
            </div>
        </>
    );
};