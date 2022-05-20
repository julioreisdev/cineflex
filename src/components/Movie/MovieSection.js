import styled from "styled-components";
import Time from "./Time";

export default function MovieSection({weekday, date, showtimes}) {
  return (
    <Section>
      <Date>{`${weekday} - ${date}`}</Date>
      <Time showtimes={showtimes} />
    </Section>
  );
}

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Date = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;