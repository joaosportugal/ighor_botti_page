import styled from 'styled-components'

import mentor from '../../assets/images/photo1.png'

export const AboutSection = styled.section`
  .section_content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin: 0 auto;
    height: 70vh;
  }

  .text_content {
    color: #16202f;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    height: 80%;
    gap: 16px;
  }

  .about_picture {
    max-width: 500px;
    width: 100%;
    height: 80%;
    background-image: url(${mentor});
    background-size: contain;
    background-repeat: no-repeat;
  }
`
