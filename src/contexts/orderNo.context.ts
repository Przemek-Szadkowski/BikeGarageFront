import {createContext} from "react";

export const OrderNoContext = createContext({
    orderNo: '',
    setOrderNo: (s: string) => {},
})