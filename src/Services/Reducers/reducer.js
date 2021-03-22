import {ADD_TO_CART, REMOVE_TO_CART} from '../constants'

// const initialState={
//     cartData:[]
// }

export default function cartItems(state=[], action){ 
        // eslint-disable-next-line default-case
        switch(action.type){
            case ADD_TO_CART:
                // console.warn("reducer", action);
                return [
                    ...state,
                    {cartData: action.data}
                ]

                case REMOVE_TO_CART:
                    // console.warn("reducer", action);
                    state.pop();
                    return [
                        ...state,
                        // {cartData: action.data}  //we don't need that data.
                    ]

                // eslint-disable-next-line no-unreachable
                break;
                default:
                    return state;
        }
    
}