import './cart.scss';
import currencyFormat from '../../hooks/currencyFormat';
import { useState } from 'react';
import useForm from '../../hooks/useForm';
import 'animate.css';

const Cart = ({cartItems, removeCart}) => {
    const [showCheckout, setShowCheckout] = useState(false);
    const {values, handleChange, submitHandler} = useForm(cartItems);

    // const inputHandler = (e)=>{
    //     setFormInfo(values => ({...values,[e.target.name]: e.target.value}));
    // }

    // const createOrderHandler = (e)=>{
    //     e.preventDefault();
    //     const order = {
    //         email:values.email,
    //         name: values.name,
    //         address: values.address,
    //         cartItems
    //     };
    //     createOrder(order);
    //     // alert('Your order under name of '+ order.name);
    // }

    return ( 
        <div className='cart-container'>
            <p className="cart-header">
                {cartItems.length === 0 ? 'Cart Is Empty' : `The number of items in your cart is ${cartItems.length} `}
            </p>
                {
                    cartItems.map((item,i)=>{
                        return(
                            <div className="item animate__animated animate__fadeInLeft" key={i}>
                                <img src={item.image} alt="" />
                                <div>
                                    <p>{item.title}</p>
                                    <p className='count'>count: {item.count}</p>
                                    <p className='price'>price: {currencyFormat(item.price)}</p>
                                    <span>Total: {currencyFormat((item.count)*(item.price))}</span>
                                    <button onClick={()=>removeCart(item)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    cartItems.length !== 0 && (
                        <div className="total-proceed animate__animated animate__fadeInRight">
                            <span>Total Purchase: {currencyFormat(cartItems.reduce((total,num)=> total + num.price * num.count, 0))}</span>
                            <button onClick={()=>setShowCheckout(true)}>Proceed</button>
                        </div> 
                    )
                }
                {
                    showCheckout && (
                        <div className="form-container animate__animated animate__fadeInUp">
                            <form action="" onSubmit={submitHandler}>
                                <label htmlFor="">Email:</label>
                                <input type="email" name="email" id="" required value={values.email || ''} onChange={handleChange}/>
                                <label htmlFor="">Name:</label>
                                <input type="text" name="name" id="" required value={values.name || ''} onChange={handleChange}/>
                                <label htmlFor="">Address:</label>
                                <input type="text" name="address" id="" required value={values.address || ''} onChange={handleChange}/>
                                <input type="submit" value="Checkout" className='submit'/>
                            </form>
                        </div>
                    )
                }
        </div>
     );
}
 
export default Cart;