import { TbMail } from "solid-icons/tb";
import { TbPhoneCall } from "solid-icons/tb";

const Contact = () => {
  return (
    <main class="w-screen relative overflow-x-hidden pb-20">
      <div class="w-full max-w-[1000px] flex flex-col mx-auto">
        <h1 class="text-brand-text-dark text-6xl pt-32 px-3 pb-4">Contact</h1>
        <div class="px-3 flex flex-col gap-3">
          <p class="font-light">
            If you like what you see, send us a email or writes a message on
            WhatsApp
          </p>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <TbMail class="text-xl" />
              <a href="mailto:stefan.radusi@themarketingwave.agency">
                stefan.radusi@themarketingwave.agency
              </a>
            </div>
            <div class="flex items-center gap-2">
              <TbMail class="text-xl" />
              <a href="mailto:corina.rus@themarketingwave.agency">
                corina.rus@themarketingwave.agency
              </a>
            </div>
            <div class="flex items-center gap-2">
              <TbPhoneCall class="text-xl" />
              <a href="tel:+4733378901">+4733378901</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
