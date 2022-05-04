import './cart.scss';
import currencyFormat from '../../hooks/currencyFormat';

const Cart = ({cartItems, removeCart}) => {
    return ( 
        <div className='cart-container'>
            <p className="cart-header">
                {cartItems.length == 0 ? 'Cart Is Empty' : `The number of items in your cart is ${cartItems.length} `}
            </p>
                {
                    cartItems.map((item,i)=>{
                        return(
                            <div className="item" key={i}>
                                <img src={item.image} alt="" />
                                <div>
                                    <p>{item.title}</p>
                                    <p className='count'>count: {item.count}</p>
                                    <p className='price'>price: {currencyFormat(item.price)}</p>
                                    <span>Total: {currencyFormat((item.count)*(item.price))}</span>
                                </div>
                                <button onClick={()=>removeCart(item)}>Remove</button>
                            </div>
                        )
                    })
                }
                {
                    cartItems.length !== 0 && (
                        <div className="total-proceed">
                            <span>Total Purchase: {currencyFormat(cartItems.reduce((total,num)=> total + num.price * num.count, 0))}</span>
                            <button>Proceed</button>
                        </div> 
                    )
                }
        </div>
     );
}
 
export default Cart;