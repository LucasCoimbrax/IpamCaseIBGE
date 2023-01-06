import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    border-bottom : 1px solid gray;
`
export const ContainerImage = styled.img`
    width: 15vh;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 30px;
    text-shadow: 1px 2px 5px black;
`