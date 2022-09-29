import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { InputComponent } from '../../../input/input.component';

export const ItemListInput = styled(InputComponent)`
    width: 100%;
`
export const StyledFaTimes = styled(FaTimes)`
    font-size: 20px;
    cursor: pointer;
    float: right;
`
export const EditModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding: 0px 50px;
    bottom: 50px;
    right: 0px;
`