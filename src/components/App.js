import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./MovieList/MovieList";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Header from "./Header/Header";
import MovieTime from "./Movie/MovieTime";
import Seats from "./Seats/Seats";
import Success from "./Success/Success";
import { useState } from "react";
import { names } from "./Seats/Seat";

export default function App() {

  const [movie, setMovie] = useState();
  const [date, setDate] = useState();
  const [namesSeats, setNamesSeats] = useState(names);
  const [namePerson, setNamePerson] = useState();
  const [cpfPerson, setCpfPerson] = useState();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/filme/:id" element={<MovieTime />} />
        <Route path="/assentos/:idSection" element={<Seats setNamePerson={setNamePerson} setCpfPerson={setCpfPerson} setMovie={setMovie} setDate={setDate} />} />
        <Route path="/sucesso" element={<Success name={namePerson} cpf={cpfPerson} movie={movie} date={date} seats={namesSeats} />} />
      </Routes>
    </BrowserRouter>
  );
}
