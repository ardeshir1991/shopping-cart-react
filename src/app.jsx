//some changes
import './app.scss';
import data from './assets/data.json';
import { useState } from 'react';
import Product from './components/products/Products';
import Filter from './components/filter/filter';

const App = () => {
    const [products, setProduct] = useState(data.products);
    console.log(products);
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('');
    const filterSizeHandler = (e)=>{
        console.log(e.target.value);
    }
    return ( 
        <div className="grid-container">
            <header>
                <a href="/">React Shopping Cart</a>
            </header>
            <main>
                <div className="content">
                    <div className="main">
                        <Filter count={products.length} size={size} filterSize={filterSizeHandler}/>
                        <div className='products-container'>
                        {
                            products.map((product,index)=>(
                                <Product product={product} key={index}/>
                            ))
                        }
                        </div>
                        
                    </div>
                    <div className="sidebar">something</div>
                </div>
            </main>
            <footer>All rights reserved</footer>
        </div>
     );
}
 
export default App;