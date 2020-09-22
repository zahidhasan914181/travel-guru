import React from 'react';
import fakeData from '../../fakeData/HotelRoom'
import Room from '../Room/Room';

const Hotel = () => {
    return (
               <div className="container">
                  <div className="row mt-5">
                       <div className="col">
                           <div className="row mt-5">
                       {
                            fakeData.map(room =><Room room={room}></Room>)
                       }
                            </div>
                       </div>
                       <div className="col">
                            <h3>Map not found</h3>
                        </div>
                   </div>
                </div>
    );
};

export default Hotel;