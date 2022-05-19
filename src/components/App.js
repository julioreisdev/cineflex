import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieList } from "./MovieList/MovieList";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Header from "./Header/Header";
import MovieTime from "./Movie/MovieTime";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/filme/:id" element={<MovieTime />} />
      </Routes>
    </BrowserRouter>
  );
}
