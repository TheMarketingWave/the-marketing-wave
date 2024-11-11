import { clientOnly } from "@solidjs/start";
import { SloganAnimated } from "./SloganAnimated";
import { ScrollButton } from "~/components/buttons/ScrollButton";

const LandingPageAnimation = clientOnly(() => import("./LandingPageAnimation"));

export const LandingPage = () => {
  return (
    <div class="w-screen h-screen relative flex  items-center overflow-hidden">
      <LandingPageAnimation />
      <SloganAnimated />
      <ScrollButton />
    </div>
  );
};
