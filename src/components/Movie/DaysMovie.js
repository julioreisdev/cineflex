import { useState } from "react";
import MovieSection from "./MovieSection";
import styled from 'styled-components';

export default function DaysMovie({days, promiseDone}) {

  return (
    <Container>
      {promiseDone ?
      days.map((d) => <MovieSection key={d.id} weekday={d.weekday} date={d.date} showtimes={d.showtimes}  />)
      : "CARREGANDO..."}
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem 1rem 1rem 1rem;
`;