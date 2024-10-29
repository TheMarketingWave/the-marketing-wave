import { A, cache, createAsync } from "@solidjs/router";
import { createEffect } from "solid-js";
import Counter from "~/components/Counter";
import { getTitleApi } from "~/lib/contento";

const loadContent = cache(async () => {
  "use server";
  return await getTitleApi();
}, "users");

export const route = {
  preload: () => loadContent(),
};

export default function About() {
  const content = createAsync(() => loadContent());

  createEffect(() => {
    console.log(content());
  });

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        {content()?.fields?.title?.text}
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>About Page</span>
      </p>
    </main>
  );
}
