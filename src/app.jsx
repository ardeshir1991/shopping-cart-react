//some changes
import './app.scss';
import data from './assets/data.json';
import { useState } from 'react';
import Product from './components/products/Products';
import Filter from './components/filter/filter';
import Cart from './components/cart/cart';

const App = () => {
    const [products, setProduct] = useState(data.products);
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('latest');
    const [cartItems, setCartItems] = useState([]);

    const filterSizeHandler = (e)=>{
        if(e.target.value ==''){
            setProduct(data.products);
            setSize(e.target.value);
        }else{
            setSize(e.target.value);
            setProduct(data.products.filter(p => p.sizes.indexOf(e.target.value) >= 0));
        }
    }
    
    const sortHandler = (e)=>{
        setSort(e.target.value);
        if(e.target.value==='latest'){
            setProduct(products.sort((a,b)=> b._id - a._id));
        }else if(e.target.value==='lowest'){
            setProduct(products.sort((a,b)=> a.price - b.price));
        }else{
            setProduct(products.sort((a,b)=> b.price - a.price ));
        }
    }

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
    }

    const removeCart = (product)=>{
        let items = cartItems.slice();
        setCartItems(items.filter(item => item._id !== product._id));
    }
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
                        sortProducts={sortHandler} order={sort}/>

                        <div className='products-container'>
                        {
                            products.map((product,index)=>(
                                <Product product={product} key={index} addToCart={addToCart}/>
                            ))
                        }
                        </div>
                        
                    </div>
                    <div className="sidebar"><Cart cartItems={cartItems} removeCart={removeCart}/></div>
                </div>
            </main>
            <footer>All rights reserved</footer>
        </div>
     );
}
 
export default App;