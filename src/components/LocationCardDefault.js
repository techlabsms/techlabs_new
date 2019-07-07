import React from 'react';
import Image from '../assets/defaultcard.svg';

const LocationCardDefault = () => {
    return (
        <div className="col-md-6 mt-3">
        <div className="locations--card text-center">
          <img className="card-img w-75" src={Image} alt="default"/>
          <div className="row mt-3">
          <div className="col-12">
          <h3 className="text-muted mt-4 pl-3 pr-3 d-inline-block align-middle text-center">Establish TechLabs in your city! Get in touch.</h3>
          </div>
          </div>
        </div>
      </div>
    );
};

export default LocationCardDefault;