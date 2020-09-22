import React from 'react';
import { useHistory, useParams } from 'react-router';
import fakedatas from '../fakeData/index';
import './Booking.css'
import { Form, FormControl } from 'react-bootstrap';


const Booking = () => {
    const {place} = useParams() 
    const placedetails = fakedatas.find(pd => pd.id == place);
    const history = useHistory();
    const handleClick = () => {
        history.push(`/hotel/${placedetails.id}`)
    }
    return (
        <div>
            <div class="content">
                <div class="header-content-wrapper mt-5">
                    <div class="w-100">
                    <div class="row w-100">
                        <div class="col-lg-6 text-center">
                            <img id="bookingimg" src={placedetails.img_link}></img>
                            <h1 class="display-4">{placedetails.title}</h1>
                        <p>
                            {placedetails.details}
                        </p>
                        </div>
                        <div class="col-lg-6">
                            <div class="booking_form" >
                                <Form onSubmit={handleClick}>
                                    <label>Origin</label>
                                            <FormControl required name="origin" type="text" placeholder="Write your Origin" className="my-3 bg-light" required />
                                        <label>Destination</label>
                                            <FormControl  name="destination" type="text" value={placedetails.title}  className="my-3 bg-light" required />

                                        <div class="form-calender d-flex">
                                            <div>
                                                <label class="text-right" required>To :</label>
                                                <FormControl  type="date" required/>
                                            </div>
                                            <div id="from">
                                                <label class="text-left" required>Form :</label>
                                                <FormControl  type="date" required/>
                                            </div>
                                        </div>
                                        <button id="bookingsubmit" class="btn btn-outline-warning" type="submit" >Booking</button> 
                                </Form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;


