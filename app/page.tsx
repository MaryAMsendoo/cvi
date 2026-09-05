import AboutPreview from '@/components/AboutPreview'
import GetInvolved from '@/components/GetInvolved'
import Hero from '@/components/Hero'
import Impact from '@/components/Impact'
import LeadershipPreview from '@/components/LeadershipPreview'
import Partners from '@/components/Partners'
import ProgramSpotlight from '@/components/ProgramSpotlight'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ProgramSpotlight />
      <Impact />
      <Partners />
      <LeadershipPreview />
      <GetInvolved />
    </div>
  )
}
