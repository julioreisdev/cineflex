import Header from "../Header/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Success({ movie, date, seats, name, cpf }) {

  let navigate = useNavigate();

  function reload() {
    navigate("/");
    window.location.reload();
  }

  return (
    <Container>
      <Header />
      <h2 className="success">Pedido feito com secesso!</h2>
      <h3>Filme e sessão</h3>
      <p>{movie}</p>
      <p>{date}</p>
      <h3>Ingressos</h3>
      {seats.map((seat) => (
        <p>Assento {seat}</p>
      ))}
      <h3>Comprador</h3>
      <p>Nome: {name}</p>
      <p>CPF: {cpf}</p>
      <br />
      <VoltarHome onClick={reload}>
        <p>Voltar pra Home</p>
      </VoltarHome>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    margin: 0.2rem 0;
  }
`;

const VoltarHome = styled.p`
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 1rem;
    border-radius: 3px;
    background-color: #e8833a;
  }
`;
