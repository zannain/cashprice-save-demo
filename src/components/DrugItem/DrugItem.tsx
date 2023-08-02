import * as React from "react";
import { DrugSearchContext } from "../DrugSearchProvider/DrugSearchProvider";
import Drug from "@/models/Drug";
import { useRouter } from "next/navigation";

export interface IDrugItemProps {
  drug: Drug;
}

export default function DrugItem({ drug }: IDrugItemProps) {
  const { setDrug, setSearchResults } = React.useContext(DrugSearchContext);
  const router = useRouter();
  const { medicationName, unitPrice, drugId, brandName, source, slug } = drug;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cost = formatter.format(Number(unitPrice));
  const handleDrugSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    drug.quantity = 0;
    drug.issueDate = new Date();
    drug.refills = 0;
    setDrug(drug);
    setSearchResults([]);
    router.push(`/drug/${drugId}`);
  };
  return (
    <tr>
      <td>{medicationName}</td>
      <td>{brandName}</td>
      <td>{cost}</td>
      <td>{source}</td>
      <td>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleDrugSelection(e)
          }
          className="btn btn-success"
        >
          Prescribe
        </button>
      </td>
    </tr>
  );
}
