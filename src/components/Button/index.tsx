import styled from 'styled-components'

type ButtonProps = {
  secundary?: boolean
  fitContent?: boolean
}

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  background-color: ${(props) => (props.secundary ? 'transparent' : '#fcb900')};
  color: ${(props) => (props.secundary ? '#fcb900' : '#16202f')};
  padding: 12px 16px;
  font-weight: bold;
  border: ${(props) => (props.secundary ? '1px solid #fcb900' : 'none')};
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  width: ${(props) => (props.fitContent ? 'fit-content' : '100%')};

  :hover {
    transform: scale(1.03);
  }
`
