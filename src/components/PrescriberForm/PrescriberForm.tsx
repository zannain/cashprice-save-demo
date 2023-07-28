import * as React from "react";
import TextControl from "../TextControl/TextControl";
import translatePrescriber from "@/helpers/prescriberTranslator";
import { InputGroup } from "react-bootstrap";
import { AiOutlinePhone } from "react-icons/ai";
import { FaBriefcaseMedical } from "react-icons/fa";
export interface IPrescriberFormProps {
  prescriber: any;
}

export default function PrescriberForm(props: IPrescriberFormProps) {
  const result = translatePrescriber(props.prescriber);
  const [prescriberFirstName, setPrescriberFirstName] = React.useState<string>(
    result.name.split(" ")[0]
  );
  const [prescriberLastName, setPrescriberLastName] = React.useState<string>(
    result.name.split(" ")[1]
  );
  const [street, setPrescriberStreet] = React.useState<string>(
    result.address.street
  );
  const [city, setPrescriberCity] = React.useState<string>(result.address.city);
  const [state, setPrescriberState] = React.useState<string>(
    result.address.state
  );
  const [prescriberPhoneNumber, setPrescriberPhoneNumber] =
    React.useState<string>(result.phoneNumber);
  const [prescriberNPI, setPrescriberNPI] = React.useState(result.npi);
  return (
    <>
      <InputGroup className="col-md-8 my-3">
        <InputGroup.Text>Prescriber</InputGroup.Text>
        <TextControl
          readOnly
          id="prescriberFirstName"
          name="prescriberFirstName"
          placeholder="First Name"
          value={prescriberFirstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrescriberFirstName(e.target.value)
          }
        />
        <TextControl
          readOnly
          id="prescriberFirstName"
          name="prescriberFirstName"
          placeholder="Last Name"
          value={prescriberLastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrescriberLastName(e.target.value)
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
          value={prescriberPhoneNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrescriberPhoneNumber(e.target.value)
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
          value={prescriberNPI}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrescriberNPI(e.target.value)
          }
        />
      </InputGroup>
      <InputGroup className="col-md-8 mb-3">
        <InputGroup.Text>Address</InputGroup.Text>
        <TextControl
          readOnly
          id="prescriberAddress"
          name="prescriberAddress"
          placeholder="Street"
          value={street}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrescriberStreet(e.target.value)
          }
        />

        <TextControl
          readOnly
          name="prescriberCity"
          id="prescriberCity"
          placeholder="City"
          value={city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrescriberCity(e.target.value)
          }
        />

        <TextControl
          readOnly
          name="prescriberState"
          placeholder="State"
          value={state}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrescriberState(e.target.value)
          }
        />
      </InputGroup>
    </>
  );
}
