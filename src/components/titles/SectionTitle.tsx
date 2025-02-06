import clsx from "clsx";

type Props = {
  text: string;
  class?: string;
};

export const SectionTitle = (props: Props) => {
  return (
    <h1 class={clsx("text-center text-5xl text-brand-green", props.class)}>
      {props.text}
    </h1>
  );
};
