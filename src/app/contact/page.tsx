import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZohoContactForm from "@/components/ZohoContactForm";

export const metadata: Metadata = {
  title: "Contact — Venkatesh TV",
  description: "Get in touch with Venkatesh TV — AI agents, tech leadership, and mentorship.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col">
      <Header />

      <main className="w-full min-w-0 flex-1">
        <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
          <div className="bg-grid absolute inset-0 opacity-100" />
          <div className="glow-orb" style={{ top: "-120px", left: "-120px" }} />
          <div className="glow-orb-indigo" style={{ bottom: "-80px", right: "-80px" }} />

          <div className="container-wide relative z-10">
            <div className="mb-12 text-center">
              <p className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.35em] text-blue-400/90">
                Get in touch
              </p>
              <h1 className="font-display text-4xl font-medium tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                Contact Me
              </h1>
              <p className="font-serif mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
                Whether it&apos;s about AI agents, a collaboration, or just a conversation — I&apos;d love to hear from you.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <ZohoContactForm />
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
            style={{ background: "linear-gradient(to bottom, transparent, #020617)" }}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
