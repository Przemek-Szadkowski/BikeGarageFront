import React, {ChangeEvent, SyntheticEvent, useContext, useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { SimpleBikeEntity } from "types";
import {Btn} from "../../common/Btn/Btn";
import {AdminCurrentBikeSelectForm} from "./AdminCurrentBikeSelectForm/AdminCurrentBikeSelectForm";
import {EditedBikeContext} from "../../../contexts/editedBike.context";

import './AdminCurrentBike.css';

interface Props {
    currentBike: SimpleBikeEntity;
    setCurrentBike: (obj: SimpleBikeEntity) => void;
    setBikes: (obj: SimpleBikeEntity[]) => void;
}

export const AdminCurrentBike = ({currentBike, setCurrentBike, setBikes}: Props) => {

    const {setEditedBike} = useContext(EditedBikeContext);
    const [selectValue, setSelectValue] = useState<string>(currentBike.status);

    useEffect(() => {
            setEditedBike(currentBike.orderNo);
    }, [])

    useEffect(() => {
        setSelectValue(currentBike.status);
    }, [currentBike]);

    const deleteOrderAndMoveToArchive = async () => {

        if(!window.confirm(`Czy na pewno chcesz usunąć zlecenie na rower ${currentBike.bikeModel}?`)) {
            return;
        } else {

            const res = await fetch(`http://localhost:3001/admin/dashboard/${currentBike.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if([400, 500].includes(res.status)) {
                const error = await res.json();
                alert(`Error occurred: ${error.message}`);
                return;
            }
        }
    }

    return (
        <>
            <div className="admin-current-order" >
                <p className="admin-current-orderNo"><span>No.</span>{currentBike.orderNo}</p>
                <p className="admin-current-bikeModel">{currentBike.bikeModel}</p>
                <p className="admin-current-serialNo"><span>Serial No.</span> {currentBike.serialNo}</p>
                <p className="admin-current-dateOfReception">{(String(currentBike.dateOfReception).split('T')[0])}</p>
                <AdminCurrentBikeSelectForm selectValue={selectValue} currentBike={currentBike} setSelectValue={setSelectValue} setCurrentBike={setCurrentBike} setBikes={setBikes}/>
                <p className="admin-current-comments">{currentBike.comments}</p>
                <p className="admin-current-name">{currentBike.name}</p>
                <p className="admin-current-surname">{currentBike.surname}</p>
                <p className="admin-current-phoneNo">☎️ {currentBike.phoneNo}</p>
                <p className="admin-current-downPayment">Zaliczka: <span>{currentBike.downPayment}</span> zł</p>
                <div className="editForm">
                    <Link to='/editBike' className="link">Edytuj</Link>
                    <form className="deleteForm" onSubmit={deleteOrderAndMoveToArchive}>
                        <Btn text="usuń"></Btn>
                    </form>
                </div>
            </div>
        </>
    );
};