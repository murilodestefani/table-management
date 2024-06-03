import { Tables } from "@components/Tables";
import { Clients } from "@components/Clients";
import { Foods } from "@components/Foods";
import { useOutletContext } from "react-router-dom";

type ComponentType = "tables" | "clients" | "foods";

interface OutletContext {
  activeComponent: ComponentType;
}

export function Home() {
  const { activeComponent } = useOutletContext<OutletContext>();

  const renderComponent = () => {
    switch (activeComponent) {
      case "tables":
        return <Tables />;
      case "clients":
        return <Clients />;
      case "foods":
        return <Foods />;
      default:
        return <Tables />;
    }
  };

  return <main>{renderComponent()}</main>;
}
