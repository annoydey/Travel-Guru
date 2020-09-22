import React, { useState } from 'react';
import './FirstPageTitle.css'
import fakedata from '../fakeData/index'
import { Link } from 'react-router-dom';

const FirstPageTitle = () => {
    const place = fakedata;
    const [places , setPlaces] = useState(place);

    return (
      <div>
        <div class="firstpagecontent">
          <div class="header-content-wrapper mt-5">
            <div class="w-100">
              <div class="row w-100">
                <div class="col-lg-6 text-center">
                  <h1 class="display-4">Sajek Valley</h1>
                  <p>
                  Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.
                  </p>
                  <Link to="/book/1" class="btn btn-outline-warning">Booking</Link>
                </div>

                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-4 text-center">
                      <div class="card-img">
                        <Link to={"/book/"+"1"} id="titlelink1">
                          <img id="img1" src="https://i.ibb.co/GTNqZMS/Sajek.png"></img>
                          <h4>Sajek Valley</h4>
                        </Link>
                      </div>
                    </div>
                    <div class="col-lg-4 text-center">
                      <div class="card-img">
                        <Link to={"/book/"+"2"} id="titlelink2">
                          <img id="img2" src="https://i.ibb.co/QMQt7qg/Sreemongol.png"></img>
                          <h4>Sreemangal</h4>
                        </Link>
                      </div>
                    </div>
                    <div class="col-lg-4 text-center">
                      <div class="card-img">
                        <Link  to={"/book/"+"3"} id="titlelink3">
                          <img id="img3" src="https://i.ibb.co/dJgktwd/sundorbon.png"></img>
                          <h4>Sundorbons</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
  </div>
  
    );
};

export default FirstPageTitle;