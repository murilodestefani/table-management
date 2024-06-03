import { Outlet } from "react-router-dom";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { useState } from "react";

type ComponentType = "tables" | "clients" | "foods";

export function Layout() {
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("tables");

  return (
    <div className="flex min-h-svh flex-col relative">
      <Header />
      <main className="flex-grow">
        <Outlet context={{ activeComponent }} />
      </main>
      <Footer setActiveComponent={setActiveComponent} />
    </div>
  );
}
