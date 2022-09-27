import styled, { css } from 'styled-components';

const mainColor = '#FF00FF';
const subColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 14px;
  color: ${mainColor};
`

export const InputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({shrink}:{shrink:boolean}) => shrink && shrinkLabelStyles}
`

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${mainColor};
  }

  &:focus ~ ${InputLabel}{ // ~ look the next sibling bottom with the class name form-input-label
    ${shrinkLabelStyles}
  }
`

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  width: 100%;
`