import Prescriber from "@/models/Prescriber";

export default function translatePrescriber(prescriber: any) {
  const result = new Prescriber();
  if (prescriber.addresses && prescriber.addresses.length > 0) {
    const address = prescriber.addresses[0];
    result.address.street = address.address_1;
    result.address.state = address.state;
    result.address.city = address.city;
    result.phoneNumber = address.telephone_number;
  }
  if (prescriber.basic) {
    const basic = prescriber.basic;
    result.name = `${basic.first_name} ${basic.last_name}`;
    result.npi = prescriber.number;
  }
  return result;
}
