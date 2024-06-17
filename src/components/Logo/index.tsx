import { FramerLogo } from "@phosphor-icons/react";

export function Logo() {
  return (
    <span className="cursor-pointer flex items-center justify-center text-3xl font-semibold text-foreground">
      <FramerLogo weight="duotone" className="text-primary" />
      TableEase
    </span>
  );
}
