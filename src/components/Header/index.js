import './index.css';
import React from 'react';
// import {Button} from 'react-semantic-ui';
// import {Button} from 'react-semantic-ui';

export default function Header() {
  return (
    // <div> 
        // <p> Header </p>

    <div className = "HContainer">
        <div className = "HeaderPanel">
            <div className = "Logo"><h3>ALONE</h3></div>
            <div className = "Links">
                <a href = "google.com">
                    Farmers
                </a>

                <a href = "google.com">
                    Factories
                </a>

                <a href = "google.com">
                    Technology
                </a>

                <a href = "google.com">
                    SDG
                </a>

                <a href = "google.com">
                    Company
                </a>
            </div>
            {/* <Button /> */}
            <button>Call for a Demo</button>
        </div>


    </div>
    
  )
}
