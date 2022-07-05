import {createContext} from "react";

export const NewOrderNoContext = createContext({
    newOrderNo: '',
    setNewOrderNo: (s: string) => {},
})