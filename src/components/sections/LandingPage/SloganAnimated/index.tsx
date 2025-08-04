import { Section } from "~/components/layout/sections";
import "./animation.css";

export const SloganAnimated = () => {
  return (
    <Section class="items-center h-screen">
      <div class="relative p-6 w-ful slogan-animate-roll slogan-slide-in">
        <h1 class="text-5xl text-black md:text-[100px]">WAVES of</h1>
        <div class="h-[120px] md:h-[130px] overflow-hidden">
          <div class="flex flex-col slogan-animate-roll text-5xl md:text-[90px]">
            <h1 class=" text-brand-orange brand-text-shadow py-[12px]">
              branding & <br class="md:hidden" /> identity
            </h1>
            <h1 class=" text-brand-green brand-text-shadow py-[12px]">
              digital <br class="md:hidden" /> marketing
            </h1>
            <h1 class=" text-brand-purple brand-text-shadow py-[12px]">
              website &<br class="md:hidden" /> e-commerce
            </h1>
            <h1 class=" text-brand-orange brand-text-shadow py-[12px]">
              branding & <br class="md:hidden" /> identity
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
};
