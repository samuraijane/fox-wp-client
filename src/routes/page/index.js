import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { any } from "prop-types";

const PageRoutes = (props) => {
  // /compete/results
  const Results = lazy(() => import('../../views/page/results'));

  // /compete/signup
  const SignUp = lazy(() => import('../../views/page/signup'));

  // /compete/signup/form
  const Form = lazy(() => import('../../views/page/form'));

  // /compete/signup/form/<someFormPart>
  const Contact = lazy(() => import('../../views/page/form/contact'));
  const EmergencyContact = lazy(() => import('../../views/page/form/emergencyContact'));
  const Identity = lazy(() => import('../../views/page/form/identity'));
  const SkillLevel = lazy(() => import('../../views/page/form/skillLevel'));
  const Sponsor = lazy(() => import('../../views/page/form/sponsor'));
  const USRA = lazy(() => import('../../views/page/form/usra'));
  const Vehicle = lazy(() => import('../../views/page/form/vehicle'));

  // /compete/signup/form/signup/confirmation
  const Confirmation = lazy(() => import('../../views/page/signup/confirmation'));

  // /compete/signup/form/signup/payment
  const Payment = lazy(() => import('../../views/page/signup/payment'));

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Route exact path="/compete/signup/confirmation" render={() => <Confirmation />} />
      <Route exact path="/compete/signup/form" render={() => <Form />} />
      <Route exact path="/compete/signup/payment" render={() => <Payment />} />
      <Route exact path="/compete/results" render={() => <Results />} />
      <Route exact path="/compete/signup" render={() => <SignUp />} />
      <Route exact path="/compete/signup/form/contact" render={() => <Contact />} />
      <Route exact path="/compete/signup/form/emergency-contact" render={() => <EmergencyContact />} />
      <Route exact path="/compete/signup/form/identity" render={() => <Identity />} />
      <Route exact path="/compete/signup/form/skill-level" render={() => <SkillLevel />} />
      <Route exact path="/compete/signup/form/sponsor" render={() => <Sponsor />} />
      <Route exact path="/compete/signup/form/usra" render={() => <USRA />} />
      <Route exact path="/compete/signup/form/vehicle" render={() => <Vehicle />} />
    </Suspense>
  );
};

PageRoutes.propTypes = {
  theComponent: any,
  pageData: any,
  path: any,
};

export default PageRoutes;
