import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { SimpleBikeEntity } from "types";
import {EditedBikeContext} from "../../contexts/editedBike.context";
import {apiUrl} from "../../config/api";
import {Logo} from "../common/Logo/Logo";
import {Footer} from "../Footer/Footer";
import {Loader} from "../common/Loader/Loader";
import {FormModel} from "../AddBikeForm/FormModel/FormModel";

export const EditBikeForm = () => {

    let navigate = useNavigate();
    const {editedBike} = useContext(EditedBikeContext);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [isBikeEdited, setIsBikeEdited] = useState<Boolean>(false);
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
        downPayment: 0.00,
        status: '',
        chat: [],
    });

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await fetch(`${apiUrl}/editBike/${editedBike}`);
            const data = await res.json();
            setBike(data);
            setForm(data);
            setIsLoading(false);
        })();
    }, []);

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
            const updatedBike = await fetch(`${apiUrl}/editBike/${editedBike}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    form,
                }),
            });

            const data = await updatedBike.json();

            if(data) setIsBikeEdited(true);

        } finally {

            setIsLoading(false);

            setTimeout(() => {
                setIsBikeEdited(false);
                navigate('/admin/dashboard');
            }, 1500)

        }

    }

    if(Boolean(sessionStorage.getItem('token') === 'undefined')) {
        navigate('/');
    }

    return(
        <>
            <div className="add-bike">
                <Logo/>
                <div className="add-form-wrapper">
                    {isBikeEdited ? <div className="confirmSubmit"><p>Rower {form.bikeModel} zosta?? zaktualizowany</p></div> : null}
                    {isLoading ? <Loader/> : <FormModel bike={bike} updateForm={updateForm} handleFormSubmit={handleFormSubmit}/>}
                </div>
                <Footer/>
            </div>
        </>
    );
};