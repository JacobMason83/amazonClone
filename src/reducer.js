
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
            let newBasket = [...state.basket]
            // find the index 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            // if else statemetn
            if(index >=0){
                //item exists in basket , remove it 
                newBasket.splice(index, 1)
            }else {
                console.warn(`cant remove product (id:${action.id} its not there)`)
            }
            return {...state, basket: newBasket }
            
        default: 
        return state;
    }
    
}
