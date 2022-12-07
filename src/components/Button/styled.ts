import styled from 'styled-components';

interface Props{
  primary?: boolean
}

export const Button = styled.button`
  color: white;
  padding: 12px 24px;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  margin: 16px 0px;
  border: 1px solid ${(props :Props) => (props.primary ? "#FF1493" : "#00008B")};
  background-color: ${(props: Props) => (props.primary ? "#FF1493" : "#00008B")};

  &:hover,
  &:focus{
    border: 1px solid ${(props: Props) => (props.primary ? "#FF69B4" : "#0000CD")};
    background-color: ${(props: Props) => (props.primary ? "#FF69B4" : "#0000CD")};
  }

  svg{
    margin-right: 16px;
  }
`

export const ButtonOutLine = styled(Button)`
  color: ${(props: Props) => (props.primary ? "#FF1493" : "#00008B")};
  background: transparent;
  border: 1px solid ${(props: Props) => (props.primary ? "#FF1493" : "#00008B")};
`