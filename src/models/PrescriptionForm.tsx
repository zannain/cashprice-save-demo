import Drug from "./Drug";
import Patient from "./Patient";
import Prescriber from "./Prescriber";

class PrescriptionFormModel {
  prescriber: Prescriber;
  patient: Patient;
  drug: Drug;
  constructor() {
    this.drug = {} as Drug;
    this.patient = {} as Patient;
    this.prescriber = new Prescriber();
  }
}
export default PrescriptionFormModel;
