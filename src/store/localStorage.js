import { storage } from "../App";


export const loadState = () =>{
    try{
        const serializedState = storage.getItem('state');
        if (serializedState === null){
            storage.setItem('state', '');    
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch(err){
        return undefined; 
    }
};

export const saveState = (state) =>{
    try{
         
        const serializedState = JSON.stringify(state);
         
        storage.setItem('state', serializedState); 
    }
    catch(err){
        return err;  
    }
};

