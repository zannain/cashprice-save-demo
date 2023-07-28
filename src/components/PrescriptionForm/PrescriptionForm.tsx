"use client";
import * as React from "react";
import TextControl from "../TextControl/TextControl";
import PrescriberForm from "../PrescriberForm/PrescriberForm";
import processPrescription, {
  savePrescription,
} from "@/helpers/savePrescription";
import PatientForm from "../PatientForm/PatientForm";
import Prescription from "@/models/PrescriptionForm";
import SuccessToast from "../Toast/SuccessToast";

export interface IPrescriptionFormProps {
  drug: string;
  drugId: string;
  prescriber?: {};
}

export default function PrescriptionForm(props: IPrescriptionFormProps) {
  const [drug, setDrug] = React.useState<string>(props.drug);
  const [showToast, setShowToast] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState<string>("");
  const [toastBg, setToastBg] = React.useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const parsedData = Object.fromEntries(form.entries());
    try {
      const response = await processPrescription(parsedData, props.drugId);
      if (response.results) {
        setShowToast(true);
        setApiResponse("Successfully Sent Prescription"); // The message you want to display in the toast
        setToastBg("success");
      } else {
        setShowToast(true);
        setApiResponse("Unable to Submit Prescription");
        setToastBg("danger");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const closeToast = () => {
    setShowToast(false);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset className="prescriberInformation">
        <PrescriberForm prescriber={props.prescriber} />
      </fieldset>

      <fieldset className="patientInformation">
        <PatientForm />
      </fieldset>

      <fieldset className="drugInformation">
        <div className="input-group col-md-8 my-3">
          <span className="input-group-text">Medication</span>

          <TextControl
            id="name"
            name="name"
            placeholder="Medication Name"
            value={drug}
            onChange={(e) => setDrug(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            id="issueDate"
            name="issueDate"
            placeholder="Issue Date"
          />
          <TextControl name="strength" id="strength" placeholder="Strength" />
          <TextControl name="dosageForm" placeholder="Dosage Form" />
          <TextControl name="quantity" placeholder="Quantity" />
        </div>

        <div className="mb-3">
          <label htmlFor="directions" className="form-label">
            Direction
          </label>
          <textarea name="" id="" className="form-control"></textarea>
        </div>
      </fieldset>

      <div className="col">
        <button className="btn btn-success">Submit</button>
      </div>

      <SuccessToast
        show={showToast}
        onClose={closeToast}
        message={apiResponse}
        toastBg={toastBg}
      />
    </form>
  );
}
