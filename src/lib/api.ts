import { query } from "@solidjs/router";
import { getAgencyServices, getProjects, getTerms } from "./contento";

export const getProjectsApi = query(async () => {
  "use server";
  return getProjects();
}, "projects");

export const getAgencyServicesApi = query(async () => {
  "use server";
  return getAgencyServices();
}, "services");

export const getTermsApi = query(async () => {
  "use server";
  return getTerms();
}, "terms");
