import './Products.scss';
import currencyFormat from '../../hooks/currencyFormat';
import 'animate.css';
import { useState } from 'react';
import ModalProduct from '../modal/modalProduct';

const Product = ({product,addToCart}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = ()=>{
        setIsOpen(true);
    }
    const closeModal = ()=>{
        setIsOpen(false);
    }
    const addingToCart = ()=>{
        addToCart(product);
    }
    return ( 
        <div className='product animate__animated animate__fadeInUp animate__delay-2s'>
            <img src={product.image} alt="" onClick={openModal}/>
            <p>{product.title}</p>
            <div>
                <span>{currencyFormat(product.price)}</span>
                <button onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>
            <ModalProduct product={product} isClosed={closeModal} isOpen={modalIsOpen} addToCart={addingToCart}/>
        </div>
     );
}
 
export default Product;