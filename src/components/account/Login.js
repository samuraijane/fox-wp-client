import React, { useState } from "react";
import propTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import { Message } from "./../";

const StyledDiv = styled.div``;

const StyledForm = styled.form``;

const StyledInput = styled.input``;

const StyledButton = styled.button``;

const Login = ({ loading }) => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  function extractFormData(fd) {
    const raw = {};
    for (let key of fd.keys()) {
      raw[key] = fd.get(key);
    }
    const polished = {
      password: raw.password,
      username: raw.username
    };
    return polished;
  }

  const mapping = {
    password: v => setPassword(v),
    username: v => setUsername(v)
  };

  const resetInputValues = () => {
    Object.keys(mapping).forEach(key => {
      mapping[key]("");
    });
    loading(false);
  };

  async function doLogin(user) {
    await axios
      .post(`https://sj-fox-server.herokuapp.com/auth/login`, user)
      .then(response => {
        if (response && response.data && response.status === 200) {
          const creds = {};
          creds.token = response.data.token;
          creds.username = response.data.username;
          creds.userId = response.data.id;
          localStorage.setItem("udf", JSON.stringify(creds));
          resetInputValues();
        } else {
          console.log("login", response);
        }
      })
      .catch(error => {
        loading(false);
        if (error.response && error.response.data.code === 401) {
          setMessage(
            "The credentials you entered are incorrect. We apologize for the inconvenience but if you need to reset anything, send us an email."
          );
        } else if (error.response) {
          setMessage("Well that didn't work. Check the console for errors.");
          console.error(error);
        } else {
          setMessage(
            "It appears that you no longer have an active internet connection. Bummer."
          );
        }
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loading(true);
    const userData = extractFormData(new FormData(e.target));
    doLogin(userData);
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

Login.propTypes = {
  loading: propTypes.func.isRequired
};

export default Login;
