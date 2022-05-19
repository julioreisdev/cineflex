import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer className="Header">
      <h1>CINEFLEX</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background-color: #c3cfd9;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2.5rem;
      color: #e8833a;
    }
`;
