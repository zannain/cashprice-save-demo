import { PrescriptionFormFields } from "@/constants/PrescriptionFormFields";
import Prescription from "@/models/PrescriptionForm";

async function processPrescription(
  formData: any,
  drugId: string
): Promise<any> {
  const result = new Prescription();
  result.drugId = drugId;
  const address = buildAddress(
    formData[PrescriptionFormFields.patientCity],
    formData[PrescriptionFormFields.patientState],
    formData[PrescriptionFormFields.patientStreet]
  );
  result.address = address;
  const patientName = buildName(
    formData[PrescriptionFormFields.patientFirstName],
    formData[PrescriptionFormFields.patientLastName]
  );
  result.fullName = patientName;
  result.dateOfBirth = formData[PrescriptionFormFields.patientDOB];
  result.prescriberNPI = formData[PrescriptionFormFields.prescriberNPI];
  try {
    const response = await savePrescription(result);
    return response.json();
  } catch (error) {
    return { results: false };
  }
}

function buildName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
function buildAddress(city: string, state: string, street: string): string {
  return `${street || ""} ${city} ${state}`;
}

export async function savePrescription(prescription: Prescription) {
  const result = await fetch("/api/prescription", {
    method: "POST",
    body: JSON.stringify(prescription),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.error(error);
    throw error;
  });
  return result;
}

export default processPrescription;
