import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";


export const metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: "About Me",
    description: `Here are some details about my self.`,
  };

export default function About(){
    return (
        <>
        <AboutCoverSection />
        <Skills />
        <h2 className="mt-8 font-semibold text-xl self-start mx-20 text-dark">
        Have a project in mind? Reach out to me 📞 from <Link href="/contact" className="!underline underline-offset-2" >here</Link> and let's make it happen.
        </h2>
        </>
    );
} 



