import clsx from "clsx";
import { BasicButton, Props } from "../BasicButton";

export const FullButton = (props: Props) => {
  return (
    <BasicButton
      {...props}
      class={clsx("bg-brand-orange text-white", props.class)}
    />
  );
};
