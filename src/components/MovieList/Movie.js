import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ url, title, id }) {
  return (
    <Link className="linkFilme" to={`/filme/${id}`}>
      <MovieImg src={url} alt={title} />
    </Link>
  );
}

const MovieImg = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 3px;
  box-shadow: 0 0 5px gray;
`;
