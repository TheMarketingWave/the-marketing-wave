import "./animation.css";

export const SloganAnimated = () => {
  return (
    <div class="relative p-6 slogan-slide-in">
      <h1 class="text-5xl text-black">
        Ride our <br /> wave for
      </h1>
      <div class="h-[120px] overflow-hidden">
        <div class="flex flex-col slogan-animate-roll">
          <h1 class="text-5xl text-brand-orange brand-text-shadow py-[12px]">
            branding & <br /> identity
          </h1>
          <h1 class="text-5xl text-brand-green brand-text-shadow py-[12px]">
            digital <br /> marketing
          </h1>
          <h1 class="text-5xl text-brand-purple brand-text-shadow py-[12px]">
            website &<br /> e-commerce
          </h1>
          <h1 class="text-5xl text-brand-orange brand-text-shadow py-[12px]">
            branding & <br /> identity
          </h1>
        </div>
      </div>
    </div>
  );
};
