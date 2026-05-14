"use client"

import Link from "next/link"
import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 mt-12 transition-all duration-700 md:mb-10 md:mt-16 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 mt-4 font-sans text-5xl font-light tracking-tight text-foreground md:mt-6 md:text-6xl lg:text-7xl">
            Featured
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Recent explorations</p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {[
            {
              number: "01",
              title: "BruinPlace - UCLA",
              category: "College Housing Marketplace",
              year: "2026",
              direction: "left",
              logo: "/project-logos/ucla.png",
              logoAlt: "UCLA logo",
              logoWidth: 72,
              logoHeight: 21,
            },
            {
              number: "02",
              title: "Comet - Perplexity AI",
              category: "Academic Social Network",
              year: "2025",
              direction: "right",
              logo: "/project-logos/perplexity.png",
              logoAlt: "Perplexity logo",
              logoWidth: 104,
              logoHeight: 20,
            },
            {
              number: "03",
              title: "MAKE - Boston Consulting Group",
              category: "Goal-Personal Finance Platform",
              year: "2025",
              direction: "left",
              logo: "/project-logos/bcg.png",
              logoAlt: "Boston Consulting Group logo",
              logoWidth: 68,
              logoHeight: 19,
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
        <div className="mt-3 md:mt-4">
          <Link
            href="/work"
            className="font-mono text-xs text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline md:text-sm"
          >
            See more
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: {
    number: string
    title: string
    category: string
    year: string
    direction: string
    logo: string
    logoAlt: string
    logoWidth: number
    logoHeight: number
  }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return project.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:py-5 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? "0" : "auto",
        maxWidth: index % 2 === 0 ? "85%" : "90%",
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-4">
        <Image
          src={project.logo}
          alt={project.logoAlt}
          width={project.logoWidth}
          height={project.logoHeight}
          className={
            project.logo.includes("ucla")
              ? "h-[2.390625rem] w-auto object-contain opacity-95 md:h-[2.86875rem]"
              : project.logo.includes("perplexity") || project.logo.includes("bcg")
                ? "h-[1.9921875rem] w-auto object-contain opacity-95 md:h-[2.390625rem]"
                : "h-[1.59375rem] w-auto object-contain opacity-95 md:h-[1.9125rem]"
          }
        />
        <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
      </div>
    </div>
  )
}
