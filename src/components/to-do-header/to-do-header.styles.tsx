import styled from 'styled-components';
import { InputComponent } from '../input/input.component';


export const HeaderCotainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const InputCotainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const InputHeader = styled(InputComponent)`
    width: 97%;
`