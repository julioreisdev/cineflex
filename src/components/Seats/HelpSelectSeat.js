import styled from "styled-components";

export function HelpSelectSeat() {
  return (
    <Container>
      <Option color="#8DD7CF" bColor="#1AAE9E">
        <div></div>
        <p>Selecionado</p>
      </Option>
      <Option color="#C3CFD9" bColor="#808F9D">
        <div></div>
        <p>Disponível</p>
      </Option>
      <Option color="#FBE192" bColor="#F7C52B">
        <div></div>
        <p>Indisponível</p>
      </Option>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 25px;
    margin-bottom: 0.2rem;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.bColor};
  }

  p {
    color: #333;
  }
`;
