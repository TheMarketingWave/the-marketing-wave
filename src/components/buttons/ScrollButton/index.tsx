import { BasicButton } from "../BasicButton";
import ArrowDownIcon from "./arrow_down.svg";

import "./animation.css";

export const ScrollButton = () => {
  return (
    <div class="absolute bottom-[80px] left-1/2 -translate-x-1/2">
      <div class="scroll-button-slide-animate">
        <div class="scroll-button-animate">
          <BasicButton
            onClick={() => {
              console.log("click");
              window.scroll({
                top: window.innerHeight / 2,
                behavior: "smooth",
              });
            }}
          >
            <div class="flex flex-col items-center">
              <span>Scroll</span>
              <ArrowDownIcon />
            </div>
          </BasicButton>
        </div>
      </div>
    </div>
  );
};
