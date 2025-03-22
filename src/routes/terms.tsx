import { createAsync } from "@solidjs/router";
import { createEffect, Show } from "solid-js";
import { getTerms } from "~/lib/contento";

export const route = {
  preload: () => {
    getTerms();
  },
};

export default function Terms() {
  const content = createAsync(() => getTerms());

  createEffect(() => {
    console.log(content());
  });

  return (
    <main class="w-full relative overflow-x-hidden mb-8">
      <div class="w-full max-w-[1000px] mx-auto px-6">
        <Show when={content()}>
          {(content) => (
            <>
              <h1 class="text-brand-text-dark text-4xl pt-32 pb-6">
                {content().fields.title.text}
              </h1>
              <div
                class="text-brand-text-dark"
                innerHTML={content().fields.content.text}
              ></div>
            </>
          )}
        </Show>
      </div>
    </main>
  );
}
