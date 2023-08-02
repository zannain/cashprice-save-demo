"use client";
import * as React from "react";
import PrescriberForm from "../PrescriberForm/PrescriberForm";
import processPrescription from "@/helpers/savePrescription";
import PatientForm from "../PatientForm/PatientForm";
import MedicationForm from "../MedicationForm/MedicationForm";
import Form from "react-bootstrap/Form";
import { DrugSearchContext } from "../DrugSearchProvider/DrugSearchProvider";
import PrescriptionFormModel from "@/models/PrescriptionForm";
import translatePrescriber from "@/helpers/prescriberTranslator";
export interface IPrescriptionFormProps {
  drugId: string;
  prescriber?: {};
}
import { Toast, ToastContainer } from "react-bootstrap";
export default function PrescriptionForm(props: IPrescriptionFormProps) {
  const [showToast, setShowToast] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState<string>("");
  const [toastBg, setToastBg] = React.useState("");
  const { drug, setDrug } = React.useContext(DrugSearchContext);
  const prescriber = translatePrescriber(props.prescriber);
  const [formData, setFormData] = React.useState(
    new PrescriptionFormModel(drug, prescriber)
  );

  const handleChange = (
    section: keyof PrescriptionFormModel,
    data: { [key: string]: string }
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: { ...prevFormData[section], ...data },
    }));
  };

  const handleReset = () => {
    let newForm = new PrescriptionFormModel();
    setDrug(null);
    setFormData(newForm);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const parsedData = Object.fromEntries(form.entries());
    try {
      const response = await processPrescription(parsedData, props.drugId);
      if (response?.results === true) {
        setShowToast(true);
        setApiResponse("Successfully Sent Prescription");
        setToastBg("success");
        handleReset();
      } else {
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
        <PrescriberForm
          prescriber={formData.prescriber}
          updatePrescriber={handleChange}
        />
      </Form.Group>

      <Form.Group className="patientInformation">
        <PatientForm patient={formData.patient} updatePatient={handleChange} />
      </Form.Group>

      <Form.Group className="drugInformation">
        <MedicationForm drug={formData.drug} updateDrug={handleChange} />
      </Form.Group>

      <div className="d-flex gap-3">
        <button className="btn btn-outline-primary bt-lg">Submit</button>
      </div>

      <ToastContainer position="top-end">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={1000}
          autohide
          bg={toastBg}
        >
          <Toast.Body>{apiResponse}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Form>
  );
}
