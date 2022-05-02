import './Products.scss';
import useCurrencyFormat from '../../hooks/currencyFormat';

const Product = ({product}) => {
    return ( 
        <div className='product'>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <div>
                <span>{useCurrencyFormat(product.price)}</span>
                <button>Add To Cart</button>
            </div>
        </div>
     );
}
 
export default Product;