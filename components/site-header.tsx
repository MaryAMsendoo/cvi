"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import { navItems, organization } from "@/lib/content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="CVI home">
          <Image src="/logo.jpeg" alt="CVI logo" width={64} height={64} className="h-11 w-11 rounded-full object-cover ring-2 ring-accent/30" priority />
          <span className="max-w-40 text-xs font-bold uppercase tracking-[0.14em] text-primary-strong sm:max-w-none sm:text-sm">{organization.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="relative text-sm font-bold text-foreground transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full">{item.label}</Link>)}
          <Link href="/get-involved" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(244,81,79,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-primary-strong">Partner with us <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </nav>
        <button
          type="button"
          className="flex min-h-11 items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-bold text-primary-strong transition-colors hover:bg-surface-muted lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-navigation" className={`${menuOpen ? "block" : "hidden"} border-t border-border bg-surface px-6 py-5 lg:hidden`}>
        <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-base font-bold text-foreground hover:bg-surface-muted hover:text-accent">{item.label}</Link>)}
          <Link href="/get-involved" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-bold text-white hover:bg-primary-strong">Partner with us <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="CVI home">
            <Image src="/logo.jpeg" alt="CVI logo" width={64} height={64} className="h-11 w-11 rounded-full object-cover ring-2 ring-accent/30" />
            <span className="text-xl font-bold">{organization.shortName}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-surface-muted">Empowering citizens and young people for inclusive governance in Nigeria&apos;s Middle Belt.</p>
        </div>
        <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Explore</p><div className="mt-4 grid gap-2 text-sm text-surface-muted">{navItems.slice(0, 4).map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}</div></div>
        <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Contact</p><p className="mt-4 text-sm leading-6 text-surface-muted">{organization.address}<br />{organization.email}</p><a href="https://www.facebook.com/100069913210617/posts/1304950281845400/?app=fbl" target="_blank" rel="noreferrer" aria-label="CVI on Facebook" title="CVI on Facebook" className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-surface-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"><FaFacebookF size={15} aria-hidden="true" /></a></div>
      </div>
      <div className="border-t border-white/15 px-6 py-5 text-center text-xs text-surface-muted">Citizens Voices International · {organization.registration}</div>
    </footer>
  );
}