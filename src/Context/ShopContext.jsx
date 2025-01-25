import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/AllProducts";

export const  ShopContext= createContext(null);

const getDefaultCart=()=>{
    let cart={}

    for (let index=0; index<all_products.length+1 ; index++){
        cart[index]=0;
    }
    return cart;
}
    
const ShopContextProvider=(props)=>{

    const [cartItems, setCartItems]=useState(getDefaultCart())

    const addToCart=(ItemId)=>{
        setCartItems((prev)=>({...prev, [ItemId]: prev[ItemId]+1}))
        console.log(cartItems)
    }

    const removeFromCart=(ItemId)=>{
        setCartItems((prev)=>({...prev, [ItemId]: prev[ItemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;

        for (const item in cartItems){
            if (cartItems[item]>0)
            {
                let itemInfo=all_products.find((product=>product.id===Number(item)))
                totalAmount+=itemInfo.new_price*cartItems[item];
            }            
        }
        return totalAmount        
    }

    const getTotalCartItems=()=>{
        let totalCartItems=0;

        for (const Item in cartItems){
            if (cartItems[Item]>0){
                totalCartItems+=cartItems[Item]
            }
        }

        return totalCartItems
    }



    const contextValue={getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart }


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
 
export default ShopContextProvider;