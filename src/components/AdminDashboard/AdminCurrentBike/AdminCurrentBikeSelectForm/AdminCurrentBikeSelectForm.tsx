import React, {SyntheticEvent, useRef, useState} from "react";
import { SimpleBikeEntity } from "types";
import {Btn} from "../../../common/Btn/Btn";
import {Loader} from "../../../common/Loader/Loader";

import './AdminCurrentBikeSelectForm.css';

interface Props {
    selectValue: string;
    currentBike: SimpleBikeEntity;
    setSelectValue: (s: string) => void;
    setCurrentBike: (obj: SimpleBikeEntity) => void;
    setBikes: (obj: SimpleBikeEntity[]) => void;
}

const optionsValues = ['PRZYJĘTY DO SERWISU', 'OCZEKUJĄCY NA NAPRAWĘ', 'OCZEKUJĄCY', 'OCZEKUJĄCY NA CZĘŚCI', 'W NAPRAWIE', 'OCZEKUJĄCY NA KONTAKT Z KLIENTEM', 'NAPRAWIONY', 'ZAKOŃCZONY', 'GOTOWY DO ODBIORU', 'ZLECENIE ANULOWANE'];

export const AdminCurrentBikeSelectForm = ({selectValue, currentBike, setSelectValue, setCurrentBike, setBikes}: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    const selectStatus = useRef<any>(null);

    const handleSelectSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const res = await fetch(`http://localhost:3001/admin/status/${selectStatus.current.value}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: currentBike.id,
                    status: selectStatus.current.value,
                })
            });

            const {bikeAfterUpdate, bikesAfterUpdate} = await res.json();

            setCurrentBike(bikeAfterUpdate);
            setBikes(bikesAfterUpdate);

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <form
                className="admin-current-form"
                action=""
                // onChange={handleSelectChange}
                onSubmit={handleSelectSubmit}
            >
                {isLoading ? <Loader/> : <select
                    className="admin-current-status"
                    value={selectValue}
                    ref={selectStatus}
                    onChange={e => setSelectValue(e.target.value)}
                >
                    {optionsValues.map(optionValue => {
                        return (
                            <option key={optionValue} value={optionValue}>{optionValue}</option>
                        );
                    })}
                </select>}
                <Btn text="zmień"></Btn>
            </form>
        </>
    );
};