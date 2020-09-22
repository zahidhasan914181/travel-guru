import React from 'react';
import { Link } from 'react-router-dom';
import './Places.css'

const Places = (props) => {
    const {placeName, description, img, key} = props.places;
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="placeImg" src={img}  alt="..."/>
                </div>
                <div className="col">
                    <h6 className="card-title">{placeName}</h6>
                    <p className="card-text">{description}</p>
                    {props.showAddToCart && <Link to ={"/book/" +key}><button className="btn btn-warning">Book Now</button></Link>}
                </div>
            </div>
        </div>
    </>
    );
};

export default Places;
