import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS } from "../../Utilities/localstorage";



const Bottles = () => {
    const [bottles, setBottles] = useState ([]);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);

    const handelAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    return (
        <>
        <div>
            <h2>Bottles Available : {bottles.length} </h2>
            <h3> Cart :{cart.length} </h3>
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