
// this is the pattern 
export const initalState = {
  basket: [],
  user: null
}
// creating the reducer function 
export const  reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //LOGIC to add a basket
            break;
        case 'REMOVE_FROM_BASKET':
            //logic here 
            break;
        default: 
        return state;
    }
}
