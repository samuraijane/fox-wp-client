import React, { useState } from "react";
import styled from "styled-components";
import { Create, Loading, Login } from "./";

const StyledDiv = styled.div`
  margin: 22px 0;
  input {
    margin: 6px 0;
  }
`;

const Account = () => {
  const [loading, setLoading] = useState(false);

  const isLoading = bool => setLoading(bool);

  return (
    <>
      <StyledDiv>
        <h2>Login</h2>
        <Login loading={isLoading} />
      </StyledDiv>
      <StyledDiv>
        <h2>Create an account</h2>
        <Create loading={isLoading} />
      </StyledDiv>
      <p>
        We know it&apos;s a hassle but you&apos;ll need to create an account and
        then login before you can register for the race.
      </p>
      {loading ? <Loading /> : ""}
    </>
  );
};

export default Account;
