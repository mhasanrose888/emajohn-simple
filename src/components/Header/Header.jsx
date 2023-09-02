import logo from '../../images/logo.png'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Header = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])

    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a className='home' href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a className='cart-logo' href="/review"><FontAwesomeIcon icon={faCartShopping} />{cart.length}</a>
                <input className='search' placeholder='Search' />
                <a href="/search"><button className='search-btn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button></a>
            </nav>
            
        </div>

    );
};

export default Header;