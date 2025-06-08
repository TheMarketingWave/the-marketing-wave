import { BasicButton } from "../BasicButton";
import BurgerIcon from "./burger_button.svg";

export const BurgerButton = (props: { onClick: () => void }) => {
  return (
    <BasicButton class="z-10 relative" onClick={props.onClick}>
      <BurgerIcon />
    </BasicButton>
  );
};
