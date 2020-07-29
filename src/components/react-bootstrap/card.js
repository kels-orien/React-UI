import React from "react";
import House from "../../assets/images/house.jpg";

const BootCard = () => {
  return (
    <div>
      <div class="card card-width-modify">
        <img src={House} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title color-primary">The Regent Luxury Suites</h5>
          <p class="card-text text-modify">Ikeja Lagos</p>
        </div>
      </div>
    </div>
  );
};

export default BootCard;
