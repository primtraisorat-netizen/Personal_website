"use client"

import Link from "next/link"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { SiteNav } from "@/components/site-nav"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 pb-24 pt-32 text-foreground md:px-12 md:pb-28 md:pt-40 lg:px-16 lg:pt-44">
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
        <p className="mb-3 font-mono text-xs text-foreground/60 md:text-sm">/ About</p>
        <h1 className="mb-8 font-sans text-4xl font-light tracking-tight md:mb-12 md:text-6xl">How I work</h1>

        <div className="space-y-6 text-sm leading-relaxed text-foreground/85 md:space-y-8 md:text-base">
          <p>
            I work across product strategy, visual design, and growth execution. My process starts with understanding
            users and business goals, then translating that into clear product direction.
          </p>
          <p>
            From concept to launch, I build with iteration in mind: prototype early, validate quickly, and refine with
            measurable outcomes.
          </p>
          <p>
            I care about products that feel distinct, communicate clearly, and create long-term value for both teams
            and customers.
          </p>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block font-mono text-xs text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline md:mt-12 md:text-sm"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
