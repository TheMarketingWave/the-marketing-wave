import { query } from "@solidjs/router";
import { getAgencyServices, getProjects } from "./contento";

export const getProjectsApi = query(async () => {
  "use server";
  return getProjects();
}, "projects");

export const getAgencyServicesApi = query(async () => {
  "use server";
  return getAgencyServices();
}, "services");
