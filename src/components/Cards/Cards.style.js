import styled from 'styled-components'

export const ContainerCard = styled.div`
    height: 90%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-wrap: no-wrap;
    overflow-x: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`