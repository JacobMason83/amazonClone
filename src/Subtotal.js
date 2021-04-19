import {Fragment } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider"
import {getBasketTotal} from './reducer'
import './Subtotal.css'
function Subtotal() {
    const [{basket}]= useStateValue()
    console.log(basket)
    console.log(getBasketTotal(basket))
    return (
        <div className='subtotal'>
        <CurrencyFormat 
        renderText={(value) => (
            <Fragment>
            <p>
                Subtotal ({basket.length} items): <strong>{`${value.value}`}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            </Fragment>
        )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />
        
        <button>Proceed to Checkout</button>            
        </div>
    )
}

export default Subtotal
