import PrescriptionForm from "@/components/PrescriptionForm/PrescriptionForm";
import translatePrescriber from "@/helpers/prescriberTranslator";
import React from "react";

export interface IDrugEntryProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}

export default async function DrugEntry(props: IDrugEntryProps) {
  const { drugId } = props.params;
  async function getPrescriber() {
    const url =
      "https://npiregistry.cms.hhs.gov/api/?version=2.1&number=1134683816";
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0];
  }
  const data = await getPrescriber();

  return (
    <>
      <h3 className="mt-5">eRX Submission</h3>
      <PrescriptionForm prescriber={data} drugId={drugId} />
    </>
  );
}
