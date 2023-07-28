import * as React from "react";
import TextControl from "../TextControl/TextControl";

export interface IPatientFormProps {}

export default function PatientForm(props: IPatientFormProps) {
  return (
    <>
      <div className="input-group col-md-8 my-3">
        <span className="input-group-text">Patient</span>
        <TextControl
          id="patientFirstName"
          name="patientFirstName"
          placeholder="First Name"
        />
        <TextControl
          id="patientLastName"
          name="patientLastName"
          placeholder="Last Name"
        />
      </div>
      <div className="col-md-8 mb-3 input-group">
        <span className="input-group-text">Address</span>
        <TextControl
          id="patientStreet"
          name="patientStreet"
          placeholder="Street"
        />

        <TextControl name="patientCity" id="patientCity" placeholder="City" />

        <TextControl name="patientState" placeholder="State" />
        <input
          className="form-control"
          type="date"
          id="patientDOB"
          name="patientDOB"
          placeholder="Date of Birth"
        />
      </div>
    </>
  );
}
