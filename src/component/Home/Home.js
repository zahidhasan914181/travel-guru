import React from 'react';
import fakeData from '../../fakeData/PlaceDescription'
import './Home.css';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div>
            <div className="container">
                   <div className="row mt-5">
                       <div className="col">
                           <div className="row mt-5">
                       {
                            fakeData.map(places =><Places showAddToCart = {true} places={places}></Places>)
                       }
                            </div>
                       </div>
                   </div>
               </div>
        </div>
    );
};

export default Home;