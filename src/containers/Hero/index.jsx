import React from 'react'
import { HeroSection } from './styles'
import { Button } from '../../components/Button'

import heroPicture from '../../assets/images/hero.png'

function Hero() {
  return (
    <HeroSection>
      <div className="container">
        <div className="hero">
          <img src={heroPicture} alt="ighor botti" className="hero__img" />
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__text__title">IGHOR BOTTI</h1>
              <h2 className="hero__text__subtitle">
                Inspirando transformações através <br /> de conhecimento e
                experiência
              </h2>
              <p className="textHero__description"></p>
            </div>
            <div className="hero__buttons">
              <Button fitContent>Conhecer Serviços</Button>
              <Button fitContent secundary>
                Entrar em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default Hero
