import React, {useEffect, useState} from "react";
import { SimpleBikeEntity } from "types";
import {apiUrl} from "../../config/api";
import {useNavigate} from "react-router-dom";
import {Btn} from "../common/Btn/Btn";
import {Loader} from "../common/Loader/Loader";

import './Archive.css';

export const Archive = () => {

    let navigate = useNavigate();
    const [archive, setArchive] = useState<SimpleBikeEntity[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await fetch(`${apiUrl}/archive`);
            const data = await res.json();
            setArchive(data);
            setIsLoading(false);
        })();
    }, []);

    if(Boolean(sessionStorage.getItem('token') === 'undefined')) {
        navigate('/');
    }

    return (
        <>
            <div className="archive-wrapper">
                <div className="archive-bikes">
                    { isLoading
                        ? <Loader/>
                        : archive.map(bike => {
                            return (
                                    <div className="archive-bike" key={bike.id}>
                                        <div className="archive-bike-top">
                                            <p className="archive-date">{(String(bike.dateOfReception).split('T')[0])}</p>
                                            <p className="archive-no">No. {bike.orderNo}</p>
                                            <p className="archive-model">{bike.bikeModel}</p>
                                            <p className="archive-name">{bike.name}</p>
                                            <p className="archive-surname">{bike.surname}</p>
                                            <p className="archive-phoneNo">Tel. {bike.phoneNo}</p>
                                        </div>
                                        <div className="archive-bike-bottom">
                                                <p className="archive-serialNo"><span>Nr seryjny:</span> {bike.serialNo}</p>
                                                <p><span>Zaliczka:</span> {bike.downPayment} zł</p>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                </div>
                <Btn text="Powrót" to="/admin/dashboard"></Btn>
            </div>
        </>
    );
};