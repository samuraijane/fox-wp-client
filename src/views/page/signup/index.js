import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { fetch } from "../../../sstore/actions";

const SignUp = (props) => {

  useEffect(() => {
    props.fetch("classes");
    props.fetch("register");
  }, []);

  return (
    <div>
      <h2>Knolls Race</h2>
      <p>Vivamus consequat massa nec congue viverra. Aliquam vel arcu consectetur, pulvinar augue in, scelerisque neque. Maecenas non ex vitae lectus elementum condimentum in eu nisi.</p>
      <button onClick={() => props.history.push('/compete/signup/form/identity')}>Race Form</button>
    </div>
  )
};

const mapDispatchToProps = {
  fetch,
};

const mapStateToProps = (state) => ({
  classes: state.classes,
  navs: state.navs,
  pages: state.pages,
  registerFields: state.registerFields,
  token: state.token,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
