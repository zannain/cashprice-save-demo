import Address from "./Address";

class Prescriber {
  constructor() {
    this.name = "";
    this.address = { city: "", state: "", street: "" } as Address;
    this.npi = "";
    this.phoneNumber = "";
  }
  name: string;
  address: Address;
  phoneNumber: string;
  npi: string;
}

export default Prescriber;
