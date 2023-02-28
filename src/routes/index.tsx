import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="grid xl:grid-cols-2 h-screen justify-center md:p-4 gap-4">
      <div class="bg-gray-200 unsplash hidden xl:block">&nbsp;</div>
      <div class="flex items-center bg-gray-200 p-10 sm:p-20">
        <div class="flex flex-col gap-14">
          <h1 class="text-6xl md:text-7xl 2xl:text-8xl lowercase">Upthere</h1>
          <p class="text-xl md:text-2xl xl:text-xl 2xl:text-2xl text-justify">
            We're passionate about full-stack development using technologies
            like Elm, Svelte, Remix.run, and Qwik. Our mission is to bring your
            ideas to life with a touch of magic, right here in Oslo, Norway.
            With innovative solutions and personalized attention, we empower
            your digital journey with the latest tech tools and expertise.
            Experience the difference of partnering with a team that truly cares
            about your success. Contact us today and let's create something
            amazing together!
          </p>
          <p class="text-2xl xl:text-2xl 2xl:text-3xl">
            <a href="mailto:hello@upthere.no">hello@upthere.no</a>
          </p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "upthere",
  meta: [
    {
      name: "description",
      content: "We're a product and consultancy firm from Oslo, Norway.",
    },
  ],
};
