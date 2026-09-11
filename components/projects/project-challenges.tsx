"use client"

import { FadeIn } from "@/components/ui/motion"
import type { ProjectChallenge } from "@/lib/types"

export function ProjectChallenges({
  challenges,
}: {
  challenges: ProjectChallenge[]
}) {
  if (!challenges.length) return null

  return (
    <FadeIn>
      <article>
        <h2 className="heading-lg mb-6 text-primary">Défis & solutions</h2>
        <div className="space-y-4">
          {challenges.map((item) => (
            <div key={item.challenge} className="space-y-4">
              <div className="rounded-r-xl border-l-2 border-primary/40 bg-accent/50 p-6">
                <strong className="block text-foreground">
                  Le défi : {item.challenge}
                </strong>
                <p className="body-md mt-2">{item.challengeDetail}</p>
              </div>
              <div className="rounded-r-xl border-l-2 border-secondary-bright/40 bg-accent/50 p-6">
                <strong className="block text-foreground">
                  La solution : {item.solution}
                </strong>
                <p className="body-md mt-2">{item.solutionDetail}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </FadeIn>
  )
}
