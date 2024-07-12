"use client"
import React, { useState, useEffect, useRef, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserButton } from '@clerk/nextjs';
import { PiShoppingCartBold } from "react-icons/pi";
import { Button } from "@/components/ui/button"
import Link from "next/link"
 
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from './ui/mode-toggle';
 


function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const handleCartButtonClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleAddToCart = (car) => {
    setCartItems([...cartItems, car]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowCart(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex items-center justify-between p-3 px-6 shadow-lg bg-white dark:bg-black border-b-[1px]'>
      <img
        src='rent_car-removebg-preview.png'
        alt='LOGO'
        width={100}
        height={100}
      />
      <div className='hidden md:flex gap-5'>
      <Button variant="link">Home </Button>
      <Button variant="link">History</Button>
      <Button variant="link">Contact Us</Button>
      </div>

      <div className='flex gap-2 md:gap-6 items-center'>
        <UserButton />
        <button ref={buttonRef} onClick={handleCartButtonClick}>
          <h1 className='text-3xl '>
            <PiShoppingCartBold />
          </h1>
        </button>
        <ModeToggle/>
      </div>

      <AnimatePresence>
        {showCart && (
          <motion.div
            ref={sidebarRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-white p-6 w-80 md:w-96 h-auto"
            >
              <h2 className="text-3xl font-bold mb-4">Add to Cart</h2>
              <button onClick={handleCloseCart} className="text-blue-500  hover:text-blue-700">Close</button>
              <div>
                {cartItems.map((item, index) => (
                  <div key={index}>{item.name}</div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
        
      </AnimatePresence>
    </div>
  );
}



export default Navbar;
