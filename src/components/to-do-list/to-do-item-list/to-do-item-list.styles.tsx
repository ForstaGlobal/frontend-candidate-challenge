import styled from 'styled-components';
import { FaCheckCircle, FaPencilAlt, FaTrashAlt, FaRegCircle } from 'react-icons/fa';
import { InputComponent } from '../../input/input.component';

export const ItemListCotainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 99%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 5px;
    margin-bottom: 10px;
`

export const ActionsCotainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    svg{
        margin: 5px;
        cursor: pointer;
    }
`

export const StyledFaCheckCircle = styled(FaCheckCircle)`
    color: #FF00FF;
    font-size: 20px;
`
export const StyledFaRegCircle = styled(FaRegCircle)`
    font-size: 20px;
`
export const StyledFaPencilAlt = styled(FaPencilAlt)`
    font-size: 20px;

    &:hover{
        color: #37faf7;
    }
`
export const StyledFaTrashAlt = styled(FaTrashAlt)`
    font-size: 20px;

    &:hover{
        color: #b5fa4e;
    }
`

export const TaskContainer = styled.div`
    font-size: large;
    font-weight: 600;
    overflow: hidden;
    width: 100%;
    display: flex;

    span{
        display: inline-flex;
        align-items: center;
    }
`

export const ItemListInput = styled(InputComponent)`
    width: 100%;
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