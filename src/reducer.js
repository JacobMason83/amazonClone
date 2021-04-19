
// this is the pattern 
export const initalState = {
  basket: [],
  user: null
}
//get the subtotal for the basket 
export const getBasketTotal =(basket) => {
    basket?.reduce((amount, item) => item.price + amount, 0)
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
            //made a new basket 
            let newBasket = [...state.basket]
            // find the index of the deleted item
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            // if its = to zero its true 
            if(index >=0){
                //item exists in basket , remove it 
                // cut it out at the index of the item, and only that itme 
                newBasket.splice(index, 1)
            }else {
                console.warn(`cant remove product (id:${action.id} its not there)`)
            }
            //returning all the state with the newbasket with the removed items
            return {...state, basket: newBasket }
            
        default: 
        return state;
    }
    
}
