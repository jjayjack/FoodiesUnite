import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import "./index.css";
import ControlledCarousel from "../Carousel/Carousel";

const Homepage = () => {
  const [location, setLocation] = useState("");
  const [venues, setVenues] = useState([]);
  console.log("Venue state!!!", venues);
  return (
    
    <div className="homepage">
      <Search setVenues={setVenues} />

      {/* SHORT CIRCUITING v important, super useful */}
      {venues.length > 0 && <ControlledCarousel venues={venues} />}
      
      <ul>
        <div className="row">
          {venues.slice(0, 6).map((venue, index) => {
            // cconditional rendering based on if venue.venue.delivery exister
            return (
              <div className="col-sm-4">
                <div
                  className="card text-center w-auto my-3"
                  key={"venue-" + venue.venue.id}
                >
                  <div className="card-header">
                    <h5 className="card-title venueName">{venue.venue.name}</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title">
                      {venue.venue.location.address},{" "}
                      {venue.venue.location.city}
                    </h6>
                    <p className="card-text"></p>
                    {venue.venue.delivery !== undefined ? (
                      <a
                        href={venue.venue.delivery.url}
                        className="btn text-white deliveryButton"
                        target="_blank"
                      >
                        Get It Delivered
                      </a>
                    ) : (
                      <a href="#" className="btn text-white deliveryButton">
                        No Delivery Available
                      </a>
                    )}
                    {/* above is the way to do the rendering with a ternary. because the falsey returns null, we can use the short circuiting technique below for a little bit cleaner code */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Homepage;
