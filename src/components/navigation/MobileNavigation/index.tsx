import { BurgerButton } from "~/components/buttons/BurgerButton";
import { NavModal } from "./navigation-modal";
import { createSignal } from "solid-js";

export const MobileNav = () => {
  const [show, setShow] = createSignal(false);

  return (
    <div class="ml-auto pr-[4px] relative">
      <BurgerButton onClick={() => setShow(!show())} />
      <NavModal
        show={show()}
        onClickOutside={() => {
          setShow(false);
        }}
      />
    </div>
  );
};
