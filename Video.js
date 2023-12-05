// Video.js
import React from "react";
import "./Video.css";
import Footer from "./Footer";
import DriverLicence from "./DriverLicence.jpg";
import Car from "./Car.jpg";
import Appointment from "./Appointment.jpg";
import RoadSafety from "./RoadSafety.jpg";

const Video = () => {
  const externalLink =
    "https://saaq.gouv.qc.ca/en/drivers-licences/canadian-foreign-drivers-licence";
  const passengerLicence =
    "https://saaq.gouv.qc.ca/en/drivers-licences/obtaining-licence/passenger-vehicle-class-5";
  const appointment = "https://saaq.gouv.qc.ca/en/make-appointment";
  const roadSafetyForYoung =
    "https://saaq.gouv.qc.ca/en/road-safety/client-groups/young-drivers";

  return (
    <div className="Resources">
      <h2>What You Need to Know Before A Driver</h2>
      <div className="row">
        <div className="image-container">
          <img
            src={DriverLicence}
            alt="CANADIAN OR FOREIGN DRIVER'S LICENCE"
            className="driver-licence-image"
          />
          <p>
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              General Information
            </a>
          </p>
          <span ><a href="https://www.freepik.com/free-vector/small-car-concept-illustration_89184185.htm#query=car&position=24&from_view=search&track=sph&uuid=592e4593-0a4f-4bd2-a392-09e2d5ff98fb">Image by storyset</a> on Freepik</span>


         
        </div>

        <div className="image-container">
          <img
            src={Car}
            alt="Passenger Drivers Licence"
            className="Car-image"
          />
          <p>
            <a
              href={passengerLicence}
              target="_blank"
              rel="noopener noreferrer"
            >
              For Passenger Vehicles (Class 5)
            </a>
          </p>
          <span ><a href="https://www.freepik.com/free-vector/manager-planning-event-man-marking-date-calendar-page-flat-illustration_11235730.htm#query=Appointment&position=2&from_view=search&track=sph&uuid=89e04d6e-8fda-4586-b83c-7e5c0001f663">Image by pch.vector</a> on Freepik</span>

        </div>
        
      </div>

      <div className="row">
        <div className="image-container">
          <img
            src={Appointment}
            alt="Make An Appointment"
            className="Appointment-image"
          />
          <p>
            <a href={appointment} target="_blank" rel="noopener noreferrer">
              Make an Appointment
            </a>
          </p>
          <span ><a href="https://www.freepik.com/free-vector/manager-planning-event-man-marking-date-calendar-page-flat-illustration_11235730.htm#query=Appointment&position=2&from_view=search&track=sph&uuid=89e04d6e-8fda-4586-b83c-7e5c0001f663">Image by pch.vector</a> on Freepik</span>

        </div>

        <div className="image-container">
          <img
            src={RoadSafety}
            alt="Road Safety For Young Drivers"
            className="RoadSafety-image"
          />
          <p>
            <a
              href={roadSafetyForYoung}
              target="_blank"
              rel="noopener noreferrer"
            >
              Road Safety
            </a>
          </p>
          <span >Image by <a href="https://www.freepik.com/free-photo/traffic-light-sign-city_24238282.htm#query=road%20safety&position=13&from_view=keyword&track=ais&uuid=4f5a90b3-9b15-4ec2-92be-c2996a4bfdb8">Freepik</a></span>
        </div>
       

      </div>
      <Footer />
    </div>
  );
};

export default Video;
