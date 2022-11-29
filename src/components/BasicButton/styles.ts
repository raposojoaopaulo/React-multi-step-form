import styled from "styled-components";

export const Container = styled.div<{typeButton: string}>`
button {
  background-color: ${props => props.typeButton === "primary" ? "#25CD89" : "#16195C"};
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
  padding: 25px 60px;
  border: 0;
  border-radius: 30px;  
  cursor: pointer;
  margin-top: 30px;
  margin-left: 10px;

  link {
    color: #FFF;
  }
}
`;
