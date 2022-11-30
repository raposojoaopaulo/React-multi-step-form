import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const IconArea = styled.div<{ active: boolean; }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#25CD89' : '#494a7c'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const LevelText = styled.div<{ active: boolean; }>`
  text-align: center;
  margin-left: 10px;
  color: ${props => props.active ? '#25CD89' : '#FFF'};
`;