import './Products.scss';
import currencyFormat from '../../hooks/currencyFormat';

const Product = ({product,addToCart}) => {
    return ( 
        <div className='product'>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <div>
                <span>{currencyFormat(product.price)}</span>
                <button onClick={()=>addToCart(product)}>Add To Cart</button>
            </div>
        </div>
     );
}
 
export default Product;