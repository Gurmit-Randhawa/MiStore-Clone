import styled from "styled-components";
export const BtnStyle = {
  'backgroundColor':"transparent"
}

export const Background = styled.div`
  width: 100%;
  height: 70vh;
  background-size: cover;
  display: flex ;
  justify-content: center;
  align-items: center;
  color:white;
  text-align:center;
`;  
export const InfoSection = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  padding: 5% 2% 5% 2%;
`;
export const ImageSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15% 5% 15% 5%;

`;
export const SocialIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;
export const InfoBox = styled.div`
  font-size: ${props=>props.size}
  
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button{
  width:12vw;
  height: 3.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  Border:white 2.2px solid;
  margin:20px;
  color:white;
  font-weight:900;
  font-size:12px;
  border-radius:50px;
  background-color:#ff5823;

  }
`;
export const MyImage = styled.div`
  height: 28vw;
  width: 28vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border:solid white 5px;
  border-radius:50%;
`;

export const Icons = styled.div`
  margin:7px;
`;