//some changes
import './app.scss';
import data from './assets/data.json';
import { useState } from 'react';
import Product from './components/products/Products';
import Filter from './components/filter/filter';

const App = () => {
    const [products, setProduct] = useState(data.products);
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('latest');
    const filterSizeHandler = (e)=>{
        console.log(e.target.value);
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
            return setProduct(products.sort((a,b)=> b._id - a._id));
        }else if(e.target.value==='lowest'){
            return setProduct(products.sort((a,b)=> a.price - b.price));
        }else{
            return setProduct(products.sort((a,b)=> b.price - a.price ));
        }
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