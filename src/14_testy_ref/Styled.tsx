import styled from 'styled-components';

export const Button = styled.button`
    background-color: #fff;
    border: 1px solid #000;
    cursor: pointer;
`

export const Container = styled.div`
    width: 600px;
`

interface IFlexboxProps {
    sbet?: boolean;
    wrap?: boolean;
}

export const Flexbox = styled.div<IFlexboxProps>`
    display: flex;
    justify-content: center;

    ${({ sbet }) => (sbet ? 'justify-content: space-between;' : '')}
`

export const UserBox = styled(Flexbox)`
    width: 100%;
    margin-bottom: 20px;
    ${({wrap}) => {
        if(wrap){
            return `flex-wrap: wrap`
        }

        return '';
    }}
`

export const StyledForm = styled.form`
    margin-top: 100px;
    margin-bottom: 50px;
    display: block;
    width: 600px;
`
    
export const StyledInput = styled.input`
    width: 100%;
    display: block;
    margin: 7px 0;
    padding: 4px;
    box-sizing: border-box;
`;

export const StyledSubmit = styled(StyledInput)`
background-color: #fff;
border: 1px solid #000;
cursor: pointer;
`
export const ArrowIcon = styled.img`
    margin-right: 10px;
    width: 20px;
    height: auto;
    vertical-align: bottom;
    cursor: pointer;
`