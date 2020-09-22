import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/PlaceDescription';
import Places from '../Places/Places';
import DatePicker from "react-datepicker";
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import './Book.css'

const Book = () => {
    const [startDate, setStartDate] = useState(new Date());
    let { placeKey } = useParams();
    const places = fakeData.find(pls => pls.key === placeKey);
    return (
        <>
            <div className="container">
               <div className="row">
                    <div className="col-md-6">
                        <Places showAddToCart = {false} places={places}></Places>
                    </div>
                    <div className="col-md-6">
                        <div className="book-form">
                            <h2>Booking</h2>
                            <form action="">
                                <p>Origin</p>
                                <input className="form-control" type="text" required/>
                                 <p>Destination</p>
                                    <input className="form-control" type="text" required/>
                                <div className="row date">
                                        <div className="col">
                                            <p>From:</p>
                                            <DatePicker className="form-control" selected={startDate} onChange={date => setStartDate(date)} required/>
                                        </div>
                                        <div className="col mb-5">
                                            <p>To:</p>
                                            <DatePicker className="form-control" selected={startDate} onChange={date => setStartDate(date)} required/>
                                        </div>
                                </div>
                                    <Link to={'/hotel'}><button className="btn btn-warning w-100">Start Booking</button></Link>
                            </form>
                        </div>
                    </div>
               </div>
            </div>
        </>
    );
};

export default Book;