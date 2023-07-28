import DrugSearchForm from "@/components/DrugSearch/DrugSearch";
import DrugSearchProvider from "@/components/DrugSearchProvider/DrugSearchProvider";
import DrugSearchTable from "@/components/DrugSearchTable/DrugSearchTable";

export default async function Home() {
  return (
    <main className="container">
      <DrugSearchForm />
      <DrugSearchTable />
    </main>
  );
}
