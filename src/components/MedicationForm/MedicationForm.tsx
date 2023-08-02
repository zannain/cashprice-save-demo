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
  const handleDrugUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    drugProp: string
  ) => {
    props.updateDrug("drug", { [drugProp]: e.target.value });
  };
  return (
    <>
      <InputGroup className="col-md-8 my-3">
        <InputGroup.Text>Medication</InputGroup.Text>

        <TextControl
          id="name"
          name="medicationName"
          placeholder="Medication Name"
          value={props.drug?.medicationName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "medicationName")
          }
        />
        <TextControl
          name="strength"
          id="strength"
          placeholder="Strength"
          value={props.drug?.strength}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "strength")
          }
        />
        <TextControl
          name="pillNonPill"
          placeholder="Dosage Form"
          value={props.drug?.pillNonPill}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "pillNonPill")
          }
        />
        <InputGroup.Text>
          <AiOutlineNumber />
        </InputGroup.Text>
        <TextControl
          name="quantity"
          placeholder="Quantity"
          value={props.drug?.quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "quantity")
          }
        />
        <TextControl
          name="issueDate"
          placeholder="Issue Date"
          type="date"
          value={props.drug?.issueDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "issueDate")
          }
        />

        <TextControl
          name="refills"
          placeholder="Refills"
          value={props.drug?.refills}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleDrugUpdate(e, "refills")
          }
        />
      </InputGroup>

      <div className="mb-3">
        <FloatingLabel controlId="directions" label="Directions">
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            value={props?.drug?.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleDrugUpdate(e, "description")
            }
          />
        </FloatingLabel>
      </div>
    </>
  );
}
