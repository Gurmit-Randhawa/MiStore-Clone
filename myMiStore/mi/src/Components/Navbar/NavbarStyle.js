import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  margin: auto;
  margin-top:-10px;
  display: grid;
  grid-template-rows:auto auto auto auto auto auto ;
  justify-content: space-around;
  text-align:center;
  align-items: center;
  /* background-color:darkgray; */

`;

export const HeaderMenu = styled.a`
    padding-top:35px;
    width: 100vw;
    height:100%;
    text-decoration: none;
    color:white;
    font-weight:800;
    font-size:16px;
    &:hover{
      background-color:rgb(252, 250, 250,.4);
    }
    transition: .5s ease-in all;


`;
export const HeaderLogo = styled.div`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-weight:900;
    &:hover{
      background-color:rgb(252, 250, 250,.4);
    }
`;