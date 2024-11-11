import { Rive } from "@rive-app/canvas";

const LandingPageAnimation = () => {
  const init = (canvas: HTMLCanvasElement) => {
    const r = new Rive({
      src: "/rive/landing-page.riv",
      canvas,
      autoplay: true,
      stateMachines: "State Machine 1",
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        const [trigger] = r.stateMachineInputs("State Machine 1");
        trigger.fire();
      },
    });
  };

  return (
    <canvas
      ref={(element) => {
        init(element);
      }}
      id="landing-page-canvas"
      class="w-full h-full absolute top-[50px] left-0"
    ></canvas>
  );
};

export default LandingPageAnimation;
