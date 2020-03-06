import React, { useState } from "react";
import propTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import { Message } from "./../";

const StyledForm = styled.form``;

const StyledInput = styled.input``;

const StyledButton = styled.button``;

const StyledDiv = styled.div``;

const Create = ({ loading }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  function extractFormData(fd) {
    const raw = {};
    for (let key of fd.keys()) {
      raw[key] = fd.get(key);
    }
    const polished = {
      firstName: raw.firstName,
      lastName: raw.lastName,
      password: raw.password,
      username: raw.username
    };
    return polished;
  }

  const mapping = {
    firstName: v => setFirstName(v),
    lastName: v => setLastName(v),
    password: v => setPassword(v),
    username: v => setUsername(v)
  };

  const resetInputValues = () => {
    Object.keys(mapping).forEach(key => {
      mapping[key]("");
    });
    loading(false);
  };

  async function createAccount(user) {
    await axios
      .post(`https://sj-fox-server.herokuapp.com/users/register`, user)
      .then(response => {
        if (response && response.data && response.status === 201) {
          resetInputValues(); // TODO change to controlled components
          setMessage("It's official... you're account has been created.");
        }
      })
      .catch(error => {
        loading(false);
        setMessage(
          "Hmmm... something has gone awry. Check the console for errors."
        );
        console.error(error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loading(true);
    const userData = extractFormData(new FormData(e.target));
    createAccount(userData);
  }

  const handleChange = e => {
    return mapping[e.target.name](e.target.value);
  };

  const handleCancel = () => {
    setMessage("");
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          onChange={handleChange}
          name="firstName"
          placeholder="First Name"
          type="text"
          value={firstName}
        />
        <StyledInput
          onChange={handleChange}
          name="lastName"
          placeholder="Last Name"
          type="text"
          value={lastName}
        />
        <StyledInput
          onChange={handleChange}
          name="username"
          placeholder="Email"
          type="text"
          value={username}
        />
        <StyledInput
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
          value={password}
        />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      {message ? <Message fn={handleCancel} text={message} /> : ""}
    </StyledDiv>
  );
};

Create.propTypes = {
  loading: propTypes.func.isRequired
};

export default Create;
