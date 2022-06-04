import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Basket } from '../Basket'

export const Header = ({basket}) => {
    let [cartOpen, setCartOpen] = useState(false)
   const activeBtn = () => {
        setCartOpen(cartOpen = !cartOpen)
    }
    return (
        <header>
            <div>
                <span className='logo'>КНИГИ</span>
                <FaShoppingCart onClick= {activeBtn}  className={`shop-btn ${cartOpen && 'active'}`} />
           {cartOpen && (
               <div className='shop-cart'>
                   {basket.map(el => (
                       <Basket key={el.name} item={el} />
                   ))}
               </div>
           )}
            </div>
            <div className='presentation'></div>
        </header>

    )
}
