import { Rive } from "@rive-app/canvas";
import { onCleanup, onMount } from "solid-js";

const LandingPageAnimation = () => {
  let canvas!: HTMLCanvasElement;
  let rive: Rive | null = null;

  onMount(() => {
    if (canvas) {
      const isMobile = window.innerWidth < 768;
      const artboardName = isMobile ? "portrait" : "landscape";

      rive = new Rive({
        src: "/rive/landing-page.riv",
        canvas,
        autoplay: true,
        stateMachines: "State Machine 1",
        artboard: artboardName,
        onLoad: () => {
          canvas.style.visibility = "visible";
          rive?.resizeDrawingSurfaceToCanvas();
          const inputs = rive?.stateMachineInputs("State Machine 1");
          if (inputs && inputs.length > 0) {
            const trigger = inputs[0];
            trigger.fire();
          }
        },
      });
    }
  });

  onCleanup(() => {
    rive?.cleanup();
  });

  return (
    <canvas
      ref={canvas!}
      id="landing-page-canvas"
      class="w-full aspect-portrait md:aspect-video absolute top-[50px] left-0"
      style="visibility:'hidden'"
    ></canvas>
  );
};

export default LandingPageAnimation;
