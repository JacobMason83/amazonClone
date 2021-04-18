import { useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'

const Checkout = () => {
    const [{basket}]= useStateValue()
    return (
        <div className='checkout'>
           <img  className='checkout__ad'src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="banner-img"/> 
       {basket?.length === 0 ? (
           <div>
               <h2>Your shopping basket is empty</h2>
               <p>You have no items in your basket. To buy one click "add to basket" next to the item </p>
           </div>
       ) : (
           <div >
           <h2 className='checkout__title'>Your Shopping Basket</h2>

           {/* list out all the checkout products  */}
           {basket.map((item) => (
               <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
               />
           ))}
           
           </div>
       )}
        </div>
    )
}

export default Checkout