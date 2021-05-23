import React from "react";
import REGISTER from "../REGISTER";
import LOGIN from "../LOGIN";
import "./LandingHeader.css";

function LandingHeader(props) {
  const { overlapGroup } = props;

  return (
    <div className="landing-header">
      <div className="overlap-group2-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="sklz-tect valign-text-middle">SklzTect</div>
        <div className="group-19">
          <div className="overlap-group4">
            <div className="subjects valign-text-middle rubik-normal-black-20px"> Subjects </div>
            </div>
        </div>
        <div className="community valign-text-middle rubik-normal-black-20px">Community</div>
        <div className="about-us-1 valign-text-middle rubik-normal-black-20px">About us</div>
        <REGISTER />
        <LOGIN />
      </div>
    </div>
  );
}

export default LandingHeader;
