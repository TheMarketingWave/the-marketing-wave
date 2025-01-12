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
