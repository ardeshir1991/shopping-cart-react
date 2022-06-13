import './cart.scss';
import currencyFormat from '../../hooks/currencyFormat';
import { useState } from 'react';
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import { createOrders, showOrder } from '../../redux/features/orderSlice';
import Modal from 'react-modal';

const Cart = ({cartItems, removeCart}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: '45%',
          width: '50%'
        }
    };

    const dispatch = useDispatch();
    const [showCheckout, setShowCheckout] = useState(false);
    // const {values, handleChange, submitHandler} = useForm(cartItems);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [modal, setModal] = useState(false);

    const products = [];
    cartItems.map(item => products.push({productId: item._id, price: item.price, count: item.count}));

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(createOrders({
            products,
            name,
            email,
            address,
            total:cartItems.reduce((total,num)=> total + num.price * num.count, 0)
        }));
        setName('');
        setEmail('');
        setAddress('');
        setModal(true);
        localStorage.clear('cartItems');
    }
    
    const order = useSelector(showOrder); 

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
                                <input type="email" name="email" id="" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <label htmlFor="">Name:</label>
                                <input type="text" name="name" id="" required value={name} onChange={(e)=>setName(e.target.value)}/>
                                <label htmlFor="">Address:</label>
                                <input type="text" name="address" id="" required value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                <input type="submit" value="Checkout" className='submit'/>
                            </form>
                        </div>
                    )
                }
                {
                    modal && order &&(
                        <Modal 
                        isOpen={modal}
                        onRequestClose={()=>setModal(false)}
                        style={customStyles}>
                            <div className="showOrder animate__animated animate__zoomIn">
                                <button className="close" onClick={()=>setModal(false)}>&times;</button>
                                <h3>Congratulations, Your order has been registered</h3>
                                <ul>
                                    <li>
                                        <span>Order ID:</span>
                                        <span>{order._id}</span>
                                    </li>
                                    <li>
                                        <span>Username:</span>
                                        <span>{order.name}</span>
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <span>{order.email}</span>
                                    </li>
                                    <li>
                                        <span>Address:</span>
                                        <span>{order.address}</span>
                                    </li>
                                    <li>
                                        <span>Total:</span>
                                        <span>{currencyFormat(order.total)}</span>
                                    </li>
                                    <li>
                                        <span>CreatedAt:</span>
                                        <span>{order.createdAt}</span>
                                    </li>
                                </ul>
                            </div>
                        </Modal>
                    )
                }
        </div>
     );
}
 
export default Cart;