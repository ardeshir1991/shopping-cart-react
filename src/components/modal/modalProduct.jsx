import Modal from "react-modal";
import './modalProduct.scss';
import currencyFormat from '../../hooks/currencyFormat';

const ModalProduct = ({product, isClosed, isOpen, addToCart}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: '50%',
          width: '80%'
        },
      };
    
    return ( 
        <Modal
        isOpen={isOpen}
        onRequestClose={isClosed}
        style={customStyles}>
            <div className="product-details animate__animated animate__zoomIn" id="modal-container">
                <button className="close" onClick={isClosed}>&times;</button>
                <div className="image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <span>Price: {currencyFormat(product.price)}</span>
                    <ul>
                        {
                            product.sizes.map((size,i) => (
                                <li key={i}>{size}</li>
                            ))
                        }
                    </ul>
                </div>
                <button className="add-to-cart"
                 onClick={()=>{addToCart(); isClosed();}}>
                     Add To Cart
                </button>
            </div>
        </Modal>
        
     );
}
 
export default ModalProduct;