import { createAsync } from "@solidjs/router";
import { createEffect, Show, Suspense } from "solid-js";
import { getTermsApi } from "~/lib/api";

export const route = {
  preload: () => {
    getTermsApi();
  },
};

export default function Terms() {
  const content = createAsync(() => getTermsApi());

  return (
    <main class="w-full relative overflow-x-hidden mb-8">
      <div class="w-full max-w-[1000px] mx-auto px-6">
        <Suspense>
          <Show when={content()}>
            {(content) => (
              <>
                <h1 class="text-brand-text-dark text-4xl pt-32 pb-6">
                  {content().fields.title.text}
                </h1>
                <div
                  class="text-brand-text-dark font-light flex flex-col gap-3"
                  innerHTML={content().fields.content.text}
                ></div>
              </>
            )}
          </Show>
        </Suspense>
      </div>
    </main>
  );
}
