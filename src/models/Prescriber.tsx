import Address from "./Address";

class Prescriber {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.address = { city: "", state: "", street: "" } as Address;
    this.npi = "";
    this.phoneNumber = "";
  }
  firstName: string;
  lastName: string;
  address: Address;
  phoneNumber: string;
  npi: string;
}

export default Prescriber;
