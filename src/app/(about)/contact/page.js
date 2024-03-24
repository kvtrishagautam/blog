import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};


export default function Contact() {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark  flex  flex-row items-center justify-center text-dark ">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark "><LottieAnimation /></div>
      <div className="w-3/5 flex flex-col items-start justify-center py-16 p-8 ">
        <h2 className="font-bold px-16 capitalize text-4xl">Let's Connect!</h2>
        <ContactForm />
      </div>
    </section>
  );
}