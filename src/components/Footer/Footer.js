import styled from 'styled-components';

export default function Footer ({url, title}) {
  return (
    <Container>
      <img src={url} alt={title} />
      <p>{title}</p>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  position:  fixed;
  bottom: 0;
  padding: 1rem;
  background-color: #DFE6ED;
  box-shadow: inset 0 1px 1px #ccc;
  display: flex;
  align-items: center;
  img {
    width: 60px;
    padding: 0.3rem;
    background-color: #fff;
    margin-right: 0.5rem;
  }
`;