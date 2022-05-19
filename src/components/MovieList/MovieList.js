import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Movie from "./Movie";

export function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then(function (response) {
      setMovies(response.data);
    });
  }, []);

  return (
    <>
      <TitleSection>Selecione o filme</TitleSection>
      <Container>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            url={movie.posterURL}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </Container>
    </>
  );
}

const TitleSection = styled.h2`
  font-size: 1.5rem;
  margin-top: 100px;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  word-wrap: break-word;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
