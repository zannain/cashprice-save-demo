"use client";
import * as React from "react";
import TextControl from "../TextControl/TextControl";
import PrescriberForm from "../PrescriberForm/PrescriberForm";
import processPrescription, {
  savePrescription,
} from "@/helpers/savePrescription";
import PatientForm from "../PatientForm/PatientForm";
import SuccessToast from "../Toast/SuccessToast";
import MedicationForm from "../MedicationForm/MedicationForm";
import Form from "react-bootstrap/Form";
import DrugSearchProvider, {
  DrugSearchContext,
} from "../DrugSearchProvider/DrugSearchProvider";
import PrescriptionFormModel from "@/models/PrescriptionForm";
import translatePrescriber from "@/helpers/prescriberTranslator";
export interface IPrescriptionFormProps {
  drug: string;
  drugId: string;
  prescriber?: {};
}

export default function PrescriptionForm(props: IPrescriptionFormProps) {
  const [showToast, setShowToast] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState<string>("");
  const [toastBg, setToastBg] = React.useState("");
  const { drug, setDrug } = React.useContext(DrugSearchContext);

  const updateDrug = (e: string, drugProp: string) => {
    setDrug({
      ...drug,
      [drugProp]: e,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const parsedData = Object.fromEntries(form.entries());
    try {
      const response = await processPrescription(parsedData, props.drugId);
      if (response.results) {
        setShowToast(true);
        setApiResponse("Successfully Sent Prescription");
        setToastBg("success");
        setDrug(null);
      } else {
        setShowToast(true);
        setApiResponse("Unable to Submit Prescription");
        setToastBg("danger");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="prescriberInformation">
        <PrescriberForm prescriber={props.prescriber} />
      </Form.Group>

      <Form.Group className="patientInformation">
        <PatientForm />
      </Form.Group>

      <Form.Group className="drugInformation">
        <MedicationForm drug={drug} updateDrug={updateDrug} />
      </Form.Group>

      <div className="d-flex gap-3">
        <button className="btn btn-outline-primary bt-lg">Submit</button>
      </div>

      <SuccessToast show={showToast} message={apiResponse} toastBg={toastBg} />
    </Form>
  );
}
