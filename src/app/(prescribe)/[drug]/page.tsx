import PrescriptionForm from "@/components/PrescriptionForm/PrescriptionForm";
import React from "react";

export interface IDrugEntryProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
  loading: boolean;
}

export default async function DrugEntry(props: IDrugEntryProps) {
  const { loading } = props;
  const { drugId } = props.searchParams;
  const { drug } = props.params;
  async function getPrescriber() {
    const url =
      "https://npiregistry.cms.hhs.gov/api/?version=2.1&number=1134683816";
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0];
  }
  const data = await getPrescriber();
  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <>
      <h3 className="mt-5">eRX Submission</h3>
      <PrescriptionForm prescriber={data} drug={drug} drugId={drugId} />
    </>
  );
}
