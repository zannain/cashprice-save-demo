import Link from "next/link";
import * as React from "react";

export interface IDrugItemProps {
  cost: string;
  medicationName: string;
  drugId: string;
}

export default function DrugItem({
  medicationName,
  cost,
  drugId,
}: IDrugItemProps) {
  return (
    <tr>
      <td>{medicationName}</td>
      <td>{cost}</td>
      <td>
        <Link
          href={`prescribe/${medicationName}?drugId=${drugId}`}
          className="btn btn-success"
        >
          Prescribe
        </Link>
      </td>
    </tr>
  );
}
