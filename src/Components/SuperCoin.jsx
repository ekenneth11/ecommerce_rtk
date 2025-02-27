//Reward system for the application

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SuperCoin = () => {
    const [superCoin, setSuperCoin] = useState(0);
    const currentItems = useSelector((state) => state.cart.cartItems);
    const points = currentItems.reduce((total, item) => total + item.quantity * item.price, 0);

    useEffect(() =>{
        if (points >= 100 && points < 200){
            setSuperCoin(10);
        }else if (points >= 200 && points < 300){
            setSuperCoin(20);
        }else if (points >= 300){
            setSuperCoin(30);
        }else{
            setSuperCoin(0);
        }

    }, [points]);
    return (
        <>
        <div className="super-coin">
            <h2 className="super-coin-title">Super Coin</h2>
            <div>You earn {superCoin} with this purchase!</div>

        </div>
        </>
    );
};

export default SuperCoin;