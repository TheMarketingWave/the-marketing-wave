import { A, useLocation } from "@solidjs/router";
import { Logo } from "../Logo";
import { MobileNav } from "../navigation/MobileNavigation";

import "./animation.css";
import { createEffect } from "solid-js";
import clsx from "clsx";

export const Header = () => {
  const location = useLocation();

  createEffect(() => {
    console.log(location.pathname);
  });

  return (
    <div
      class={clsx(
        "flex fixed top-0 left-0 w-screen items-center p-4 pt-6 z-10 box-border",
        location.pathname === "/" && "header-slide-in-animate"
      )}
    >
      <A href="/">
        <Logo />
      </A>

      <MobileNav />
    </div>
  );
};
