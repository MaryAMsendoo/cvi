"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView, animate, type Variants } from "motion/react";


const CAROUSEL_IMAGES = ["/p1.jpg", "/p30.jpg", "/p8.jpg", "/p29.jpg", "/img14.png", "/p16.jpg", "/p20.jpg", "/p3.jpg", "/p4.jpg",];

const STATS = [
    { value: 57, label: "youths trained" },
    { value: 4, label: "full-time staff" },
    { value: 9, label: "active volunteers" },
    { value: 2, label: "programmes delivered" },
];

const container: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedStat({ value, label }: { value: number; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, value, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });
        return () => controls.stop();
    }, [isInView, value]);

    return (
        <div ref={ref} className="px-6 py-5">
            <div
                className="text-3xl text-surface tabular-nums"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
                {display}
            </div>
            <div className="mt-1 text-xs text-surface/70">{label}</div>
        </div>
    );
}

export default function Hero() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActive((i) => (i + 1) % CAROUSEL_IMAGES.length);
        }, 6000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-foreground">
            {/* Background carousel */}
            <div className="absolute inset-0">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={CAROUSEL_IMAGES[active]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={CAROUSEL_IMAGES[active]}
                            alt=""
                            fill
                            preload={active === 0}
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(115deg, rgba(5,107,120,0.92) 0%, rgba(31,44,50,0.78) 45%, rgba(31,44,50,0.35) 100%)",
                    }}
                />
            </div>

           

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-24 pt-20 sm:px-10"
            >
                <div className="max-w-2xl">
                    <motion.h1
                        variants={item}
                        className="text-4xl leading-[1.08] text-surface sm:text-5xl lg:text-6xl"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                        Empowered citizens driving inclusive governance and peaceful societies.
                    </motion.h1>
                    <motion.p variants={item} className="mt-6 max-w-xl text-lg text-surface/85">
  Building youth empowerment and inclusive governance across Benue State and Nigeria&rsquo;s Middle Belt.
</motion.p>

                    <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                            href="/get-involved"
                            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-surface transition-transform hover:-translate-y-0.5"
                        >
                            Partner with us
                        </Link>

                        <a href="/cvi-organizational-profile.pdf"
                            download
                            className="rounded-md border border-surface/40 px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-surface/10"
                        >
                            Download our organizational profile
                        </a>
                    </motion.div>
                </div>

                {/* Snapshot stats — counts up once scrolled into view */}
                <motion.div
                    variants={item}
                    className="mt-16 w-full max-w-3xl rounded-lg border border-surface/15 bg-surface/10 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-2 divide-y divide-surface/15 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
                        {STATS.map((s) => (
                            <AnimatedStat key={s.label} value={s.value} label={s.label} />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}