import React,{createContext,useReducer} from 'react';
import AppReducer from '../Reducer/AppReducer';
//Initialize state
const initialState = {
    transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ] 
};
//create context
export const GlobalContext = createContext(initialState);



// context provider
export const GlobalStateProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        id:id
})
}

function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        transaction:transaction
    })
}
    return (  
        <GlobalContext.Provider value = {
            {
                transactions:state.transactions,
                deleteTransaction,
                addTransaction
            }
            }>
            {children}
        </GlobalContext.Provider>

    );
}
 

