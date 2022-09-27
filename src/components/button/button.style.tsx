import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 65px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 30px 0 30px;
  font-size: 14px;
  background-color: #00a8f0;
  color: black;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 1rem;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  
  &:hover {
    background-color: #00a8f0;
    color: black;
    border: none;
  }
`