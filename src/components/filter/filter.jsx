import './filter.scss';

const Filter = ({count,size,order,filterSize}) => {
    return ( 
        <div className="filter">
            <div className="filter-result">{count} Products</div>
            <div className="filter-sort">
                Order{' '}
                <select name="" id="">
                    <option value="">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter{' '}
                <select name="" id="" value={size} onChange={filterSize}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
     );
}
 
export default Filter;