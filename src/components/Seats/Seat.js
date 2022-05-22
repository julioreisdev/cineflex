import { useState } from "react";
import styled from "styled-components";

export const ids = [];

export function Seat({ seat }) {
  const [select, setSelect] = useState(false);

  function selectSeat() {
    if (!seat.isAvailable) {
      alert("Esse assento não está disponível!");
    } else if (seat.isAvailable) {
      setSelect(!select);
    }
    if (!select && seat.isAvailable === true) {
      ids.push(seat.id);
      console.log("SELECT");
    } else {
      for (let i = 0; i < ids.length; i++) {
        if (ids[i] === seat.id) {
          ids.splice(i,1);
        }
      }
    }
  }

  return (
    <Container
      onClick={selectSeat}
      color={seat.isAvailable ? "#C3CFD9" : "#FBE192"}
      bColor={seat.isAvailable ? "#808F9D" : "#F7C52B"}
    >
      <p className={select ? "selected" : ""}>{seat.name}</p>
    </Container>
  );
}

const Container = styled.div`
  p {
    margin: 0.25rem;
    font-size: 0.8rem;
    width: 25px;
    height: 25px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.bColor};
  }
`;
