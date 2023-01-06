import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: start;
    padding: 4%;
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

export const ContainerTitleSelect = styled.h2`
    font-size: 250%;
`
export const ContainerSelect = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    margin-left: 2%;
    padding: 0 4% 4% 4%;
    box-shadow: 30px -16px green;;
`
export const ContainerSelectState = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Selected = styled.select`
    font-size: 200%;
    padding: 8px;
    margin: 5%;
`

//====================================================

export const ContainerGeralCard = styled.div`
    padding: 5% 0px;
`

export const ContainerTitleDados = styled.h2`
    font-size: 220%;
`

export const ContainerDados = styled.div`
    font-size: 250%;
`

export const CardDados = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    margin: 6px;
    border: 1px solid gray;
    border-radius: 25px;
    box-shadow: 3px 2px gray;
`

export const ContainerTamandua = styled.img`
    position: fixed;
    right: 80%;
    bottom: 10%;
    width: 20%;
`