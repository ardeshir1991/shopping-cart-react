//some changes
import './app.scss';
// import data from './assets/data.json';
import { useState, useEffect } from 'react';
import Product from './components/products/Products';
import Filter from './components/filter/filter';
import Cart from './components/cart/cart';
import 'animate.css';
import { useSelector } from 'react-redux';
import { allProducts, filterSize, sortProducts, filterProducts } from './redux/features/productSlice';

const App = () => {
    let products = useSelector(allProducts);
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('latest');
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]);
    
    
    const filterSizeHandler = (e)=>{
        let value = e.target.value;
        setSize(value);
        // if(e.target.value ===''){
            // }else{
                //     setSize(e.target.value);
                //     // setProduct(products.filter(p => p.sizes.indexOf(e.target.value) >= 0));
                //     products = products.filter(p => p.sizes.indexOf(e.target.value) >= 0);
                // }
            }
            
            
    const sortHandler = (e)=>{
        let value = e.target.value;
        setSort(value);
        // if(e.target.value==='latest'){
        //     // setProduct(products.sort((a,b)=> b._id - a._id));
        //     products = products.sort((a,b)=> b._id - a._id);
        // }else if(e.target.value==='lowest'){
        //     // setProduct(products.sort((a,b)=> a.price - b.price));
        //     products = products.sort((a,b)=> a.price - b.price);
        // }else{
        //     // setProduct(products.sort((a,b)=> b.price - a.price ));
        //     products = products.sort((a,b)=> b.price - a.price );
        // }
    }

    // products = useSelector(state => filterSize(state, size));
    // products = useSelector(state => sortProducts(state, sort));

    products = useSelector(state => filterProducts(state,size,sort));

    const addToCart = (product)=>{
        let items = cartItems.slice();
        let alreadyInCart = false;
        items.forEach(item =>{
            if(item._id === product._id){
                item.count ++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            items.push({...product, count:1});
        }
        setCartItems(items);
        localStorage.setItem('cartItems',JSON.stringify(items));
    }

    const removeCart = (product)=>{
        let items = cartItems.slice();
        items = items.filter(item => item._id !== product._id);
        setCartItems(items);
        localStorage.setItem('cartItems', JSON.stringify(items));
    }

    const createOrder = (order)=>{
        alert('need to save order for ' + order.name);
    }

   
    setTimeout(()=>{
        localStorage.setItem('cartItems', []);
    }, 10000);
    
    
    return ( 
        <div className="grid-container">
            <header>
                <a href="/">React Shopping Cart</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter
                        count={products.length}
                        size={size}
                        filterSize={filterSizeHandler}
                        sortProducts={sortHandler} 
                        order={sort}/>
                        
                        <div className='products-container'>
                        {
                            products.map((product,index)=>(
                                
                                <Product product={product} key={index} addToCart={addToCart}/>
                                
                            ))
                        }
                        </div>

                    </div>
                    <div className="sidebar">
                        <Cart cartItems={cartItems} removeCart={removeCart} createOrderHandler={createOrder}/>
                    </div>
                </div>
            </main>
            <footer>All rights reserved</footer>
        </div>
     );
}
 
export default App;