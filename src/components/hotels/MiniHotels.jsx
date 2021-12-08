import React, {useEffect} from 'react';
import cl from "../flights/miniFlights.module.css";
import MiniHotel from "../hotels/MiniHotel";

const MiniHotels = (props) => {
    useEffect(()=>console.log("rerender"),
        [props.hotels])
    return (
        <div className = {cl.container}>
            {props.hotels.map((hotel) =>
                <MiniHotel hotel = {hotel} key={hotel.hotel_id}/>
            )}
        </div>
    );
};

export default MiniHotels;