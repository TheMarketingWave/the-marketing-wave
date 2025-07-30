import { clientOnly } from "@solidjs/start";
import { SloganAnimated } from "./SloganAnimated";
import { ScrollButton } from "~/components/buttons/ScrollButton";
import { ImgBlur } from "~/components/animations/img-blur";

const LandingPageAnimation = clientOnly(() => import("./LandingPageAnimation"));

export const LandingPage = () => {
  return (
    <div class="w-screen h-screen relative flex  items-center overflow-hidden">
      <ImgBlur
        srcLandscape="https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/tmw-grafitti.webp?fit=crop&h=800&w=2000"
        src="https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/home-team.webp"
        class="absolute top-0 left-0"
      />
      <LandingPageAnimation />
      <SloganAnimated />
      <ScrollButton />
    </div>
  );
};
