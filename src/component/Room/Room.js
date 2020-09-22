import React from 'react';
import Rate from './star_1_.png';
import './Room.css'

const Room = (props) => {
    let {image, title, description, guest, bed,rating,totalrate, price} = props.room;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="placeImg" src={image}  alt="..."/>
                    </div>
                    <div className="col">
                        <h6 className="card-title">{title}</h6>
                        <p className="card-text">{description}</p>
                        <span>{guest} guest,  {bed} bed </span>
                        <p><img className="rate" src= {Rate} alt=""/>{rating}({totalrate})</p>
                        <p>${price}/night</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Room;
