import React from 'react';
import "./index.css"


export default function Footer() {
  return (
    <div className = "Container">
      <div className="first-child">
        <div className="Logo">
          <img src = "" />
        </div>
        <div className="body">
          <p>Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident.</p>
        </div>
        <div className="media-icons">
          {/* <i class="fa" aria-hidden="true"></i> */}
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-youtube" aria-hidden="true"></i>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </div>

      </div>
      <div className="second-child">
        <h6>Quick Links</h6>
        <a href = ".">Get Involved</a>
        <a href = ".">Donate Now</a>
        <a href = ".">Become a Volunteer</a>
        <a href = ".">Careers</a>
        <a href = ".">Site Map</a>
      </div> 
      <div className="third-child">
      <h6>Office Links</h6>
        <a href = ".">USA Office</a>
        <a href = ".">Australia Office</a>
        <a href = ".">Canada Office</a>
        <a href = ".">Networks</a>
        <a href = ".">North America</a>
      </div>
      <div className="fourth-child">
      <h6>Contact Us</h6>
      <div className = "Location">
        <span><i class="fa fa-location-arrow" aria-hidden="true"></i><p>Elliott Ave, Parkville VIC 3052, Melbourne Canada</p></span>
      </div>

      <div className = "Call">
        <span><i class="fa fa-phone" aria-hidden="true"></i><p>Phone: +2348053708531</p></span>
      </div>

      <div className = "Email">
        <span><i class="fas fa-mailchimp    "></i><p>Phone: +2348053708531</p></span>
      </div>

      </div>
    </div>
  );
}
