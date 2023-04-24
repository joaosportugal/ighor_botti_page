import styled from 'styled-components'

export const HeroSection = styled.section`
  background-color: #0f0f0f;
  padding: 64px 0;
  max-width: 100vw;
  width: 100%;

  .hero {
    display: flex;
    height: calc(70vh);
    justify-content: space-evenly;
    align-items: center;
    gap: 64px;
    color: #fff;
    width: 100%;

    &__img {
      max-width: 420px;
      width: 100%;
      border: 2px solid #fcb900;
    }

    &__text {
      margin-bottom: 32px;

      &__title {
        font-size: 52px;
        color: #fcb900;
      }

      &__subtitle {
        font-weight: 400;
        font-size: 32px;
      }
    }

    &__buttons {
      display: flex;
      gap: 16px;
    }

    &__content {
      display: block;
    }
  }
`
