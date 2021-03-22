// what function we write here for Actions, we will call it on buttons click.
import {ADD_TO_CART, REMOVE_TO_CART} from '../constants'

export const addToCart = (data) =>{
    // console.warn("Actions", data);
    return {
         type: ADD_TO_CART,
         data:data
    }
}

export const removeToCart = (data) =>{
    console.warn("Actions");
    return {
         type: REMOVE_TO_CART,
        //  data:data  // we don't need to send data for remove item only need "type;"
    }
}