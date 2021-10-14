import React, {createContext, useReducer} from "react";
import Reducer from './reducers/folders.js'

const initialState = {
  folderName: null,
  user: null,
  todos: null,
};

// -----------------------------
// HIGHER-ORDER COMPONENTS / STORE 
// -----------------------------
const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;

