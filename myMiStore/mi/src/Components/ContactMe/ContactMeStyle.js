import styled from "styled-components";


export const ContactMeBox = styled.div`
  width: 80%;
  height: 70vh;
  box-shadow: black 5px 5px 10px;
  margin: 40px auto;
  border-radius: 20px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-item: center;
  border: black solid 2px;
  background-color:rgb(7, 25, 46);

`;
export const TopBar = styled.div`
  grid-area: 1/1/2/4;
  height: 120px;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto Slab", serif;
  font-family: "Urbanist", sans-serif;
  font-size:35px;
  letter-spacing:2px;
  font-weight:900;
  color:white;
  padding:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Left = styled.div`
  width: 39.5vw;
  height: 65vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  display:none;
`;
export const Right = styled.div`
  width: 80vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-item:center
  
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width:93%;
    height:93%;
    border-radius:10px;
    background-color: rgba(211, 211, 211, 0.871);
    margin:auto;
    padding:10px;
`
export const LabelBox = styled.label`
    text-align:left;
    width: 95%;
    font-size:16px;
    letter-spacing:5px;
`
export const InputBox = styled.input`
    width: 95%;
    margin-bottom:10px;
    height:45px;
    border-radius:10px;
    background-color: lightgray;
    border:none;

`
export const Message = styled.textarea`
    width: 95%;
    margin-bottom:10px;
    height:45px;
    border-radius:10px;
    background-color: lightgray;
    border:none;
`
export const ButtonBox = styled.div`
    width:95%;
    display: flex;
    justify-content: left;
    align-items: center;
`
export const Send = styled.button`

  width:100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  Border:#ff5823 2.2px solid;
  color:white;
  font-weight:900;
  font-size:12px;
  border-radius:50px;
  background-color:rgb(7, 25, 46);

  
`
