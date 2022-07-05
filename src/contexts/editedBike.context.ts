import {createContext} from "react";

export const EditedBikeContext = createContext({
    editedBike: '',
    setEditedBike: (s: string) => {},
})