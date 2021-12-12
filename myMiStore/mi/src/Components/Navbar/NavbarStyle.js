import styled from "styled-components";

export const Header = styled.div`
  width: 70%;
  height: 150px;
  margin: auto;
  display: grid;
  grid-template-columns:20% auto auto auto auto auto ;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderMenu = styled.a`
    text-decoration: none;
    color:white;
    font-weight:800;
    font-size:16px;
`;
export const HeaderLogo = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
`;