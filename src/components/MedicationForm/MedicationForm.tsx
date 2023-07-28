import * as React from "react";
import TextControl from "../TextControl/TextControl";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { AiOutlineNumber } from "react-icons/ai";
import Drug from "@/models/Drug";

export interface IMedicationFormProps {
  drug: Drug;
  updateDrug: Function;
}

export default function MedicationForm(props: IMedicationFormProps) {
  const formDrug = props.drug;
  const handleDrugUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    drugProp: string
  ) => {
    props.updateDrug(e.target.value, drugProp);
  };
  return (
    <>
      <InputGroup className="col-md-8 my-3">
        <InputGroup.Text>Medication</InputGroup.Text>

        <TextControl
          id="name"
          name="name"
          placeholder="Medication Name"
          value={formDrug?.medicationName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "medicationName")
          }
        />
        <TextControl
          name="strength"
          id="strength"
          placeholder="Strength"
          value={formDrug?.strength}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "strength")
          }
        />
        <TextControl
          name="dosageForm"
          placeholder="Dosage Form"
          value={formDrug?.pillNonPill}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "pillNonPill")
          }
        />
        <TextControl
          name="quantity"
          placeholder="Quantity"
          value={formDrug?.quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "quantity")
          }
        />
        <InputGroup.Text>
          <AiOutlineNumber />
        </InputGroup.Text>
      </InputGroup>

      <div className="mb-3">
        <FloatingLabel controlId="directions" label="Directions">
          <Form.Control as="textarea" style={{ height: "100px" }} />
        </FloatingLabel>
      </div>
    </>
  );
}
