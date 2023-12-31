import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () =>{

    //Creating state var
    const [listOfRestaurants, setListOfRestaurants] = useState(
     []
    );
    const [filteredRestaurants, setFilteredRestaurants] = useState(
        []
       );
    //eq to let listOfRestaurants;

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        //Initially, we show dummy data
        //Once the comp is rendered, we make API call
        //then rerender
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9351929&lng=77.62448069999999&str=Biryan&trackingId=65c82a60-19f9-c69e-3a61-1edf4992307f&submitAction=ENTER&queryUniqueId=c97f1c63-8083-956d-342c-f957a081af25");

        const jsonData= await data.json();

        
        //Optional chaining
        setListOfRestaurants(jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
    }
    const online= useOnlineStatus();
   console.log(online)
    if(online==false){
        return (<h1>Looks like you are offline</h1>)
       }
    if(listOfRestaurants.length==0){
        return <Shimmer/>
    }
    
   
    return listOfRestaurants.length==0? (<Shimmer/>): (
    <div className='body'>
        
        <div className="filter">
        <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick= {()=>{
                    // console.log(searchText);
                    const filteredRestaurants= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    // console.log(filteredRestaurants)
                    setFilteredRestaurants(filteredRestaurants);

                }}>Search</button>
        </div>
            <button className="filter-button" 
            onClick= {() =>{
                
                // console.log('Button clicked');
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
              filteredRestaurants.map((restaurant)=>(
               <Link key={restaurant.info.id} to={"restaurant/"+ restaurant.info.id}>  <RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
              ))
            }
         </div>
    </div>
    )
   
 }
export default Body;
