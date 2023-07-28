import * as React from "react";
import TextControl from "../TextControl/TextControl";
import translatePrescriber from "@/helpers/prescriberTranslator";
import { InputGroup } from "react-bootstrap";
import { AiOutlinePhone } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa";
export interface IPrescriberFormProps {
  prescriber: any;
  updatePrescriber: Function;
}

export default function PrescriberForm(props: IPrescriberFormProps) {
  const { prescriber } = props;
  const handleUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    props.updatePrescriber("prescriber", { [prop]: e.target.value });
  };
  return (
    <>
      <InputGroup className="col-md-8 my-3">
        <InputGroup.Text>Prescriber</InputGroup.Text>
        <TextControl
          readOnly
          id="prescriberFirstName"
          name="prescriberFirstName"
          placeholder="First Name"
          value={props?.prescriber.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdate(e, "prescriberFirstName")
          }
        />
        <TextControl
          readOnly
          id="prescriberLastName"
          name="prescriberLastName"
          placeholder="Last Name"
          value={props?.prescriber.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdate(e, "prescriberLastName")
          }
        />
        <InputGroup.Text>
          <AiOutlinePhone />
        </InputGroup.Text>
        <TextControl
          readOnly
          id="prescriberPhoneNumber"
          name="prescriberPhoneNumber"
          placeholder="Phone Number"
          value={prescriber.phoneNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdate(e, "prescriberPhoneNumber")
          }
        />
        <InputGroup.Text>
          <FaBriefcaseMedical />
        </InputGroup.Text>
        <TextControl
          readOnly
          id="prescriberNPI"
          name="prescriberNPI"
          placeholder="NPI"
          value={prescriber.npi}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdate(e, "prescriberNPI")
          }
        />
      </InputGroup>
      <InputGroup className="col-md-8 mb-3">
        <InputGroup.Text>Address</InputGroup.Text>
        <TextControl
          readOnly
          id="prescriberStreet"
          name="prescriberStreet"
          placeholder="Street"
          value={prescriber.address.street}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdate(e, "prescriberStreet")
          }
        />

        <TextControl
          readOnly
          name="prescriberCity"
          id="prescriberCity"
          placeholder="City"
          value={prescriber.address.city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdate(e, "prescriberCity")
          }
        />

        <TextControl
          readOnly
          name="prescriberState"
          placeholder="State"
          value={prescriber.address.state}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdate(e, "prescriberState")
          }
        />
      </InputGroup>
    </>
  );
}
