import './CheckoutProduct.css'
import {useStateValue } from './StateProvider'
function CheckoutProduct({ id, title, image, price, rating}) {
    const [{basket}, dispatch]= useStateValue()
    const RemoveFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img src={image} alt="img" /> 
            <div className="checkoutProduct__info">
                <p className='checkoutProduct_title'>{title}</p>
                <small>$</small>
                <strong>{price}</strong>
                <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            <button onClick={RemoveFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
