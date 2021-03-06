import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { fetch, mockDataFor } from "../../../sstore/actions";

const SignUp = (props) => {

  useEffect(() => {
    props.fetch("classes");
    props.fetch("register");
  }, []);

  return (
    <div className="y-wrap">
      <h2>Knolls Race</h2>
      <p>Vivamus consequat massa nec congue viverra. Aliquam vel arcu consectetur, pulvinar augue in, scelerisque neque. Maecenas non ex vitae lectus elementum condimentum in eu nisi.</p>
      <div className="y-button">
        <button disabled={Object.keys(props.registerFields).length !== 7} onClick={() => props.history.push('/compete/signup/form/identity')}>Race Form</button>
      </div>
      <div>
        <button onClick={() => props.mockDataFor()}>Anna</button>
        <button onClick={() => props.history.push('/compete/classes')}>Classes</button>
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  fetch,
  mockDataFor
};

const mapStateToProps = (state) => ({
  classes: state.classes,
  navs: state.navs,
  pages: state.pages,
  registerFields: state.registerFields,
  token: state.token,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
