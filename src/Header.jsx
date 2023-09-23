import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    width: 82%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 60px;

    @media only screen and (max-width: 768px) {
        width: 95%;
    }
`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`
const ListItem = styled.li`
    cursor: pointer; 
`


export default function Header(){
    return <Container>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
        </List>
    </Container>
}