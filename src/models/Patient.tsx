import Address from "./Address";

type Patient = {
  firstName?: string;
  lastName?: string;
  address?: Address;
  dob?: Date | null;
};

export default Patient;
