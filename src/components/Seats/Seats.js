import styled from "styled-components";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Seat } from "./Seat";
import { HelpSelectSeat } from "./HelpSelectSeat";
import FormSeats from "../Forms/FormSeats";

function TitleSection({title, time}) {
  return (
    <TitleFooter>
      <p>{title}</p>
      <p>{time}</p>
    </TitleFooter>
  );
}

const filmSection = `a\nb`;

export default function Seats( {setMovie, setDate, setNamePerson, setCpfPerson} ) {
  const { idSection } = useParams();
  const [image, setImage] = useState();
  const [titleMovie, setTitleMovie] = useState();
  const [dateMovieSection, setDateMovieSection] = useState();
  const [seats, setSeats] = useState([]);
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
    promise.then(function (response) {
      setImage(response.data.movie.posterURL);
      setTitleMovie(response.data.movie.title);
      setDateMovieSection(`${response.data.day.weekday} - ${response.data.name}`);
      setSeats(response.data.seats);
      setDateTime(`${response.data.day.date} - ${response.data.name}`);
    });
  }, []);

  return (
    <Container>
      <h2>Selecione o(s) assento(s)</h2>
      <SeatsFlex>{seats.map((seat) => <Seat seat={seat} />)}</SeatsFlex>
      <HelpSelectSeat />
      <FormSeats setNamePerson={setNamePerson} setCpfPerson={setCpfPerson} />
      <Footer url={image} title={<TitleSection title={titleMovie} time={dateMovieSection} />} />
      {setMovie(titleMovie)}
      {setDate(dateTime)}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 80px;
`;
const TitleFooter = styled.div`
  p:first-child {
    font-size: 1.3rem;
  }
  p:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const SeatsFlex = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
