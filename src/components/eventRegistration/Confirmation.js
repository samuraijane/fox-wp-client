import React from "react";
import { connect } from "react-redux";

const Confirmation = user => {
  return (
    <>
      <p>{user.user.firstname}</p>
      <p>{user.user.lastname}</p>
      <p>{user.user.birthdate}</p>
      <p>{user.user.gender}</p>
      <p>{user.user.address1}</p>
      <p>{user.user.address2}</p>
      <p>{user.user.city}</p>
      <p>{user.user.state}</p>
      <p>{user.user.zipcode}</p>
      <p>{user.user.phone}</p>
      <p>{user.user.email}</p>
      <p>{user.user.sponsors}</p>
      <p>{user.user.usraclass}</p>
      <p>{user.user.usradivision}</p>
      <p>{user.user.usramemberno}</p>
      <p>{user.user.usraplateno}</p>
      <p>{user.user.vehiclemake}</p>
      <p>{user.user.vehiclemodel}</p>
      <p>{user.user.engineccs}</p>
      <p>{user.user.enginetype}</p>
      <p>{user.user.skilllevel}</p>
      <p>{user.user.emergencycontactname}</p>
      <p>{user.user.emergencycontacttelephone}</p>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Confirmation);
