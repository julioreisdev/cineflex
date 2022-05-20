import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DaysMovie from "./DaysMovie";
import Footer from "../Footer/Footer";

export default function MovieTime() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [promiseDone, setPromiseDone] = useState(false);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
    );
    promise.then(function (response) {
      setMovie(response.data);
      setPromiseDone(true);
    });
  }, []);

  return (
    <Container>
      <h2>Selecione o horário</h2>
      <DaysMovie days={movie.days} promiseDone={promiseDone} />
      <Footer url={movie.posterURL} title={movie.title} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 70px;
  margin-bottom: 100px;
`;
