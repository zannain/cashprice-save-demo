type Medication = {
  issueDate: Date;
  medicationName: string;
  dosageForm: string;
  quantity: number;
  directions: string;
  refills?: string;
};

export default Medication;
