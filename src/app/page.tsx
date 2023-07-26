import DrugSearchForm from "@/components/DrugSearchForm/DrugSearchForm";
import DrugSearchProvider from "@/components/DrugSearchProvider/DrugSearchProvider";
import DrugSearchTable from "@/components/DrugSearchTable/DrugSearchTable";

export default async function Home() {
  return (
    <DrugSearchProvider>
      <main className="container">
        <DrugSearchForm />
        <DrugSearchTable />
      </main>
    </DrugSearchProvider>
  );
}
