import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Time ({showtimes}) {
  return (
    <Times>
      {showtimes.map((d) => <Link to={`/assentos/${d.id}`} className='linkSection'><OneTime>{d.name}</OneTime></Link>)}
    </Times>
  );
}

const Times = styled.div`
display: flex;
`;

const OneTime = styled.div`
  background-color: #E8833A;
  color: #fff;
  padding: 0.5rem;
  border-radius: 3px;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;