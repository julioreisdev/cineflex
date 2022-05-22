import styled from "styled-components";
import { useEffect, useState } from "react";
import cpfValid from "./cpfValid";
import { ids } from "../Seats/Seat";
import axios from "axios";

export default function FormSeats() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [invalid, setInvalid] = useState("");
  const [requested, setRequested] = useState({});

  function add() {
    setRequested({
      ids: ids,
      name: nome,
      cpf: cpf,
    });
  }

  function submit(e) {
    e.preventDefault();
    if (!cpfValid(cpf)) {
      setInvalid("invalid");
      alert("CPF INVÁLIDO!");
      setCpf("");
    } else if (ids.length === 0) {
      alert("SELECIONE UM ASSENTO!");
    } else {
      setRequested({
        ids: ids,
        name: nome,
        cpf: cpf,
      });
      const promise = axios.post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        requested
      );
      promise.then(function (response) {
        console.log(response);
      });
    }
  }

  return (
    <Container>
      <form onSubmit={(e) => submit(e)}>
        <label>Nome do comprador:</label>
        <input
          type="text"
          placeholder="Digite seu nome..."
          required
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <label>CPF do comprador:</label>
        <input
          className={invalid}
          type="text"
          placeholder="Digite seu CPF..."
          required
          onChange={(e) => {
            if (cpf.length === 2 || cpf.length === 6) {
              setCpf(e.target.value + ".");
            } else if (cpf.length === 10) {
              setCpf(e.target.value + "-");
            } else {
              setCpf(e.target.value);
            }
          }}
          value={cpf}
        />
        <button onClick={add} type="submit">
          Reservar assento(s)
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;

  label {
    display: block !important;
    margin: 0.5rem 0;
    color: #333;
  }

  input {
    width: 80%;
    padding: 0.2rem;
    font-size: 1.1rem;
  }

  button {
    background-color: #e8833a;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: bold;
    width: 50%;
    height: 30px;
    margin: 0.8rem 25% 0 25%;
  }
`;
