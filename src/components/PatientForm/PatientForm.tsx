import * as React from "react";
import TextControl from "../TextControl/TextControl";
import InputGroup from "react-bootstrap/InputGroup";
import Patient from "@/models/Patient";
export interface IPatientFormProps {
  patient: Patient;
}

export default function PatientForm(props: IPatientFormProps) {
  return (
    <>
      <InputGroup className="col-md-8 my-3">
        <InputGroup.Text>Patient</InputGroup.Text>
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
      </InputGroup>
      <InputGroup className="col-md-8 mb-3">
        <InputGroup.Text>Address</InputGroup.Text>
        <TextControl
          id="patientStreet"
          name="patientStreet"
          placeholder="Street"
        />

        <TextControl name="patientCity" id="patientCity" placeholder="City" />

        <TextControl name="patientState" placeholder="State" />
        <TextControl
          className="form-control"
          type="date"
          id="patientDOB"
          name="patientDOB"
          placeholder="Date of Birth"
        />
      </InputGroup>
    </>
  );
}
