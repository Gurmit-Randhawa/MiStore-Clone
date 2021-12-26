import styled from "styled-components";

export const BtnStyle = {
    'backgroundColor':"#192a56"
  }

export const AboutMeBox = styled.div`
     width:75%;
    height:55vh;
    border:black solid 2px;
    box-shadow: black 5px 5px 15px ;
    margin:50px auto ;
    display: flex;
    justify-content: center;
    align-items: center;
    color:rgba(0, 0, 0, 0.762);
    font-size:15px;
`
export const Left = styled.div`
    height:100%;
    width: 50%;
    overflow:hidden;
    position:relative;
    display: none;
`
export const MyImage = styled.div`
  
`
export const Right = styled.div`
    height:100%;
    width: 100%;


  
`
export const Paragraph = styled.div`
  padding:28px;
  text-align:justify;
`
export const KeyFeatureList = styled.div`
    
        padding:6px 38px;
    
  
`
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