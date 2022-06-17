import React, {SyntheticEvent, useContext} from "react";
import {Btn} from "../../common/Btn/Btn";
import {NewOrderNoContext} from "../../../contexts/newOrderNo.context";
import { SimpleBikeEntity } from "types";

interface Props {
    updateForm: (key: string, value: any) => void;
    handleFormSubmit: (e: SyntheticEvent) => {};
    bike?: SimpleBikeEntity;
}

export const FormModel = ({updateForm, handleFormSubmit, bike}: Props) => {

    const {newOrderNo} = useContext(NewOrderNoContext);

    return(
        <>
            <form className="add-form" onSubmit={handleFormSubmit}>
                <div className="add-form-inputs">
                    <div className="add-form-bike">
                        <label>
                            No. <input
                            type="text"
                            disabled={true}
                            value={bike ? bike.orderNo : newOrderNo}
                        /><br/>
                        </label>
                        <label>
                            Model roweru: <input
                            type="text"
                            onChange={e => updateForm('bikeModel', e.target.value)}
                            defaultValue={bike ? bike.bikeModel : ''}
                        /><br/>
                        </label>
                        <label>
                            Nr seryjny ramy: <input
                            type="text"
                            onChange={e => updateForm('serialNo', e.target.value)}
                            defaultValue={bike ? bike.serialNo : ''}
                        /><br/>
                        </label>
                        <label className="textArea-label">
                            Uwagi: <textarea
                            onChange={e => updateForm('comments', e.target.value)}
                            defaultValue={bike ? bike.comments : ''}
                        >
                        </textarea>
                        </label>
                    </div>
                    <div className="add-form-owner">
                        <label>
                            Data przyjęcia: <input
                            type="date"
                            defaultValue={bike ? (String(bike.dateOfReception).split('T')[0]) : new Date().toISOString().slice(0, 10)}
                            onChange={e => updateForm('dateOfReception', new Date(e.target.value))}
                            disabled={!!bike}
                        /><br/>
                        </label>
                        <label>
                            Imię: <input
                            type="text"
                            onChange={e => updateForm('name', e.target.value)}
                            defaultValue={bike ? bike.name : ''}
                            required={true}
                        /><br/>
                        </label>
                        <label>
                            Nazwisko: <input
                            type="text"
                            onChange={e => updateForm('surname', e.target.value)}
                            defaultValue={bike ? bike.surname : ''}
                            required={true}
                        /><br/>
                        </label>
                        <label>
                            Nr telefonu: <input
                            type="tel"
                            onChange={e => updateForm('phoneNo', e.target.value)}
                            defaultValue={bike ? bike.phoneNo : ''}
                        /><br/>
                        </label>
                        <label>
                            Zaliczka: <input
                            type="number"
                            defaultValue={bike ? bike.downPayment : 0}
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
                    <Btn text="Powrót" to="/admin/dashboard"></Btn>
                </div>
            </form>
        </>
    );
};