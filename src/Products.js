import { storeData } from './StoreData';

export const Products = () => {
    return(
    <section id="products" className="container">
        <div className="section-margin products-section">
            <h2>Products</h2>
            <div className="product-categories">
                <ul className='d-flex flex-wrap products-links list-style align-items-center'>
                    <div className='d-flex align-items-center'>
                        <li>
                            <a href="#products" className='selected-link'>All</a>
                        </li>
                        <li className='header-margin'>
                            <a href="#products">Chair</a>
                        </li>
                        <li className='header-margin'>
                            <a href="#products">Table</a>
                        </li>
                        <li className='header-margin'>
                            <a href="#products">Bed</a>
                        </li>
                        </div>
                        <div className='d-flex align-items-center md-width-product-list'>
                        <li className='header-margin closet-products'>
                            <a href="#products">Closet</a>
                        </li>
                        <li className='header-margin'>
                            <a href="#products">Sofa</a>
                        </li>
                        <li className='header-margin'>
                            <a href="#products">Cabinet</a>
                        </li>
                    </div>
                </ul>
            </div>
            <div className='d-flex flex-wrap product-list-section'>
                {
                    storeData.map(data => {
                    return <ProductList {...data} key={data.id} />;
                    })
                }
            </div>
        </div>
    </section>
    )
}

export const ProductList = (props) => {
    const { image, price, title } = props;

    const addToCartNotice = () => {
        alert(`${title} added to cart successfully`);
    }
    return(
        <div className="product-card margin-right-1">
            <div className="product-img">
                <img src={image} alt={`${title} furniture`} />
            </div>
            <div className="product-details">
                <h4>{title}</h4>
                <div className="price-and-cart d-flex justify-content-between">
                    <p>{`$${price}`}</p>
                    <button className='cart-btn' onClick={addToCartNotice}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}