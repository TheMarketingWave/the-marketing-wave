import { For } from "solid-js";
import { ProjectService, ProjectServiceData } from "./ProjectService";

type Props = {
  projectServices: ProjectServiceData[];
};

export const ProjectServices = (props: Props) => {
  return (
    <div class="px-5 flex flex-col gap-16 pb-2">
      <For each={props.projectServices}>
        {(service, index) => (
          <ProjectService service={service} index={index()} />
        )}
      </For>
    </div>
  );
};
