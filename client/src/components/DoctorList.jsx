import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* <h1>List</h1> */}
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/book-appointment/${doctor._id}`)}
      >
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization : </b> {doctor.specialization}
          </p>
          <p>
            <b>Experience : </b> {doctor.experience}
          </p>
          <p>
            <b>Fees Per Consaltation : </b> {doctor.feesPerConsaltation}
          </p>
          <p>
            <b>Timing : </b> {doctor.timing[0]} - {doctor.timing[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
