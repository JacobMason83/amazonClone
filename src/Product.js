import './Product.css'
import { useStateValue } from './StateProvider'
const Product =({ id, title, price, rating, image}) => {
    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () => {
        //add item to basket
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <div className='product' key={id} >
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
        </div>
                <img src={image} alt="productImage"/>
                <button className='product__button' onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
