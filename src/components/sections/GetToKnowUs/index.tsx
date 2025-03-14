import { createResource, createEffect } from "solid-js";
import { getToKnowUs } from "../../../lib/contento";

interface GetToKnowUsData {
  fields: {
    title: {
      text: string;
    };
    content: {
      text: string;
    };
  };
}

export const GetToKnowUs = () => {
  const [getToKnowUsData, { refetch }] = createResource<GetToKnowUsData | null>( //create assync
    () => getToKnowUs()
  );

  createEffect(() => {
    console.log("Data received:", getToKnowUsData());
  });

  return (
    <section class="py-12 px-6 text-center bg-page">
      <div class="max-w-3xl mx-auto">
        {getToKnowUsData() ? ( //fol Show(from solid-js)
          <>
            <h2 class="text-2xl font-bold text-gray-900">
              {getToKnowUsData()?.fields?.title.text ?? "Get to know us"}
            </h2>
            <p class="mt-4 text-gray-700">
              {getToKnowUsData()?.fields?.content.text ?? "Loading content..."}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default GetToKnowUs;
