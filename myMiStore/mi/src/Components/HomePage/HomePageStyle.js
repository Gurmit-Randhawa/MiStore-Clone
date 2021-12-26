import styled from "styled-components";
export const BtnStyle = {
  'backgroundColor':"transparent"
}

export const Background = styled.div`
  width: 100%;
  height: 80vh;
  background-size: cover;
  display: flex ;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  color:white;
  text-align:center;

`;  
export const InfoSection = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  padding: 5% 2% 5% 2%;

`;
export const ImageSection = styled.div`
  width: 50%;
  height: 65%;
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
  width:150px;
  height:40px;
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
  transition: .5s ease-out;

  }
`;
export const MyImage = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border:solid white 5px;
  overflow:hidden;
`;

export const Icons = styled.div`
  margin:7px;
`;