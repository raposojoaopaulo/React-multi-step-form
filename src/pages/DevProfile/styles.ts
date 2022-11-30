import styled from "styled-components";

export const Container = styled.div`
  background-color: #02044a;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
  text-align: center;
`;

export const LevelArea = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-left: 40px;
  justify-content: space-between;
`;