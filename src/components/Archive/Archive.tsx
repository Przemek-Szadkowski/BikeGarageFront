import React, {useEffect, useState} from "react";
import {Btn} from "../common/Btn/Btn";
import {Loader} from "../common/Loader/Loader";

import './Archive.css';

export const Archive = () => {

    const [archive, setArchive] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await fetch(`http://localhost:3001/archive`);
            const data = await res.json();
            setArchive(data);
            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            <div className="archive-wrapper">
                { isLoading ? <Loader/> : <p>Archiwum</p>}
                <Btn text="Powrót" to="/admin/dashboard"></Btn>
            </div>
        </>
    );
};