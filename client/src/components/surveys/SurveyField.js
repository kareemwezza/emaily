import React from "react";

//this component will be rendered in Field component
// this will make it inherit some props from the parent

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  // if the field is touched and there is an error then we return erroe
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: "5px" }} {...input} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
