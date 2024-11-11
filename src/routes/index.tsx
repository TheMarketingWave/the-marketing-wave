// import { cache, createAsync } from "@solidjs/router";
// import { createEffect } from "solid-js";
import { LandingPage } from "~/components/sections/LandingPage";
import { ServiceSection } from "~/components/sections/Services";
import { WrapperSection } from "~/components/sections/WrapperSection";
// import { getTitleApi } from "~/lib/contento";

// const loadContent = cache(async () => {
//   "use server";

//   return await getTitleApi();
// }, "users");

// export const route = {
//   preload: () => loadContent(),
// };

export default function Home() {
  // const content = createAsync(() => loadContent());
  // const imgUrlMobile = () => {
  //   const pageData = content();
  //   if (pageData)
  //     return pageData.fields.bg.assets.find(
  //       ({ asset }: any) => asset.name === "mobile-landing"
  //     ).asset.url;

  //   return "";
  // };

  // const imgUrlDesktop = () => {
  //   const pageData = content();
  //   if (pageData)
  //     return pageData.fields.bg.assets.find(
  //       ({ asset }: any) => asset.name === "desktop-landing"
  //     ).asset.url;

  //   return "";
  // };

  return (
    <main class="w-screen relative">
      <LandingPage />
      <WrapperSection />
    </main>
  );
}
