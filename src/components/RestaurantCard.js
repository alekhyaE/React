import { CDN_URL } from '../utils/constants';
const styleCard = {
    backgroundColor : "#f0f0f0"
}

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId}= resData.info;
    // console.log(resData);
    return (
        <div className='res-card m-4 p-4 w-[250px] rounded-lg bg-gray-150 hover:bg-gray-200' >
           
            <img className ="res-logo rounded-lg" src={CDN_URL +cloudinaryImageId} alt="res-logo"></img>
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;
