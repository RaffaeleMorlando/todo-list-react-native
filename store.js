import React, {createContext, useReducer} from "react";
import Reducer from './reducers/reducer'

const initialState = {
  folderName: null,
  user: null,
  todos: null,
};

// -----------------------------
// HOC 
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
