import * as React from "react";
import TextControl from "../TextControl/TextControl";
import translatePrescriber from "@/helpers/prescriberTranslator";

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
  const [npi, setNPI] = React.useState<string>(result.npi);
  const [street, setPrescriberStreet] = React.useState<string>(
    result.address.street
  );
  const [city, setPrescriberCity] = React.useState<string>(result.address.city);
  const [state, setPrescriberState] = React.useState<string>(
    result.address.state
  );
  const [prescriberPhoneNumber, setPrescriberPhoneNumber] =
    React.useState<string>(result.phoneNumber);
  return (
    <>
      <div className="input-group col-md-8 my-3">
        <span className="input-group-text">Prescriber</span>
        <TextControl
          id="prescriberFirstName"
          name="prescriberFirstName"
          placeholder="First Name"
          value={prescriberFirstName}
          onChange={(e) => setPrescriberFirstName(e.target.value)}
        />
        <TextControl
          id="prescriberFirstName"
          name="prescriberFirstName"
          placeholder="Last Name"
          value={prescriberLastName}
          onChange={(e) => setPrescriberLastName(e.target.value)}
        />
        <TextControl
          id="prescriberPhoneNumber"
          name="prescriberPhoneNumber"
          placeholder="Phone Number"
          value={prescriberPhoneNumber}
          onChange={(e) => setPrescriberPhoneNumber(e.target.value)}
        />
      </div>
      <div className="col-md-8 mb-3 input-group">
        <span className="input-group-text">Address</span>
        <TextControl
          id="prescriberAddress"
          name="prescriberAddress"
          placeholder="Street"
          value={street}
          onChange={(e) => setPrescriberStreet(e.target.value)}
        />

        <TextControl
          name="prescriberCity"
          id="prescriberCity"
          placeholder="City"
          value={city}
          onChange={(e) => setPrescriberCity(e.target.value)}
        />

        <TextControl
          name="prescriberState"
          placeholder="State"
          value={state}
          onChange={(e) => setPrescriberState(e.target.value)}
        />
      </div>
    </>
  );
}
