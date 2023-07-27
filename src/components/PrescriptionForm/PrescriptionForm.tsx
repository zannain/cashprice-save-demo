"use client";
import * as React from "react";
import TextControl from "../TextControl/TextControl";
import PrescriberForm from "../PrescriberForm/PrescriberForm";

export interface IPrescriptionFormProps {
  drug: string;
  drugId: string;
  prescriber: {};
}

export default function PrescriptionForm(props: IPrescriptionFormProps) {
  const [drug, setDrug] = React.useState<string>(props.drug);
  return (
    <>
      <fieldset className="prescriberInformation">
        <PrescriberForm prescriber={props.prescriber} />
      </fieldset>

      <fieldset className="patientInformation">
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
            id="patientAddress"
            name="patientAddress"
            placeholder="Street"
          />

          <TextControl name="patientCity" id="patientCity" placeholder="City" />

          <TextControl name="patientState" placeholder="State" />
        </div>
      </fieldset>

      <fieldset className="drugInformation">
        <div className="input-group col-md-8 my-3">
          <span className="input-group-text">Medication</span>
          <input
            type="date"
            className="form-control"
            id="issueDate"
            name="issueDate"
            placeholder="Issue Date"
          />
          <TextControl
            id="medicationName"
            name="medicationName"
            placeholder="Medication Name"
            value={drug}
            onChange={(e) => setDrug(e.target.value)}
          />
          <TextControl
            name="medicationStrength"
            id="medicationStrength"
            placeholder="Strength"
          />
          <TextControl name="medicationDosageForm" placeholder="Dosage Form" />
          <TextControl name="medicationQuantity" placeholder="Quantity" />
        </div>

        <div className="mb-3">
          <label htmlFor="medicationDirections" className="form-label">
            Direction
          </label>
          <textarea name="" id="" className="form-control"></textarea>
        </div>
      </fieldset>

      <div className="col">
        <button className="btn btn-success">Submit</button>
      </div>
    </>
  );
}
