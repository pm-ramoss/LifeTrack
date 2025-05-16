
// Components imports
import Header from "../../components/Header";
import Aside from "../../components/Aside";

export default function Home() {
  return (
    <section className="flex flex-col h-screen bg-[#f8f7f5] overflow-auto">
      <Header />
      <main className="w-full h-full overflow-y-auto overflow-x-auto p-6">
        <Aside />
      </main>
    </section>
  );
}
