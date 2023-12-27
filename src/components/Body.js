import { useEffect, useState } from 'react';
import resList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
const Body = () =>{

    //Creating state var
    const [listOfRestaurants, setListOfRestaurants] = useState(
        resList
    );
    //eq to let listOfRestaurants;

    useEffect(()=>{
        console.log("useEffect called!!!")
    },[]);

    console.log("Body rendered")
    return (<div className='body'>
         <div className="filter">
            <button className="filter-button" 
            onClick= {() =>{
                
                console.log('Button clicked');
                const filteredList = listOfRestaurants.filter((res)=>{
                    return res.info.avgRating>4
                })
                setListOfRestaurants(filteredList)
            }}
            
            >
            Top Rated Restaurants
            </button>
            </div>
        
         <div className="res-container">
            {
              listOfRestaurants.map((restaurant)=>(
                 <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              ))
            }
         </div>
    </div>
    )
 }
export default Body;
