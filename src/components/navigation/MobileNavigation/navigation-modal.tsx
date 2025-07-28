import { A } from "@solidjs/router";
import clsx from "clsx";
import { For } from "solid-js";

const routes = [
  { path: "/", label: "HOME" },
  { path: "/projects", label: "PROJECTS" },
  { path: "/contact", label: "CONTACT" },
];

export const NavModal = (props: {
  show: boolean;
  onClickOutside: () => void;
}) => {
  return (
    <div
      onClick={props.onClickOutside}
      class={clsx(
        "fixed top-0 left-0 w-full h-full glass-effect transition-transform",
        props.show ? "translate-x-0" : "translate-x-[100%]"
      )}
    >
      <div class="absolute top-0 right-0 pt-[120px] bg-brand-bg-gray h-full px-7 flex flex-col gap-3 shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <For each={routes}>
          {(route) => (
            <A
              end
              href={route.path}
              class="text-right"
              activeClass="text-brand-orange"
              inactiveClass="text-brand-text-dark"
            >
              {route.label}
            </A>
          )}
        </For>
      </div>
    </div>
  );
};
