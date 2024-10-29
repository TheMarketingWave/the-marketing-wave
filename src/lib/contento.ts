"use server";

import { createContentoClient } from "@gocontento/client";

const apiKey = process.env.API_KEY ?? "";

const contentApi = createContentoClient({
  apiURL: "https://app.contento.io/api/v1",
  apiKey,
  siteId: "s_01jbc9RybqxX3wSXsXT9jBNvVs",
  isPreview: false,
});

export const getTitleApi = () =>
  contentApi.getContentById("c_01Jbc9RycXHFmkfy17fS231W8b");
