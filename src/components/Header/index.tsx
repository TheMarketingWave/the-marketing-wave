import { A } from "@solidjs/router";
import { Logo } from "../Logo";
import { MobileNav } from "../navigation/MobileNavigation";
import clsx from "clsx";

import "./animation.css";

export const Header = () => {
  return (
    <div
      class={clsx(
        "flex fixed top-0 left-0 w-full items-center p-4 pt-6 md:p-6 md:pt-8 z-10 box-border"
      )}
    >
      <A href="/">
        <Logo />
      </A>

      <MobileNav />
    </div>
  );
};
