import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FIELDS from "./formFields";
import { submitSurvey } from "../../actions";

const SurveyFormReview = (props) => {
  const reviewFields = FIELDS.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{props.formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please confirm your enteries</h5>
      <div>{reviewFields}</div>
      <button className="yellow darken-3 btn-flat" onClick={props.onCancel}>
        Back
      </button>
      <button
        onClick={() => props.submitSurvey(props.formValues, props.history)}
        className="green btn-flat right white-text"
      >
        send survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, { submitSurvey })(
  withRouter(SurveyFormReview)
);
