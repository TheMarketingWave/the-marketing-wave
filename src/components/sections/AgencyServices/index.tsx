import { createAsync } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { getAgencyServicesApi } from "~/lib/api";

import { MobileAgencyServices } from "./MobileAgencyServices";
import { DesktopMobileAgencyServices } from "./DesktopMobileAgencyServices";

import "./animation.css";

export const AgencyServices = () => {
  const agencyServices = createAsync(() => getAgencyServicesApi());

  const getDescriptionList = () => {
    const services = agencyServices();
    if (services?.fields?.list?.blocks) {
      return services?.fields?.list.blocks.map(({ fields }: any) => {
        return {
          text: fields?.short_description?.text ?? "",
          list_link: fields?.list_link?.text ?? "",
        };
      });
    }

    return [];
  };

  const getImagesList = () => {
    const services = agencyServices();

    if (services?.fields?.list?.blocks) {
      return services.fields?.list.blocks.map(({ fields }: any) => {
        return fields?.img?.assets?.[0]?.asset.url ?? "";
      });
    }

    return [];
  };

  const getNames = () => {
    const services = agencyServices();
    if (services?.fields?.list?.blocks) {
      return services.fields?.list.blocks.map(({ name }: any) => {
        return name ?? "";
      });
    }

    return [];
  };

  return (
    <Suspense fallback={<div class="bg-brand-green w-full h-[600px]" />}>
      <Show when={agencyServices()}>
        <MobileAgencyServices
          names={getNames()}
          imgs={getImagesList()}
          descriptions={getDescriptionList()}
        />
        <DesktopMobileAgencyServices
          names={getNames()}
          imgs={getImagesList()}
          descriptions={getDescriptionList()}
        />
      </Show>
    </Suspense>
  );
};
