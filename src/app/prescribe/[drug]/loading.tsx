import * as React from "react";
import DrugEntry from "./page";

export interface ILoadingPrescriptionProps {}

export default function LoadingPrescription(props: ILoadingPrescriptionProps) {
  return <DrugEntry loading={true} searchParams={{}} params={{}} />;
}
