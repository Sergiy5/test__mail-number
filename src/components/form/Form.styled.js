import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 30px;
  flex-direction: column;
  width: 360px;
  height: 480px;
  gap: 24px;
  border-radius: 10px;
  border: 2px solid lightblue;
`;

export const StyledBtn = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: lightblue;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: blue;
  }
`;

export const StyledInput = styled.input`
  border-radius: 4px;
  `;

export const InputNumber = styled(StyledInput)`
  outline: ${props => (props.$isError ? '2px solid red' : 'none')};
  border: ${props => (props.$isError ? 'none' : '2px solid blue')};
`;
export const InputEmail = styled(StyledInput)`
  outline: ${props => (props.$isError ? '2px solid red' : 'none')};
  border: ${props => (props.$isError ? 'none' : '2px solid blue')};
`; 
//  