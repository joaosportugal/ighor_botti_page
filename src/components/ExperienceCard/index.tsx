import styled from 'styled-components'

type ExperienceCardProps = {
  principal?: boolean
}

export const ExperienceCard = styled.div<ExperienceCardProps>`
  border: ${(props) => (props.principal ? '1px solid' : '1px dashed')};
  border-radius: 4px 16px 4px 4px;
  color: #fcb900;
  max-width: 200px;
  width: 100%;
  height: 140px;
  background-color: transparent;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
