import { AgencyServices } from "~/components/sections/AgencyServices";
import { LandingPage } from "~/components/sections/LandingPage";
import { WrapperSection } from "~/components/sections/WrapperSection";
import { getAgencyServices } from "~/lib/contento";

export const route = {
  preload: () => getAgencyServices(),
};

export default function Home() {
  return (
    <main class="w-screen relative overflow-x-hidden">
      <LandingPage />
      <AgencyServices />
      <WrapperSection />
    </main>
  );
}
