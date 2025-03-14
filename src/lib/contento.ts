"use server";

import { cache } from "@solidjs/router";
import { createContentoClient } from "@gocontento/client";

const apiKey = process.env.API_KEY ?? "";

const contentApi = createContentoClient({
  apiURL: "https://app.contento.io/api/v1",
  apiKey,
  siteId: "s_01JcNqtcfRKHbFR892mjwTxdbj",
  isPreview: false,
});

export const getAgencyServices = cache(
  () => contentApi.getContentById("c_01jCNR91zv4MAbEftpTNjzCDv9"),
  "agency-services"
);

export const getProjects = cache(
  () => contentApi.getContentById("c_01jKdYB5c52Ar9pzkDkE255jrq"),
  "projects"
);

export const getToKnowUs = cache(
  () => contentApi.getContentById("c_01JnECW00Rj15R01psQV8H742p"),
  "get-to-know-us"
);
