import React ,{createContext} from "react" ;
import all_product from"../components/assets/all_product"
import { useState } from "react";
export const ShopContext = createContext(null);
    const getDefaultCart=()=>{
        let cart={};
        for( let i=0; i<all_product.length+1;i++){
            cart[i]= 0;
        }
        return cart;
    } 
const ShopContextProvider = (props) => {
    
    const[cartItems,setCartItems]=useState(getDefaultCart());
    // const contextValue ={all_product,cartItems};

    const addToCart = (itemId)=>{
        setCartItems( (prev) => ({...prev,[itemId]:prev[itemId]+1}) )
           console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems( (prev) => ({...prev,[itemId]:prev[itemId]-1}) )   
    }
    const getTotalcartamount = ()=>{
        let totalAmount=0;
        for( const item in cartItems){
            if(cartItems[item]>0){
                    let itemi=all_product.find((product)=>product.id===Number(item));
                    totalAmount+=itemi.new_price *cartItems[item] ;
                    
                }
            }
            return totalAmount ;
        }
      
        const getTotalcartitem=()=>{
            let ti=0;
            for(const item in cartItems){
                if(cartItems[item]>0){
                    ti+= cartItems[item];
                }
            }
            return ti;
        }
    const contextValue = {getTotalcartitem,getTotalcartamount,all_product, cartItems,addToCart,removeFromCart } ;

    
    return (
        <ShopContext.Provider value ={contextValue}>   
            {props.children}                                
        </ShopContext.Provider>
    )
}

export default ShopContextProvider ;
