// Video.js
import React from "react";
import "./Video.css";
import Footer from "./Footer";
const Video = () => {
  const externalLink =
    "https://saaq.gouv.qc.ca/en/drivers-licences/canadian-foreign-drivers-licence";
  const passengerLicence =
    "https://saaq.gouv.qc.ca/en/drivers-licences/obtaining-licence/passenger-vehicle-class-5";
  const appointment = "https://saaq.gouv.qc.ca/en/make-appointment";
  const roadSafetyForYoung =
    "https://saaq.gouv.qc.ca/en/road-safety/client-groups/young-drivers";
  const imageUrl = "https://www.flaticon.com/free-icons/car.jpg";

  return (
    <div className="Resources">
      <h2>What You Need to Know Before A Driver</h2>
      <div className="image-container">
        <img src={imageUrl} alt="CANADIAN OR FOREIGN DRIVER'S LICENCE" />
        <p>
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            Information
          </a>
        </p>
      </div>

      <div className="image-container">
        <img src={imageUrl} alt="Passenger Drivers Licence" />
        <p>
          <a href={passengerLicence} target="_blank" rel="noopener noreferrer">
            For Passenger Vehicles (Class 5)
          </a>
        </p>
      </div>

      <div className="image-container">
        <img src={imageUrl} alt="Make An Appointment" />
        <p>
          <a href={appointment} target="_blank" rel="noopener noreferrer">
            Appointment
          </a>
        </p>
      </div>

      <div className="image-container">
        <img src={imageUrl} alt="Road Safety For Young Drivers" />
        <p>
          <a
            href={roadSafetyForYoung}
            target="_blank"
            rel="noopener noreferrer"
          >
            Road Safety
          </a>
        </p>
      </div>
    </div>
  );
  <Footer />;
};

export default Video;
