import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const SignUp = (props) => {
  return (
    <div>
      <h2>Knolls Race</h2>
      <p>Vivamus consequat massa nec congue viverra. Aliquam vel arcu consectetur, pulvinar augue in, scelerisque neque. Maecenas non ex vitae lectus elementum condimentum in eu nisi.</p>
      <button onClick={() => props.history.push('/compete/signup/form/identity')}>Race Form</button>
    </div>
  )
};

const mapStateToProps = (state) => ({
  classes: state.classes,
  navs: state.navs,
  pages: state.pages,
  registerFields: state.registerFields,
  token: state.token,
});

export default withRouter(SignUp);
