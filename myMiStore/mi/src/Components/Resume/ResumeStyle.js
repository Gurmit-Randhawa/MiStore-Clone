import styled from "styled-components";

export const ResumePage = styled.div`
  width: 98%;
  height: 100vh;
  margin: 40px auto;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;
export const Left = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: white ;

`;
// export const BlankBox = styled.div`
  
// `;
export const Row = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RowLeft = styled.div`
  width: 13%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.855);
  color:white;
`;
export const RowRight = styled.div`
  width: 80%;
  height: 58%;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 1px 20px 20px 1px;
  background-color: rgba(0, 0, 0, 0.855);
  color:white;
  padding-left:15px;
  font-size:14px;

`;
export const RowBlank = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RowBlankLeft = styled.div`
  width: 13%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.855);
  color:white;
`;
export const RowBlankRight = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 1px 20px 20px 1px;
  color:white;
  padding-left:15px;
  font-size:14px;

`;
export const Center = styled.div`
  height: 0.1%;
  width: 90%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: solid black 2px;
  box-shadow: black 4px 0px 10px;
`;
export const Right = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  padding: 15px;
  overflow:scroll;
  background-color: lightgray ;
`;
