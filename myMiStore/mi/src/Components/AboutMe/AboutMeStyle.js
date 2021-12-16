import styled from "styled-components";

export const BtnStyle = {
    'backgroundColor':"#192a56"
  }

export const AboutMeBox = styled.div`
     width:65%;
    height:90vh;
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
`
export const MyImage = styled.div`
  
`
export const Right = styled.div`
    height:100%;
    width: 50%;


  
`
export const Paragraph = styled.div`
  padding:28px;
  text-align:justify;
`
export const KeyFeatureList = styled.div`
    
        padding:26px 38px;
    
  
`
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