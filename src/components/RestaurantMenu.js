import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';
import Shimmer from './Shimmer';
export const RestaurantMenu = () =>{

    useEffect(()=>{
        fetchMenu();
        console.log("useEffect");

        //Component Unmounting
        return () =>{
            console.log("unmounting here")
        }
    },[]);

    console.log("rendering outside")
    const [resInfo, setResInfo] = useState(null);
  
    const {resId} = useParams();
    // console.log(resId)
    const fetchMenu = async()=>{
        const data= await fetch(MENU_URL+resId)
        const jsonData= await data.json();
        // console.log(jsonData);
        setResInfo(jsonData.data);
        
    }
    if(resInfo==null) {
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}- {costForTwoMessage}</p>
            
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice}</li>))}
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;
