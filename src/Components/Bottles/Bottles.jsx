import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import {addToLS, getStoredCart, removeFromLS} from "../../Utilities/LocalStorage";
import Cart from "../Cart/Cart";



const Bottles = () => {
    const [bottles, setBottles] = useState ([]);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);

    //  Load cart for useEffect
    useEffect(() =>{
        // console.log(bottles.length )        
        if(bottles.length){
            const storedCart =getStoredCart()
            // console.log(storedCart, bottles)  
            const savedCart =[]
            for(const id of storedCart ){
                console.log(id)
                const bottle = bottles.find(bottle=> bottle.id ===id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }  
            setCart(savedCart) 
        }
    },[bottles])
    
    const handelAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    };

    const handelRemoveFromCart = id =>{
        //visual card remove
        // Remove for  Local    
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id)
    }
    


    return (
        <>
        <div>
            <h2>Bottles Available : {bottles.length} </h2>

            <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart} ></Cart>
            <div className="bottles">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handelAddToCart={handelAddToCart}  ></Bottle> )
            }
            </div>

        </div>
        </>
    );
};

export default Bottles;