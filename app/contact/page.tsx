import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { organization } from "@/lib/content";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return <main><PageIntro eyebrow="Contact CVI" title="Find us in Makurdi." description="For organizational profiles, partnership conversations, or programme questions, reach out to the CVI team." /><div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:grid-cols-2 lg:px-10"><section className="bg-surface-muted p-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Office</p><h2 className="mt-5 text-2xl font-bold">{organization.location}</h2><p className="mt-4 leading-7 text-primary-strong">{organization.address}</p></section><section className="bg-foreground p-8 text-white"><p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Online</p><p className="mt-5 text-lg">{organization.email}</p><Link href="https://www.facebook.com/100069913210617/posts/1304950281845400/?app=fbl" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-surface-muted hover:text-white">Visit our Facebook page <ArrowUpRight size={17} aria-hidden="true" /></Link></section></div></main>;
}