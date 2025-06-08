"use server";

import { createContentoClient } from "@gocontento/client";

const apiKey = process.env.API_KEY ?? "";

const contentApi = createContentoClient({
  apiURL: "https://app.contento.io/api/v1",
  apiKey,
  siteId: "s_01JcNqtcfRKHbFR892mjwTxdbj",
  isPreview: false,
});

export const getFooterContent = () => {
  return contentApi.getContentById("c_01JmSC9mdvC0xN20R45x1YWw2m");
};

export const getAgencyServices = () => {
  return contentApi.getContentById("c_01jCNR91zv4MAbEftpTNjzCDv9");
};

export const getProjects = () => {
  return contentApi.getContentById("c_01jKdYB5c52Ar9pzkDkE255jrq");
};

// export const getTerms = query(() => {
//   // contentApi.getContentById("c_01JPQKM3EjEYjRWrvHC8Za1g1p");
//   return Promise.resolve({});
// }, "terms");
