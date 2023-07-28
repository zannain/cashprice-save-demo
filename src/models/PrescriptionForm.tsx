import Drug from "./Drug";
import Patient from "./Patient";
import Prescriber from "./Prescriber";

class PrescriptionFormModel {
  prescriber: Prescriber;
  patient: Patient;
  drug: Drug;
  constructor(
    drug: Drug = {} as Drug,
    prescriber: Prescriber = new Prescriber(),
    patient: Patient = {
      firstName: "",
      lastName: "",
      address: { city: "", state: "", street: "" },
      dob: null,
    }
  ) {
    this.drug = drug;
    this.patient = patient;
    this.prescriber = prescriber;
  }
}
export default PrescriptionFormModel;
