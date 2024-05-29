import { ArrowLeft } from "@phosphor-icons/react";

export function Home() {
  return (
    <main>
      <section className="p-4">
        <header className="flex items-center justify-between">
          <p>Bem vindo 👋</p>
          <button className="bg-white p-3 shadow-xl shadow-zinc-200">
            <ArrowLeft weight="bold" className="text-xl text-[#666687]" />
          </button>
        </header>
      </section>
    </main>
  );
}
