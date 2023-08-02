import * as React from "react";
import TextControl from "../TextControl/TextControl";
import InputGroup from "react-bootstrap/InputGroup";
import Patient from "@/models/Patient";
export interface IPatientFormProps {
  patient: Patient;
  updatePatient: Function;
}

export default function PatientForm(props: IPatientFormProps) {
  const handlePatientUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    drugProp: string
  ) => {
    props.updatePatient("patient", { [drugProp]: e.target.value });
  };
  const { patient } = props;
  return (
    <>
      <InputGroup className="col-md-8 my-3">
        <InputGroup.Text>Patient</InputGroup.Text>
        <TextControl
          id="patientFirstName"
          name="patientFirstName"
          placeholder="First Name"
          value={patient.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePatientUpdate(e, "firstName")
          }
        />
        <TextControl
          id="patientLastName"
          name="patientLastName"
          placeholder="Last Name"
          value={patient.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePatientUpdate(e, "lastName")
          }
        />
        <TextControl
          className="form-control"
          type="date"
          id="patientDOB"
          name="patientDOB"
          placeholder="Date of Birth"
          value={patient.dob}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePatientUpdate(e, "dob")
          }
        />
      </InputGroup>
      <InputGroup className="col-md-8 mb-3">
        <InputGroup.Text>Address</InputGroup.Text>
        <TextControl
          id="patientAddress"
          name="patientAddress"
          placeholder="Street"
          value={patient.address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePatientUpdate(e, "address")
          }
        />
      </InputGroup>
    </>
  );
}
