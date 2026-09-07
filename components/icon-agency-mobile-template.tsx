"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Film,
  Menu,
  MessageCircle,
  MousePointer2,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { IconAgencyTemplateContent } from "@/content/icon-agency-template";

const fieldClass =
  "min-h-12 w-full rounded-xl border border-black/15 bg-white px-3.5 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-black focus:ring-4 focus:ring-black/8";

function trackEvent(event: string, detail: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as typeof window & { dataLayer?: Array<Record<string, unknown>> };
  analyticsWindow.dataLayer ??= [];
  analyticsWindow.dataLayer.push({ event, ...detail });
  window.dispatchEvent(new CustomEvent("upscale:conversion-event", { detail: { event, ...detail } }));
}

function SectionIntro({
  eyebrow,
  title,
  description,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`text-[11px] font-black uppercase tracking-[0.18em] ${
          invert ? "text-[#00f0ff]" : "text-black/48"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="text-balance mt-2 text-[2.2rem] font-black leading-[2.5rem] tracking-[-0.045em] sm:text-[2.5rem] sm:leading-none lg:text-[3.5rem]">
        {title}
      </h2>
      {description ? (
        <p className={`mt-3 max-w-xl text-[14px] leading-[1.5] sm:mt-5 sm:text-[16px] sm:leading-7 ${invert ? "text-white/62" : "text-black/58"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SuccessState({ title, description, path }: { title: string; description: string; path: string }) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const slots = ["[TIME OPTION 01]", "[TIME OPTION 02]", "[TIME OPTION 03]"];

  return (
    <div className="min-h-72" role="status" aria-live="polite">
      <div className="text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-[#00f0ff] text-black">
          <Check className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-2xl font-black tracking-[-0.04em]">{title}</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/56">{description}</p>
      </div>
      <div className="mt-5 rounded-[1.25rem] border border-black/10 bg-white p-4 text-left">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#831f80]">[APPROVED SCHEDULER]</p>
        <p className="mt-1 text-[13px] font-semibold">Select a time without completing another form.</p>
        <div className="mt-3 grid gap-2">
          {slots.map((slot) => (
            <button
              className={`min-h-11 rounded-xl border px-3 text-left text-[12px] font-semibold ${selectedSlot === slot ? "border-[#831f80] bg-[#fbf6fb]" : "border-black/10 bg-[#f8f8f6]"}`}
              key={slot}
              onClick={() => {
                setSelectedSlot(slot);
                trackEvent("scheduler_slot_selected", { path, slot });
              }}
              type="button"
            >
              {slot}
            </button>
          ))}
        </div>
        <button
          className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-black px-4 text-[13px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!selectedSlot}
          onClick={() => trackEvent("meeting_booked", { path, slot: selectedSlot, destination: "[APPROVED SCHEDULER]" })}
          type="button"
        >
          Book selected time
        </button>
        <p className="mt-3 text-center text-[10px] leading-4 text-black/42">Or continue to [APPROVED SELF-SERVE ONBOARDING].</p>
      </div>
    </div>
  );
}

function StartDialogButton({
  label,
  content,
  className,
  tracking,
  icon = true,
  leadingIcon,
}: {
  label: string;
  content: IconAgencyTemplateContent["dialogs"]["start"];
  className: string;
  tracking: string;
  icon?: boolean;
  leadingIcon?: ReactNode;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [useBrandUrl, setUseBrandUrl] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEvent("form_completion", { path: tracking, destination: "[APPROVED ONBOARDING OR SCHEDULER]" });
    setSubmitted(true);
  }

  return (
    <Dialog onOpenChange={(open) => {
      if (open) trackEvent("cta_click", { path: tracking });
      if (!open) {
        setSubmitted(false);
        setStarted(false);
      }
    }}>
      <DialogTrigger asChild>
        <button className={className} data-track={tracking} type="button">
          {leadingIcon}
          {label}
          {icon ? <ArrowRight className="size-4.5" aria-hidden="true" /> : null}
        </button>
      </DialogTrigger>
      <DialogContent className="bottom-0 top-auto max-h-[92dvh] max-w-none translate-y-0 overflow-y-auto rounded-b-none rounded-t-[1.75rem] border-black/10 bg-[#f6f6f6] p-5 sm:bottom-auto sm:top-1/2 sm:max-w-lg sm:-translate-y-1/2 sm:rounded-[1.75rem] sm:p-7">
        {submitted ? (
          <SuccessState title={content.successTitle} description={content.successDescription} path={tracking} />
        ) : (
          <>
            <DialogHeader className="pr-8 text-left">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-black/42">[SHORT CTA PATH]</p>
              <DialogTitle className="text-3xl font-black leading-[0.98] tracking-[-0.05em]">{content.title}</DialogTitle>
              <DialogDescription className="text-sm leading-6 text-black/52">{content.description}</DialogDescription>
            </DialogHeader>
            <form className="mt-2 grid gap-4" onSubmit={submit}>
              <label className="grid gap-2 text-sm font-bold" htmlFor={`${tracking}-field-01`}>
                {useBrandUrl ? "Brand URL" : "Work email"}
                <input
                  autoComplete={useBrandUrl ? "url" : "email"}
                  className={fieldClass}
                  id={`${tracking}-field-01`}
                  name="field-01"
                  onFocus={() => {
                    if (!started) {
                      trackEvent("form_start", { path: tracking });
                      setStarted(true);
                    }
                  }}
                  placeholder={useBrandUrl ? "https://[BRAND DOMAIN]" : "you@[COMPANY].com"}
                  required
                  type={useBrandUrl ? "url" : "email"}
                />
              </label>
              <button
                className="-mt-2 min-h-9 justify-self-start text-[11px] font-semibold text-[#831f80]"
                onClick={() => setUseBrandUrl((current) => !current)}
                type="button"
              >
                {useBrandUrl ? "Use work email instead" : "Use brand URL instead"}
              </button>
              <button
                className="mt-1 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-black px-5 text-base font-black text-white transition hover:bg-black/82 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20"
                type="submit"
              >
                {content.button}
                <ArrowRight className="size-4.5" aria-hidden="true" />
              </button>
              <p className="text-center text-[11px] leading-5 text-black/42">
                Continue to [APPROVED ONBOARDING OR SCHEDULER].
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}


function BrandWordmark({ invert = false }: { invert?: boolean }) {
  return (
    <img
      alt="Upscale AI"
      className={`h-[28px] w-auto ${invert ? "brightness-0 invert" : ""}`}
      height="35"
      src="/customer-assets/upscale-wordmark.svg"
      width="136"
    />
  );
}

function MobileMenuButton() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Example Ads", "/formats"],
    ["How it works", "#process"],
    ["Offer", "#offer"],
    ["Proof", "#proof"],
    ["[FINAL DESTINATION]", "#final-cta"],
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          aria-label="Open menu"
          className="grid size-11 shrink-0 place-items-center rounded-[1.15rem] border border-[#831f80]/25 bg-white/88 text-black shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#831f80]/15"
          type="button"
        >
          <Menu className="size-5.5" strokeWidth={2.4} aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent className="bottom-0 top-auto max-h-[88dvh] max-w-none translate-y-0 overflow-y-auto rounded-b-none rounded-t-[1.5rem] border-black/10 bg-[#f6f6f6] p-5 sm:left-auto sm:right-4 sm:top-4 sm:max-h-[calc(100dvh-2rem)] sm:max-w-sm sm:translate-x-0 sm:translate-y-0 sm:rounded-[1.5rem]">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl font-black tracking-[-0.045em]">Menu</DialogTitle>
          <DialogDescription className="text-sm leading-6 text-black/50">Upscale AppLovin Creative OS · v1.3</DialogDescription>
        </DialogHeader>
        <nav className="mt-2 grid gap-1" aria-label="Page menu">
          {links.map(([label, href], index) => (
            <a
              className="flex min-h-12 items-center justify-between rounded-xl border border-black/10 bg-white/65 px-4 text-sm font-black transition hover:bg-white"
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
              <span className="text-[10px] text-black/38">{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}

const leadership = [
  {
    name: "Herman Yang",
    role: "CEO",
    image: "/customer-assets/team-herman.avif",
  },
  {
    name: "Kevin Weatherman",
    role: "Head of Business",
    image: "/customer-assets/team-kevin.avif",
  },
  {
    name: "Mike Chang",
    role: "Head of Product / Ops",
    image: "/customer-assets/team-mike.avif",
  },
  {
    name: "Seth Yates",
    role: "CTO",
    image: "/customer-assets/team-seth.avif",
  },
] as const;

const investors = [
  {
    name: "NVP",
    image: "/customer-assets/investor-nvp.svg",
    tile: "bg-[#171d2a]",
  },
  {
    name: "M12",
    image: "/customer-assets/investor-m12.svg",
    tile: "bg-white ring-1 ring-black/10",
  },
  {
    name: "Eniac",
    image: "/customer-assets/investor-eniac.svg",
    tile: "bg-[#f2e8f4] ring-1 ring-black/8",
  },
] as const;

function TeamPhotos({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid grid-cols-4 ${compact ? "gap-1" : "gap-1.5"}`} aria-label="Upscale executive team">
      {leadership.map((person) => (
        <img
          alt={person.name}
          className={`aspect-square w-full rounded-lg object-cover ${compact ? "min-w-0" : ""}`}
          key={person.name}
          loading="eager"
          src={person.image}
        />
      ))}
    </div>
  );
}

function InvestorLogos({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid grid-cols-3 ${compact ? "gap-1" : "gap-1.5"}`} aria-label="Upscale investors">
      {investors.map((investor) => (
        <span
          className={`grid aspect-square place-items-center rounded-lg p-1.5 ${investor.tile}`}
          key={investor.name}
        >
          <img alt={investor.name} className="max-h-full max-w-full object-contain" loading="eager" src={investor.image} />
        </span>
      ))}
    </div>
  );
}

function StoryCard({ wide = false }: { wide?: boolean }) {
  if (wide) {
    return (
      <a
        className="grid min-h-[118px] grid-cols-[8.4rem_1fr] gap-3 rounded-[1.35rem] border border-black/10 bg-white p-2.5 shadow-[0_4px_14px_rgba(2,26,32,0.04)]"
        href="#customer-voice"
      >
        <TeamPhotos />
        <span className="flex min-w-0 flex-col">
          <strong className="text-[15px] font-semibold leading-[1.15] tracking-[-0.025em]">Story</strong>
          <span className="mt-1 text-[11px] leading-[1.35] text-black/78">Herman, Kevin, Mike and Seth. [APPROVED EXECUTIVE TEAM STORY]</span>
          <span className="mt-auto pt-1.5 text-[12px] font-semibold leading-none">Meet the team →</span>
        </span>
      </a>
    );
  }

  return (
    <a className="flex min-h-[166px] flex-col rounded-[1.35rem] border border-black/10 bg-white p-2.5 shadow-[0_4px_14px_rgba(2,26,32,0.04)]" href="#customer-voice">
      <TeamPhotos compact />
      <h2 className="mt-2 text-[15px] font-semibold leading-[1.15] tracking-[-0.025em]">Story</h2>
      <p className="mt-1 text-[11px] leading-[1.35] text-black/78">Herman, Kevin, Mike and Seth.</p>
      <span className="mt-auto pt-1.5 text-[12px] font-semibold leading-none">Meet the team →</span>
    </a>
  );
}

function InvestorCard({ wide = false }: { wide?: boolean }) {
  if (wide) {
    return (
      <a
        className="grid min-h-[118px] grid-cols-[8.4rem_1fr] gap-3 rounded-[1.35rem] border border-black/10 bg-white p-2.5 shadow-[0_4px_14px_rgba(2,26,32,0.04)]"
        href="#appLovin-trust"
      >
        <InvestorLogos />
        <span className="flex min-w-0 flex-col">
          <strong className="text-[15px] font-semibold leading-[1.15] tracking-[-0.025em]">Investors</strong>
          <span className="mt-1 text-[11px] leading-[1.35] text-black/78">NVP, M12 and Eniac.</span>
          <span className="mt-auto pt-1.5 text-[12px] font-semibold leading-none">Meet our investors →</span>
        </span>
      </a>
    );
  }

  return (
    <a className="flex min-h-[166px] flex-col rounded-[1.35rem] border border-black/10 bg-white p-2.5 shadow-[0_4px_14px_rgba(2,26,32,0.04)]" href="#appLovin-trust">
      <InvestorLogos compact />
      <h2 className="mt-2 text-[15px] font-semibold leading-[1.15] tracking-[-0.025em]">Investors</h2>
      <p className="mt-1 text-[11px] leading-[1.35] text-black/78">NVP, M12 and Eniac.</p>
      <span className="mt-auto pt-1.5 text-[12px] font-semibold leading-none">Meet our investors →</span>
    </a>
  );
}

function BackedByStrip() {
  return (
    <a
      className="mt-3 flex min-h-[52px] items-center gap-3 rounded-[1.05rem] border border-black/10 bg-white px-3 py-2 shadow-[0_4px_14px_rgba(2,26,32,0.04)]"
      href="#appLovin-trust"
      onClick={() => trackEvent("logo_interaction", { group: "investors" })}
    >
      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.11em] text-black/48">Backed by</span>
      <span className="grid min-w-0 flex-1 grid-cols-3 gap-2">
        {investors.map((investor) => (
          <span className={`grid h-8 place-items-center rounded-md px-2 ${investor.tile}`} key={investor.name}>
            <img alt={investor.name} className="max-h-4 max-w-full object-contain" loading="eager" src={investor.image} />
          </span>
        ))}
      </span>
    </a>
  );
}

function CustomerLogoStrip({ content }: { content: IconAgencyTemplateContent }) {
  if (!content.customerLogos?.length) return null;

  return (
    <div className="mt-3 rounded-[1.05rem] border border-black/10 bg-white px-3 py-2.5 shadow-[0_4px_14px_rgba(2,26,32,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[9px] font-semibold uppercase tracking-[0.11em] text-black/45">[APPROVED CUSTOMER PROOF LABEL]</span>
        {content.customerSpotlight ? <span className="text-[9px] font-medium text-black/48">{content.customerSpotlight.name}</span> : null}
      </div>
      <div className="mt-2 grid grid-cols-3 items-center gap-1.5" aria-label="Customer logos from the Upscale AppLovin page">
        {content.customerLogos.slice(0, 3).map((logo) => (
          <a
            className="grid min-h-14 place-items-center rounded-md border border-black/8 bg-[#f8f8f6] px-2 py-1.5 text-center"
            href="#proof"
            key={logo.name}
            onClick={() => trackEvent("logo_interaction", { logo: logo.name, group: "customers" })}
          >
            <span>
              <img alt={`${logo.name} logo`} className="mx-auto max-h-6 max-w-full object-contain" decoding="async" loading="eager" src={logo.image} />
              <span className="mt-1 block text-[7px] font-semibold uppercase tracking-[0.06em] text-black/38">[VERIFIED RESULT]</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function HeroProofBar({ content }: { content: IconAgencyTemplateContent }) {
  return (
    <div className="mt-3 flex min-h-11 items-center justify-between gap-3 rounded-[1rem] border border-[#831f80]/18 bg-[#fbf6fb] px-3 py-2">
      <span>
        <span className="block text-[8px] font-semibold uppercase tracking-[0.1em] text-[#831f80]">Verified AppLovin proof</span>
        <span className="mt-0.5 block text-[10px] font-semibold">{content.customerSpotlight?.name ?? "[CUSTOMER]"} · [VERIFIED RESULT]</span>
      </span>
      <span className="shrink-0 text-right text-[8px] font-semibold leading-3 text-black/42">[TEST WINDOW]<br />[ATTRIBUTION]</span>
    </div>
  );
}

function HeroActions({ content }: { content: IconAgencyTemplateContent }) {
  return (
    <div className="mt-3 grid gap-2">
      <StartDialogButton
        className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-[1.1rem] bg-gradient-to-r from-[#831f80] via-[#26259d] to-[#0a6d86] px-5 text-[16px] font-semibold leading-none text-white shadow-[0_8px_20px_rgba(38,37,157,0.16)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#831f80]/20"
        content={content.dialogs.start}
        icon={false}
        label={content.hero.primaryCta}
        leadingIcon={<span className="size-7 shrink-0 rounded-full border-[7px] border-white" aria-hidden="true" />}
        tracking="hero_start_free"
      />
      <a
        className="inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-[1.1rem] border border-black/14 bg-white px-5 text-[16px] font-semibold leading-none text-black transition hover:bg-[#f8f8f6] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#831f80]/15"
        data-track="hero_see_examples"
        href="/formats"
        onClick={() => trackEvent("cta_click", { path: "hero_see_examples" })}
      >
        <Film className="size-5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
        {content.hero.secondaryCta}
      </a>
      <p className="px-2 text-center text-[10px] leading-[1.35] text-black/48">[APPROVED GUARANTEE OR CANCELLATION LANGUAGE]</p>
    </div>
  );
}

function CreativeExampleDialog({
  example,
  index,
}: {
  example: IconAgencyTemplateContent["creativeExamples"][number];
  index: number;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <Dialog onOpenChange={(open) => {
      if (open) trackEvent("creative_play", { customer: example.eyebrow, creative: example.title, placement: "landing_page" });
      if (!open) setPlaying(false);
    }}>
      <DialogTrigger asChild>
        <button
          aria-label={`Open ${example.title} player`}
          className="group relative min-w-0 overflow-hidden rounded-[1.35rem] border border-black/10 bg-black text-left shadow-[0_8px_22px_rgba(0,0,0,0.09)]"
          data-track="creative_play"
          type="button"
        >
          {example.image ? (
            <img
              alt={example.alt}
              className="aspect-[9/16] w-full object-cover opacity-92 transition duration-300 group-hover:scale-[1.02]"
              loading={index === 0 ? "eager" : "lazy"}
              src={example.image}
            />
          ) : (
            <div
              aria-label={example.alt}
              className={`relative aspect-[9/16] w-full overflow-hidden p-2.5 ${index === 0 ? "bg-gradient-to-b from-[#66727d] via-[#334047] to-[#021a20]" : "bg-gradient-to-b from-[#76766b] via-[#34515a] to-[#021a20]"}`}
              role="img"
            >
              <div className="grid grid-cols-3 gap-1.5">
                <span className="h-1 rounded-full bg-white" />
                <span className="h-1 rounded-full bg-white/38" />
                <span className="h-1 rounded-full bg-white/38" />
              </div>
              <div className="mt-3 flex items-center gap-2 text-left text-white">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/38 bg-black/28"><Film className="size-4" aria-hidden="true" /></span>
                <span className="min-w-0">
                  <span className="block truncate text-[10px] font-semibold">{example.eyebrow}</span>
                  <span className="block truncate text-[9px] text-white/82">{example.detail}</span>
                </span>
              </div>
              <div className="mt-3 rounded-[1.1rem] border border-white/16 bg-white/[0.08] p-2.5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-[#831f80]/90 via-[#26259d]/72 to-[#00f0ff]/56 p-3">
                  <div className="h-2 w-3/4 rounded-full bg-white/70" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-white/28" />
                  <Film className="mx-auto mt-9 size-10 text-white/62" aria-hidden="true" />
                </div>
              </div>
            </div>
          )}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/52" />
          <span className="pointer-events-none absolute bottom-3 right-3 grid size-10 place-items-center rounded-full bg-white text-black shadow-lg">
            <Play className="ml-0.5 size-4.5 fill-current" aria-hidden="true" />
          </span>
          <span className="pointer-events-none absolute bottom-4 left-3 max-w-[calc(100%-4.5rem)] truncate text-[10px] font-semibold text-white">{example.eyebrow}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="bottom-0 top-auto max-h-[94dvh] max-w-none translate-y-0 overflow-y-auto rounded-b-none rounded-t-[1.75rem] border-black/10 bg-[#f8f8f6] p-4 sm:bottom-auto sm:top-1/2 sm:max-w-lg sm:-translate-y-1/2 sm:rounded-[1.75rem] sm:p-6">
        <DialogHeader className="pr-8 text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#831f80]">Creative example</p>
          <DialogTitle className="text-[24px] font-semibold leading-[1.05] tracking-[-0.04em]">{example.title}</DialogTitle>
          <DialogDescription className="text-[12px] leading-5 text-black/52">Tap the player when an approved video file is connected.</DialogDescription>
        </DialogHeader>
        <button
          className="relative mt-1 block w-full overflow-hidden rounded-[1.35rem] bg-black text-white"
          onClick={() => {
            const next = !playing;
            setPlaying(next);
            trackEvent("creative_player_control", { customer: example.eyebrow, creative: example.title, state: next ? "play" : "pause" });
          }}
          type="button"
        >
          {example.image ? <img alt="" className="max-h-[48dvh] w-full object-cover opacity-72" src={example.image} /> : <div className="aspect-[9/12] bg-gradient-to-b from-[#831f80] via-[#26259d] to-[#0a6d86]" />}
          <span className="absolute inset-0 grid place-items-center bg-black/22">
            <span className="grid size-16 place-items-center rounded-full bg-white text-black shadow-xl"><Play className="ml-1 size-6 fill-current" aria-hidden="true" /></span>
          </span>
          <span className="absolute inset-x-3 bottom-3 rounded-lg bg-black/64 px-3 py-2 text-center text-[10px] font-semibold tracking-[0.06em]">{playing ? "[PLAYING APPROVED VIDEO]" : "[CONNECT APPROVED VIDEO FILE]"}</span>
        </button>
        <dl className="mt-1 grid grid-cols-2 gap-2 text-[11px]">
          {[
            ["Customer", example.eyebrow],
            ["Format", "[FORMAT]"],
            ["Duration", "[DURATION]"],
            ["Source asset", "[SOURCE ASSET]"],
            ["Concept", "[CONCEPT]"],
            ["Result", "[VERIFIED RESULT]"],
          ].map(([label, value]) => (
            <div className={`rounded-xl border border-black/10 bg-white p-3 ${label === "Result" ? "bg-[#d5f6f7]" : ""}`} key={label}>
              <dt className="text-[9px] font-semibold uppercase tracking-[0.1em] text-black/42">{label}</dt>
              <dd className="mt-1 font-semibold leading-4">{value}</dd>
            </div>
          ))}
        </dl>
      </DialogContent>
    </Dialog>
  );
}

function CreativePreviewGrid({ content }: { content: IconAgencyTemplateContent }) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-2.5">
      {content.creativeExamples.map((example, index) => (
        <CreativeExampleDialog example={example} index={index} key={`${example.title}-${index}`} />
      ))}
    </div>
  );
}

function WorkflowStrip() {
  return (
    <div className="mt-4 grid grid-cols-3 gap-1.5 rounded-[1.15rem] border border-[#831f80]/18 bg-gradient-to-r from-[#831f80] via-[#26259d] to-[#0a6d86] p-2 text-white">
      {["Review", "Briefs", "Launch"].map((step, index) => (
        <div className="rounded-[0.8rem] border border-white/12 bg-white/[0.06] px-2 py-2.5 text-center" key={step}>
          <span className="mx-auto grid size-5 place-items-center rounded-full bg-[#00f0ff] text-[9px] font-semibold text-black">{index + 1}</span>
          <span className="mt-1.5 block text-[10px] font-semibold">{step}</span>
        </div>
      ))}
    </div>
  );
}

function SourceToLaunchStrip() {
  const steps = ["Existing winning ad", "Upscale brief", "AI-edited draft", "AppLovin launch"];

  return (
    <div className="rounded-[1.25rem] border border-[#831f80]/18 bg-gradient-to-r from-[#fbf6fb] via-white to-[#effcff] p-3.5 shadow-[0_8px_22px_rgba(2,26,32,0.04)]">
      <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#831f80]">Source to launch</p>
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-1">
        {steps.map((step, index) => (
          <div className="contents" key={step}>
            <span className="grid min-h-14 place-items-center rounded-lg border border-black/8 bg-white px-1.5 text-center text-[9px] font-semibold leading-[1.25]">{step}</span>
            {index < steps.length - 1 ? <ArrowRight className="size-3 text-[#831f80]" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function OfferProofTrustModules() {
  const offerItems = [
    "12 ads/month",
    "Four every 10 days",
    "Launch in one week",
    "Pay after approving batch one",
    "[APPROVED CANCELLATION TERMS]",
  ];
  const proofItems = [
    ["Customer", "[CUSTOMER]"],
    ["Baseline", "[BASELINE]"],
    ["Result", "[VERIFIED RESULT]"],
    ["Test window", "[TEST WINDOW]"],
    ["Spend", "[SPEND]"],
    ["Attribution", "[ATTRIBUTION METHOD]"],
  ];
  const trustItems = [
    ["Requested permissions", "[REQUESTED PERMISSIONS]"],
    ["Read-only data", "[READ-ONLY DATA]"],
    ["Launch access", "[LAUNCH ACCESS]"],
    ["Data retention", "[DATA RETENTION]"],
    ["Revocation", "[REVOCATION PROCESS]"],
  ];

  return (
    <section className="mx-auto grid max-w-[430px] gap-3 px-4 pb-8" aria-label="Offer, proof and AppLovin trust details">
      <SourceToLaunchStrip />

      <article className="section-anchor overflow-hidden rounded-[1.35rem] bg-[#021a20] p-4 text-white shadow-[0_12px_32px_rgba(2,26,32,0.14)]" id="offer">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#00f0ff]">The offer</p>
            <h2 className="mt-1.5 text-[22px] font-semibold leading-none tracking-[-0.04em]">A steady AppLovin creative cadence</h2>
          </div>
          <span className="shrink-0 rounded-full bg-[#00f0ff] px-3 py-2 text-[12px] font-semibold text-black">[PRICE]/month</span>
        </div>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {offerItems.map((item) => (
            <li className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 text-[11px] font-semibold leading-4" key={item}>
              <Check className="mt-0.5 size-3.5 shrink-0 text-[#00f0ff]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article className="section-anchor rounded-[1.35rem] border border-[#831f80]/18 bg-[#fbf6fb] p-4" id="proof">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#831f80]">Sourced AppLovin proof</p>
            <h2 className="mt-1 text-[20px] font-semibold tracking-[-0.04em]">One claim, fully qualified</h2>
          </div>
          <Star className="size-5 text-[#831f80]" aria-hidden="true" />
        </div>
        <dl className="mt-3 grid grid-cols-2 gap-2">
          {proofItems.map(([label, value]) => (
            <div className={`rounded-xl border border-black/8 bg-white p-3 ${label === "Result" ? "bg-[#d5f6f7]" : ""}`} key={label}>
              <dt className="text-[8px] font-semibold uppercase tracking-[0.1em] text-black/42">{label}</dt>
              <dd className="mt-1 text-[11px] font-semibold leading-4">{value}</dd>
            </div>
          ))}
        </dl>
      </article>

      <article className="rounded-[1.35rem] border border-[#0a6d86]/20 bg-[#effcff] p-4" id="appLovin-trust">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#0a6d86] text-white"><ShieldCheck className="size-5" aria-hidden="true" /></span>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#0a6d86]">AppLovin connection</p>
            <h2 className="mt-1 text-[20px] font-semibold tracking-[-0.04em]">Control stays visible</h2>
          </div>
        </div>
        <dl className="mt-3 grid gap-2">
          {trustItems.map(([label, value]) => (
            <div className="flex items-start justify-between gap-4 rounded-xl border border-black/8 bg-white/76 px-3 py-2.5" key={label}>
              <dt className="text-[10px] font-semibold text-black/54">{label}</dt>
              <dd className="max-w-[58%] text-right text-[10px] font-semibold leading-4">{value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </section>
  );
}

function V13DecisionModules() {
  const firstBatch = [
    ["01", "Winning source", "[APPROVED SOURCE AD]"],
    ["02", "Creative brief", "[APPROVED BRIEF]"],
    ["03", "AI-edited draft", "[APPROVED DRAFT]"],
    ["04", "Launch asset", "[APPROVED APPLOVIN ASSET]"],
  ];
  const faqs = [
    ["What is included each month?", "12 AppLovin ads from existing ads and approved assets, delivered as four ads every 10 days."],
    ["When does billing begin?", "Approve the first batch before payment begins. Then continue month to month under [APPROVED BILLING TERMS]."],
    ["How do revisions work?", "[APPROVED REVISION PROCESS, ROUND COUNT, AND TIMING]"],
    ["Who owns the finished ads?", "[APPROVED ASSET OWNERSHIP AND USAGE RIGHTS]"],
    ["What AppLovin access is required?", "[REQUESTED PERMISSIONS, READ ACCESS, AND LAUNCH ACCESS]"],
    ["What assets do we need?", "[APPROVED SOURCE ASSETS, BRAND GUIDELINES, AND PERFORMANCE DATA]"],
    ["Who controls launch?", "[APPROVED LAUNCH AUTHORIZATION AND ACCOUNT CONTROLS]"],
    ["How can we cancel?", "[APPROVED CANCELLATION TERMS AND REVOCATION PROCESS]"],
  ];

  return (
    <section className="mx-auto grid max-w-[430px] gap-3 px-4 pb-8" aria-label="First batch, economics, fit and frequently asked questions">
      <article className="rounded-[1.35rem] border border-black/10 bg-white p-4" id="first-batch-preview">
        <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#831f80]">Your first batch</p>
        <h2 className="mt-1 text-[22px] font-semibold leading-[1.05] tracking-[-0.04em]">See exactly what moves into AppLovin</h2>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {firstBatch.map(([number, title, detail]) => (
            <div className="min-h-28 rounded-xl border border-black/8 bg-[#f8f8f6] p-3" key={number}>
              <span className="grid size-6 place-items-center rounded-full bg-black text-[9px] font-semibold text-white">{number}</span>
              <h3 className="mt-3 text-[12px] font-semibold">{title}</h3>
              <p className="mt-1 text-[9px] leading-4 text-black/48">{detail}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-[1.35rem] border border-[#831f80]/18 bg-gradient-to-br from-[#fbf6fb] to-white p-4" id="case-study">
        <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#831f80]">AppLovin case study</p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[22px] font-semibold tracking-[-0.04em]">[CUSTOMER]</h2>
            <p className="mt-1 text-[11px] leading-4 text-black/56">[APPROVED CUSTOMER CONTEXT AND TEST OBJECTIVE]</p>
          </div>
          <span className="rounded-full bg-[#d5f6f7] px-3 py-2 text-[11px] font-semibold">[VERIFIED RESULT]</span>
        </div>
        <dl className="mt-4 grid grid-cols-3 gap-2">
          {[["Baseline", "[BASELINE]"], ["Spend", "[SPEND]"], ["Ads", "[ADS LAUNCHED]"], ["Window", "[TEST WINDOW]"], ["Attribution", "[METHOD]"], ["Limits", "[LIMITATIONS]"]].map(([label, value]) => (
            <div className="rounded-xl border border-black/8 bg-white p-2.5" key={label}>
              <dt className="text-[7px] font-semibold uppercase tracking-[0.08em] text-black/38">{label}</dt>
              <dd className="mt-1 text-[9px] font-semibold leading-3">{value}</dd>
            </div>
          ))}
        </dl>
      </article>

      <article className="rounded-[1.35rem] bg-[#021a20] p-4 text-white" id="customer-voice">
        <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#00f0ff]">Customer voice</p>
        <blockquote className="mt-3 text-[18px] font-medium leading-[1.25] tracking-[-0.025em]">“[APPROVED CUSTOMER QUOTE ABOUT THE CREATIVE PROCESS OR RESULT]”</blockquote>
        <div className="mt-4 border-t border-white/12 pt-3 text-[10px] leading-4 text-white/58">[NAME] · [ROLE] · [COMPANY] · [LINKED SOURCE]</div>
      </article>

      <div className="grid grid-cols-2 gap-2.5" id="economics">
        <article className="rounded-[1.35rem] border border-black/10 bg-[#effcff] p-3.5">
          <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#0a6d86]">Economics</p>
          <dl className="mt-3 grid gap-2 text-[9px]">
            {[["Current cost/ad", "[CURRENT COST]"], ["Upscale cost/ad", "[UPSCALE COST]"], ["Current cycle", "[CURRENT TIME]"], ["Upscale cycle", "10 days"]].map(([label, value]) => (
              <div className="flex justify-between gap-2 border-b border-black/8 pb-2 last:border-0" key={label}><dt className="text-black/48">{label}</dt><dd className="text-right font-semibold">{value}</dd></div>
            ))}
          </dl>
        </article>
        <article className="rounded-[1.35rem] border border-black/10 bg-[#fbf6fb] p-3.5">
          <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#831f80]">Finance summary</p>
          <dl className="mt-3 grid gap-2 text-[9px]">
            {[["Price", "[PRICE]/month"], ["Deliverables", "12 ads"], ["Contract", "Month to month"], ["Billing", "After batch-one approval"]].map(([label, value]) => (
              <div className="flex justify-between gap-2 border-b border-black/8 pb-2 last:border-0" key={label}><dt className="text-black/48">{label}</dt><dd className="text-right font-semibold">{value}</dd></div>
            ))}
          </dl>
        </article>
      </div>

      <article className="rounded-[1.35rem] border border-black/10 bg-white p-4" id="fit">
        <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-black/42">Qualification</p>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-[#d5f6f7] p-3">
            <h2 className="text-[13px] font-semibold">Best fit</h2>
            <ul className="mt-2 grid gap-1.5 text-[9px] leading-4"><li>[APPLOVIN ACTIVITY]</li><li>[APPROVED ASSETS]</li><li>[REVIEW CAPACITY]</li><li>[CREATIVE VOLUME]</li></ul>
          </div>
          <div className="rounded-xl bg-[#eceff0] p-3">
            <h2 className="text-[13px] font-semibold">Not a fit yet</h2>
            <ul className="mt-2 grid gap-1.5 text-[9px] leading-4"><li>[MISSING REQUIREMENT]</li><li>[UNSUPPORTED USE CASE]</li><li>[MINIMUM QUALIFICATION]</li><li>[ALTERNATIVE NEXT STEP]</li></ul>
          </div>
        </div>
      </article>

      <article className="rounded-[1.35rem] border border-black/10 bg-white p-4" id="faq">
        <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#831f80]">Buyer FAQ</p>
        <h2 className="mt-1 text-[22px] font-semibold tracking-[-0.04em]">Everything needed to evaluate the offer</h2>
        <Accordion className="mt-3" collapsible onValueChange={(value) => value && trackEvent("faq_open", { item: value })} type="single">
          {faqs.map(([question, answer], index) => (
            <AccordionItem className="border-black/10" key={question} value={`faq-${index + 1}`}>
              <AccordionTrigger className="min-h-12 py-3 text-left text-[12px] font-semibold hover:no-underline">{question}</AccordionTrigger>
              <AccordionContent className="pb-4 text-[11px] leading-5 text-black/58">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
    </section>
  );
}

function StickyMobileCta({ content, proofSeen, visible }: { content: IconAgencyTemplateContent; proofSeen: boolean; visible: boolean }) {
  return (
    <div className={`safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[#f8f8f6]/96 px-3 pt-2 shadow-[0_-10px_30px_rgba(2,26,32,0.12)] backdrop-blur transition duration-300 lg:hidden ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"}`}>
      {proofSeen ? <p className="mx-auto mb-1 max-w-[430px] text-center text-[9px] font-semibold text-[#831f80]">First batch paid after approval</p> : null}
      <div className="mx-auto grid max-w-[430px] grid-cols-[1.25fr_.75fr] gap-2">
        <StartDialogButton
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#831f80] via-[#26259d] to-[#0a6d86] px-3 text-[12px] font-semibold text-white"
          content={content.dialogs.start}
          icon={false}
          label={content.hero.primaryCta}
          tracking="sticky_primary_cta"
        />
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-black/12 bg-white px-2 text-center text-[11px] font-semibold leading-4"
          href="/formats"
          onClick={() => trackEvent("cta_click", { path: "sticky_see_examples" })}
        >
          See Example Ads
        </a>
      </div>
    </div>
  );
}

const homepageProcessSteps = [
  {
    title: "Connect AppLovin",
    description: "Connect your AppLovin account and [APPROVED ASSET SOURCE(S)].",
  },
  {
    title: "Review winners",
    description: "Review winning ads, [ACCOUNT DATA] and approved assets.",
  },
  {
    title: "Approve ads",
    description: "Accept creative briefs and review AI-edited drafts.",
  },
  {
    title: "Launch",
    description: "Launch approved ads into [APPLOVIN DESTINATION].",
  },
] as const;

function CredibilityPair() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2.5">
      <StoryCard />
      <InvestorCard />
    </div>
  );
}

function AboveFoldModules({ content, variant }: { content: IconAgencyTemplateContent; variant: string }) {
  if (variant === "customer-branch") {
    return <><HeroActions content={content} /><CustomerLogoStrip content={content} /><CreativePreviewGrid content={content} /><CredibilityPair /></>;
  }

  if (variant === "customer-jones-road") {
    return <><CustomerLogoStrip content={content} /><HeroActions content={content} /><CredibilityPair /><CreativePreviewGrid content={content} /></>;
  }

  if (variant === "customer-once-upon-a-farm") {
    return <><HeroActions content={content} /><CustomerLogoStrip content={content} /><WorkflowStrip /><CreativePreviewGrid content={content} /><CredibilityPair /></>;
  }

  if (variant === "customer-david-protein") {
    return <><CustomerLogoStrip content={content} /><HeroActions content={content} /><CreativePreviewGrid content={content} /><div className="mt-3"><StoryCard wide /></div><div className="mt-3"><InvestorCard wide /></div></>;
  }

  if (variant === "customer-fast-growing-trees") {
    return <><HeroActions content={content} /><CustomerLogoStrip content={content} /><BackedByStrip /><CreativePreviewGrid content={content} /><div className="mt-3"><StoryCard wide /></div></>;
  }

  if (variant === "pain-led") {
    return (
      <>
        <div className="mt-4"><StoryCard wide /></div>
        <HeroActions content={content} />
        <CustomerLogoStrip content={content} />
        <CreativePreviewGrid content={content} />
        <div className="mt-4"><InvestorCard wide /></div>
      </>
    );
  }

  if (variant === "outcome-led") {
    return (
      <>
        <BackedByStrip />
        <HeroActions content={content} />
        <CustomerLogoStrip content={content} />
        <CreativePreviewGrid content={content} />
        <CredibilityPair />
      </>
    );
  }

  if (variant === "workflow-led") {
    return (
      <>
        <HeroActions content={content} />
        <WorkflowStrip />
        <CustomerLogoStrip content={content} />
        <CreativePreviewGrid content={content} />
        <CredibilityPair />
      </>
    );
  }

  if (variant === "proof-led") {
    return (
      <>
        <BackedByStrip />
        <HeroActions content={content} />
        <CustomerLogoStrip content={content} />
        <CredibilityPair />
        <CreativePreviewGrid content={content} />
      </>
    );
  }

  return (
    <>
      <HeroActions content={content} />
      <CustomerLogoStrip content={content} />
      <CreativePreviewGrid content={content} />
      <CredibilityPair />
    </>
  );
}

export function IconAgencyMobileTemplate({
  content,
  variant = "product-led",
  screenshotOnly = false,
}: {
  content: IconAgencyTemplateContent;
  variant?: string;
  screenshotOnly?: boolean;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const [heroExited, setHeroExited] = useState(false);
  const [proofSeen, setProofSeen] = useState(false);
  const [campaignContext, setCampaignContext] = useState<{ campaign?: string; content?: string }>({});

  useEffect(() => {
    if (screenshotOnly) return;
    const params = new URLSearchParams(window.location.search);
    const campaign = params.get("utm_campaign") ?? undefined;
    const campaignContent = params.get("utm_content") ?? undefined;
    const campaignTimer = window.setTimeout(() => setCampaignContext({ campaign, content: campaignContent }), 0);
    trackEvent("variant_exposure", {
      variant,
      version: "1.3",
      winning_criterion: "qualified_conversion_rate",
      utm_campaign: campaign,
      utm_content: campaignContent,
    });
    if (campaign || campaignContent) trackEvent("campaign_message_match", { variant, campaign, content: campaignContent });

    const seen = new Set<number>();
    const thresholds = [25, 50, 75];
    const trackScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const percentage = Math.round((window.scrollY / available) * 100);
      thresholds.forEach((threshold) => {
        if (percentage >= threshold && !seen.has(threshold)) {
          seen.add(threshold);
          trackEvent("scroll_depth", { threshold, variant, version: "1.3" });
        }
      });
    };
    const qualifiedLead = (event: Event) => {
      const detail = event instanceof CustomEvent ? event.detail : {};
      trackEvent("qualified_lead_completion", { variant, version: "1.3", ...detail });
    };
    window.addEventListener("scroll", trackScroll, { passive: true });
    window.addEventListener("upscale:qualified-lead", qualifiedLead);
    trackScroll();
    return () => {
      window.clearTimeout(campaignTimer);
      window.removeEventListener("scroll", trackScroll);
      window.removeEventListener("upscale:qualified-lead", qualifiedLead);
    };
  }, [screenshotOnly, variant]);

  useEffect(() => {
    if (screenshotOnly || !heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroExited(!entry.isIntersecting && entry.boundingClientRect.bottom < 0),
      { threshold: 0 },
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [screenshotOnly]);

  useEffect(() => {
    if (screenshotOnly) return;
    const targets = [
      ["proof", "proof_view"],
      ["offer", "pricing_view"],
      ["case-study", "case_study_view"],
      ["fit", "fit_view"],
    ] as const;
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || seen.has(entry.target.id)) return;
          seen.add(entry.target.id);
          const match = targets.find(([id]) => id === entry.target.id);
          if (match) trackEvent(match[1], { variant, version: "1.3" });
          if (entry.target.id === "proof") setProofSeen(true);
        });
      },
      { threshold: 0.35 },
    );
    targets.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [screenshotOnly, variant]);

  return (
    <main className={`min-h-screen overflow-x-hidden ${screenshotOnly ? "" : "pb-20 lg:pb-0"}`} data-variant={variant} data-version="1.3" data-winning-criterion="qualified_conversion_rate">
      <p className="sr-only">{content.templateNotice}</p>

      <header className="relative z-40 bg-transparent">
        <div className="mx-auto flex h-[68px] max-w-[430px] items-center justify-between px-4">
          <a className="flex min-w-0 items-center" href="#top" aria-label={`${content.brand.name} home`}>
            <BrandWordmark />
          </a>
          <MobileMenuButton />
        </div>
      </header>

      <section className="section-anchor relative mx-auto max-w-[430px] px-4 pb-7" id="top" ref={heroRef}>
        <div className="relative z-10">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#831f80]">{content.hero.eyebrow}</p>
          <h1 className="max-w-full text-[38px] font-medium leading-[0.98] tracking-[-0.05em]">
            {content.hero.headline}
          </h1>
          {content.hero.subheadline ? (
            <p className="mt-3 max-w-full text-[16px] font-normal leading-[1.3] tracking-[-0.025em] text-black">
              {content.hero.subheadline}
            </p>
          ) : null}
          <p className="mt-2.5 max-w-full text-[13px] font-normal leading-[1.38] tracking-[-0.012em] text-black/82">{content.hero.description}</p>
          {content.hero.positioningLine ? (
            <p className="mt-2 max-w-full text-[13px] font-normal leading-[1.38] tracking-[-0.012em] text-black/82">
              {content.hero.positioningLine}
            </p>
          ) : null}
          {content.hero.angleLine ? (
            <p className="mt-3 inline-flex rounded-full border border-[#831f80]/18 bg-[#fbf6fb] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#831f80]">
              {content.hero.angleLine}
            </p>
          ) : null}

          {campaignContext.campaign || campaignContext.content ? (
            <p className="mt-3 rounded-xl border border-[#831f80]/16 bg-[#fbf6fb] px-3 py-2 text-[9px] font-semibold leading-4 text-[#831f80]">
              Matched to {campaignContext.campaign ?? "[CAMPAIGN]"}{campaignContext.content ? ` · ${campaignContext.content}` : ""}
            </p>
          ) : null}

          <HeroProofBar content={content} />
          <AboveFoldModules content={content} variant={variant} />
        </div>
      </section>

      {!screenshotOnly ? (
        <>

      <OfferProofTrustModules />
      <V13DecisionModules />

      <section className="section-anchor mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20" id="formats">
        <SectionIntro eyebrow={content.formats.eyebrow} title={content.formats.title} description={content.formats.description} />
        <div className="hide-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:mt-9 sm:gap-3 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
          {content.formats.items.map((format, index) => (
            <article
              className={`relative flex min-h-[25rem] w-[78vw] max-w-[320px] shrink-0 snap-center flex-col overflow-hidden rounded-[1.45rem] border border-black/10 sm:min-h-[29rem] sm:w-[82vw] sm:max-w-[340px] sm:rounded-[1.75rem] ${format.tone} lg:w-auto`}
              key={format.name}
            >
              {format.image ? (
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <img alt="" className="h-full w-full object-cover" loading="lazy" src={format.image} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/42" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em]">Source clip</span>
                </div>
              ) : (
                <div className="grid h-48 place-items-center border-b border-black/10 px-6 text-center sm:h-56">
                  {index === 2 ? <MessageCircle className="size-16 stroke-[1.3]" aria-hidden="true" /> : <Sparkles className="size-16 stroke-[1.3]" aria-hidden="true" />}
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-black/42">Format {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-xl font-black tracking-[-0.035em] sm:text-2xl">{format.name}</h3>
                <p className="mt-5 rounded-2xl border border-black/10 bg-white/45 p-4 text-[15px] font-bold leading-6">“{format.hook}”</p>
                <p className="mt-auto pt-5 text-sm leading-6 text-black/58">{format.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-anchor border-y border-black/10 bg-[#f3f2f1] py-8 text-black sm:py-10" id="process">
        <div className="mx-auto max-w-[430px] px-4">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/42">{content.process.eyebrow}</p>
          <div className="flex items-center gap-3">
            <h2 className="shrink-0 text-[15px] font-semibold tracking-[-0.03em]">Four steps to launch</h2>
            <span className="h-px flex-1 bg-black/12" aria-hidden="true" />
          </div>
          <ol className="mt-4 grid gap-2.5">
            {homepageProcessSteps.map((step, index) => (
              <li className="rounded-[1.35rem] border border-black/14 bg-white/82 p-4 shadow-[0_8px_24px_rgba(2,26,32,0.04)]" key={step.title}>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-[0.7rem] bg-black text-sm font-semibold text-white">{index + 1}</span>
                  <span className="text-[15px] font-semibold">[TIMING]</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-[1.1] tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-[1.5] text-black/78">{step.description}</p>
              </li>
            ))}
          </ol>
          <a className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[1rem] border border-black/12 bg-white px-4 text-[13px] font-semibold" href="/how-it-works">
            See the detailed seven-step plan
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="section-anchor px-4 pb-12 sm:px-6 sm:pb-20 lg:pb-24" id="final-cta">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-black px-5 py-10 text-center text-white sm:rounded-[2rem] sm:px-8 sm:py-16 lg:py-20">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#00f0ff]">{content.finalCta.eyebrow}</p>
          <h2 className="text-balance mx-auto mt-3 max-w-4xl text-[2.2rem] font-black leading-[1.02] tracking-[-0.045em] sm:mt-4 sm:text-[clamp(3rem,8vw,7rem)] sm:leading-[0.92] sm:tracking-[-0.065em]">{content.finalCta.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-7 text-white/58">{content.finalCta.description}</p>
          <div className="mx-auto mt-6 grid max-w-lg gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-2.5">
            <StartDialogButton
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00f0ff] px-5 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00f0ff]/35 sm:min-h-14 sm:rounded-2xl sm:px-6 sm:text-base"
              content={content.dialogs.start}
              label={content.finalCta.primaryCta}
              tracking="final_start_free"
            />
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/18 bg-white/8 px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/14 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/18 sm:min-h-14 sm:rounded-2xl sm:px-6 sm:text-base"
              data-track="final_see_examples"
              href="/formats"
            >
              {content.finalCta.secondaryCta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#eceff0] px-4 py-9 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5 font-black"><BrandWordmark /></div>
            <p className="mt-3 max-w-lg text-xs leading-5 text-black/46">Upscale AppLovin Creative OS demo v1.3 using Icon’s mobile landing-page structure. Every bracketed field is intentionally unresolved and must be supplied, verified, and approved before launch.</p>
          </div>
          <a className="inline-flex min-h-11 items-center gap-2 font-black" href="#top">Back to top <MousePointer2 className="size-4" aria-hidden="true" /></a>
        </div>
      </footer>

      <StickyMobileCta content={content} proofSeen={proofSeen} visible={heroExited} />

        </>
      ) : null}

    </main>
  );
}
