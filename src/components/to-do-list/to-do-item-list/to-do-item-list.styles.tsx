import styled from 'styled-components';
import { FaCheckCircle, FaPencilAlt, FaTrashAlt, FaCheck, FaTimes, FaRegCircle } from 'react-icons/fa';

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
export const StyledFaCheck = styled(FaCheck)`
    color: #1bcc00;
    font-size: 20px;
`
export const StyledFaTimes = styled(FaTimes)`
    color: #b60000;
    font-size: 20px;
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

export const ItemListInput = styled.input`
    border: 0px solid black;
    font-size: large;
    font-weight: 600;
    border-bottom: 1px solid #FF00FF;
    width: calc(100% - 70px);
    &:focus{
        outline: none;
        border: 0px solid black;
        border-bottom: 1px solid #FF00FF;
    }
`

export const ItemListInputContainer = styled.div`
    display: flex;
    flex-direction: row;

    svg{
        margin: 5px;
        cursor: pointer;
    }
`