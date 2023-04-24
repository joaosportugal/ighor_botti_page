import React from 'react'

import { ExperienceSection, CardsGrid } from './styles'
import { ExperienceCard } from '../../components/ExperienceCard'

function Experience() {
  return (
    <ExperienceSection>
      <div className="container">
        <CardsGrid>
          <ExperienceCard>
            <h3 className="card_title">02</h3>
            <h4 className="card_subtitle">Prêmios</h4>
          </ExperienceCard>
          <ExperienceCard principal>
            <h3 className="card_title">+50</h3>
            <h4 className="card_subtitle">Clientes</h4>
          </ExperienceCard>
          <ExperienceCard>
            <h3 className="card_title">15</h3>
            <h4 className="card_subtitle">
              Anos <br /> Experiência
            </h4>
          </ExperienceCard>
          <ExperienceCard>
            <h3 className="card_title">+80</h3>
            <h4 className="card_subtitle">Projetos</h4>
          </ExperienceCard>
        </CardsGrid>
      </div>
    </ExperienceSection>
  )
}

export default Experience
