import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Checkout, Form, Instructions } from "./";

const StyledDiv = styled.div`
  margin: 22px 0;
  input {
    margin: 6px 0;
  }
`;

const StyledPayContainer = styled.div`
  margin: 40px 0 0;
  text-align: center;
`;

const Register = () => {
  const [creds, setCreds] = useState("");
  useEffect(() => {
    if (localStorage.getItem("udf")) {
      setCreds(JSON.parse(localStorage.getItem("udf")));
    }
  }, []);
  return (
    <StyledDiv>
      {creds ? <Form creds={creds} /> : <Instructions />}
      <StyledPayContainer>
        <Checkout />
      </StyledPayContainer>
    </StyledDiv>
  );
};

export default Register;
