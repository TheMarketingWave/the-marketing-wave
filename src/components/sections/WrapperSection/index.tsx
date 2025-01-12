import { createSignal } from "solid-js";
import { ServiceSection } from "../Services";
import clsx from "clsx";

export const WrapperSection = () => {
  const [show, setShow] = createSignal(true);

  const init = () => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  };

  init();

  return (
    <div class={clsx("flex-col", show() ? "flex" : "hidden")}>
      <ServiceSection />
    </div>
  );
};
