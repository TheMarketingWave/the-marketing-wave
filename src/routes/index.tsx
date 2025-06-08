import { DividerBanner } from "~/components/banners/DividerBanner";
import { AgencyServices } from "~/components/sections/AgencyServices";
import { LandingPage } from "~/components/sections/LandingPage";
import { RecentProjects } from "~/components/sections/RecentProjects";
import { getAgencyServicesApi, getProjectsApi } from "~/lib/api";

export const route = {
  preload: () => {
    getAgencyServicesApi();
    getProjectsApi();
  },
};

export default function Home() {
  return (
    <main class="w-screen relative overflow-x-hidden">
      <LandingPage />
      <AgencyServices />
      <RecentProjects />
      <DividerBanner
        mobileImg="https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/home-team.webp"
        mobileGraphicImg="https://assets.contento.io/assets/s_01JcNqtcfRKHbFR892mjwTxdbj/Vector.webp"
      />
    </main>
  );
}
