import React from 'react'

import { AboutSection } from './styles'
import { Title } from '../../components/Title'
import { Subtitle } from '../../components/Subtitle'
import { Button } from '../../components/Button'

function About() {
  return (
    <AboutSection>
      <div className="section_content container">
        <div className="about_picture"></div>
        <div className="text_content">
          <Title>
            Sobre <strong>Ighor Botti</strong>
          </Title>
          <Subtitle>
            Apresentador de TV renomado, autor, escritor, mentor, palestrante,
            professor e consultor empresarial.
          </Subtitle>
          <p>
            Nascido no dia 16 de janeiro de 1988, em Vitória – Espírito Santo,
            Ighor Botti de Souza concluiu o ensino médio nos Estados Unidos e se
            formou em Relações Internacionais. Depois, fez uma segunda graduação
            em Letras Português e Inglês, e uma terceira em Administração.
            Também concluiu duas pós-graduações em Gestão Educacional e em
            Gestão Estratégica de Negócios. O autor e escritor fala cinco
            idiomas e conhece mais de 50 países. Após atuar por mais de 15 anos
            na área da educação, o autor e escritor decidiu lançar sua primeira
            obra literária.
          </p>
          <Button fitContent>Leia Mais</Button>
        </div>
      </div>
    </AboutSection>
  )
}

export default About
