"use client"

import Image from "next/image"
import Link from "next/link"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { SiteNav } from "@/components/site-nav"

type WorkProject = {
  pillName: string
  year: string
  tagline: string
  meta: string
  coverImage?: string
  coverAlt?: string
  /** 0–1, applied when `coverImage` is set; defaults to 0.9 */
  coverOpacity?: number
}

const projects: WorkProject[] = [
  {
    pillName: "BruinPlace",
    year: "2026",
    tagline: "A housing marketplace experience tailored for students to find, compare, and secure college housing.",
    meta: "BRUINPLACE • UCLA • 2026",
    coverImage: "/projects/bruinplace.png",
    coverAlt: "BruinPlace on a MacBook — listings, map, and search for student housing near UCLA",
    coverOpacity: 0.9,
  },
  {
    pillName: "Comet",
    year: "2025",
    tagline: "An academic social network for collaboration, discovery, and knowledge sharing around research and learning.",
    meta: "COMET • PERPLEXITY AI • 2025",
    coverImage: "/projects/comet-perplexity.png",
    coverAlt: "Comet by Perplexity — tablet UI with search and feature cards",
  },
  {
    pillName: "MAKE",
    year: "2025",
    tagline: "A goal-based personal finance product to plan, track, and act on financial milestones with confidence.",
    meta: "MAKE • BCG • 2025",
    coverImage: "/projects/make-bcg.png",
    coverAlt:
      "MAKE — three phones with Insights, Bills, and Organize Cloud Pocket on a pastel gradient with illustrated clouds",
    coverOpacity: 0.9,
  },
]

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-24 text-foreground md:px-12 lg:px-16">
      <CustomCursor />
      <GrainOverlay />
      <SiteNav />
      <div className="fixed inset-0 z-0">
        <Shader className="h-full w-full">
          <Swirl
            colorA="#4E7DAA"
            colorB="#F2363E"
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#CEF889"
            upColor="#F2363E"
            downColor="#CEF889"
            leftColor="#4E7DAA"
            rightColor="#F9F9E2"
            intensity={0.9}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-3 font-mono text-xs text-foreground/60 md:text-sm">/ Work</p>
        <h1 className="mb-10 font-sans text-4xl font-light tracking-tight md:mb-14 md:text-6xl">Selected projects</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-10 lg:gap-y-14">
          {projects.map((project) => (
            <article key={project.pillName} className="group">
              <div className="origin-top overflow-hidden rounded-3xl shadow-[0_16px_32px_-8px_rgba(0,0,0,0.28)] ring-1 ring-foreground/10 transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]">
                <div className="relative aspect-[16/10] bg-foreground/[0.05] ring-1 ring-inset ring-foreground/10">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.coverAlt ?? `${project.pillName} project preview`}
                      fill
                      className="object-cover"
                      style={{ opacity: project.coverOpacity ?? 0.9 }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : null}
                  <div className="pointer-events-none absolute right-5 top-5 z-10 md:right-6 md:top-6">
                    <div className="rounded-full bg-white px-4 py-2 font-mono text-xs text-neutral-950 shadow-sm md:px-5 md:py-2.5 md:text-sm">
                      <span className="font-semibold">{project.pillName}</span>
                      <span className="text-neutral-500">{" \u2022 "}</span>
                      <span className="font-normal text-neutral-500">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-6 md:mt-5">
                <p className="max-w-[min(100%,28rem)] font-mono text-xs leading-relaxed text-foreground/70 md:text-sm">
                  {project.tagline}
                </p>
                <p className="shrink-0 max-w-[45%] text-right font-mono text-xs leading-relaxed text-foreground/70 md:text-sm">
                  {project.meta}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/"
          className="mt-12 inline-block font-mono text-xs text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline md:mt-16 md:text-sm"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
