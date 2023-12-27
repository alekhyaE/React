import { CDN_URL } from '../utils/constants';
const styleCard = {
    backgroundColor : "#f0f0f0"
}

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRatingString,sla,cloudinaryImageId}= resData.info;
    // console.log(resData);
    return (
        <div className='res-card' style={styleCard}>
           
            <img className ="res-logo" src={CDN_URL +cloudinaryImageId} alt="res-logo"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;
