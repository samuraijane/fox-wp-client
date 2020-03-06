import React, { useState } from "react";
import propTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import { Loading, Message } from "./../";
import {
  Address,
  Age,
  Avatar,
  Emergency,
  Gender,
  Telephone,
  Usra,
  Vehicle
} from "./fieldsets";

const StyledForm = styled.form``;
const StyledButton = styled.button``;
const StyledDiv = styled.div`
  margin: 18px 0;
`;

const Form = ({ creds }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const extractFormData = fd => {
    const booleanMap = {
      no: false,
      yes: true
    };
    const raw = {};
    for (let key of fd.keys()) {
      raw[key] = fd.get(key);
    }
    const polished = {
      address: {
        street1: raw.street1,
        street2: raw.street2,
        city: raw.city,
        state: raw.state,
        postal: raw.postal
      },
      age: raw.age,
      avatar: raw.avatar,
      emergency: {
        name: raw.ename,
        telephone: raw.etelephone
      },
      gender: raw.gender,
      telephone: raw.telephone,
      user: creds.userId,
      usra: {
        class: raw.class,
        division: raw.division,
        member: booleanMap[raw.member],
        number: raw.number
      },
      vehicle: {
        engine: raw.engine,
        make: raw.make,
        model: raw.model,
        type: raw.type
      }
    };
    return polished;
  };

  const resetInputValues = () => {
    setLoading(false);
  };

  async function createProfile(user) {
    await axios
      .post(
        `https://sj-fox-server.herokuapp.com/profiles/${creds.userId}`,
        user,
        { headers: { Authorization: `Bearer ${creds.token}` } }
      )
      .then(response => {
        if (response && response.data && response.status === 201) {
          resetInputValues();
          setMessage(
            "Congrats! We've received your registration information. All that's left to do is pay the fee."
          );
        }
      })
      .catch(error => {
        setLoading(false);
        setMessage(
          "We did not receive your registration for some reasons. Check the console to see what might have happened."
        );
        console.error(error);
      });
  }

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const userData = extractFormData(new FormData(e.target));
    createProfile(userData);
  };

  const handleCancel = () => {
    setMessage("");
  };

  return (
    <div className="y-wrap">
      <p>
        Registering is a two-step process. Begin by completing and submitting
        the form below. Then once you have been notified that we have received
        it, pay the entry fee.
      </p>
      <StyledForm onSubmit={handleSubmit}>
        <StyledDiv>
          <h3>Address</h3>
          <Address />
        </StyledDiv>
        <StyledDiv>
          <h3>Personal Data</h3>
          <Age />
          <Avatar />
          <Gender />
          <Telephone />
        </StyledDiv>
        <StyledDiv>
          <h3>Emergency Contact</h3>
          <Emergency />
        </StyledDiv>
        <StyledDiv>
          <h3>USRA Details</h3>
          <Usra />
        </StyledDiv>
        <StyledDiv>
          <h3>Your Sweet Ride</h3>
          <Vehicle />
        </StyledDiv>
        <div className="y-center">
          <StyledButton type="submit">Submit</StyledButton>
        </div>
      </StyledForm>
      {loading ? <Loading /> : ""}
      {message ? <Message fn={handleCancel} text={message} /> : ""}
    </div>
  );
};

Form.propTypes = {
  creds: propTypes.object.isRequired
};

export default Form;
