import Medication from "./Medication";
import Patient from "./Patient";
import Prescriber from "./Prescriber";

type PrescriptionForm = {
  prescriber: Prescriber;
  medication: Medication;
  patient: Patient;
};

export default PrescriptionForm;
