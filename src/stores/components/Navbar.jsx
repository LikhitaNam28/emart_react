import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import MobilePage from '../pages/MobilePage';


function Navbar() {
  const {cartItems}=useCart()
  
  return (<>
    
    <div className='fix'>
     <div className="navSection">
        <div className="title"><Link to="/"><h1>E-Mart</h1></Link></div>
       <div className="search"><input type='text' placeholder='search...'></input></div>
       
      <div><Link to='/cart'> <FontAwesomeIcon icon={faCartShopping} size='2x'/></Link><span className='cartNum'>
            {cartItems.length}
          </span></div>
     <Link to='Signup'> <a ><FontAwesomeIcon icon={faUser} size='2x'/></a> </Link>
     </div>
     <div className="subMenu">
        <ul>
        <Link to="/" className="custom-link">
            <li>Home</li>
          </Link>

          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Laptops</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>
          <Link to="/books" className="custom-link">
            <li>Books</li>
          </Link>

          <Link to="/speaker" className="custom-link">
            <li>Speakers</li>
          </Link>

          <Link to="/tv" className="custom-link">
            <li>TV's</li>
          </Link>

          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar
