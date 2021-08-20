import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

 
//Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Sweets', amount: -60 },
        { id: 2, text: 'Salary', amount: 500 },
        { id: 3, text: 'Book', amount: -20 },
        { id: 4, text: 'Guitar', amount: 160 }
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    
    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}