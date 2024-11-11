import { Logo } from "../Logo";
import { MobileNav } from "../navigation/MobileNavigation";

import "./animation.css";

export const Header = () => {
  return (
    <div class="flex fixed top-0 left-0 w-screen items-center p-4 pt-6 z-10 header-slide-in-animate">
      <Logo />
      <MobileNav />
    </div>
  );
};
