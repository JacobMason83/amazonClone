
// this is the pattern 
export const initalState = {
  basket: [],
  user: null
}
// creating the reducer function 
export default function reducer(state, action)  {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                // need to return the new data layer so that its different
                ...state ,
                basket: [...state.basket, action.item]

            }
           
        case 'REMOVE_FROM_BASKET':
            //logic here 
            return { state }
            
        default: 
        return state;
    }
    
}
