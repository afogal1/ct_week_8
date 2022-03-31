import React from "react"; //gives us access to the React Library
import { styled } from '@mui/system'; //to create new elements with specific styles of our own. 
import { Button } from '@mui/material'; //  pre-styled element given to us by mui material. 
import { Link } from 'react-router-dom';
import drone_image from '../../assets/images/drone_image.jpeg';
import { GoogleButton } from '../SignIn';

interface Props { // Prop is an attribute or child of a component, and often is represented as a single Object
    title: string;
}

// Create Styled Components with styled-components 
// we’re creating our own elements and giving them some css properties 
const Root = styled('div')({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled(Link)({
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})
const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})
const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${drone_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

// style our Home Component
export const Home = ( props:Props ) =>{
    return(
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to="/">Brand Name</LogoA>
                </Logo>
                <LogoNavigation>
                <li>
                        <NavA to="/">Home</NavA>
                    </li>
                    <li>
                        <NavA to="/dashboard">Dashboard</NavA>
                    </li>
                    <li>
                        <GoogleButton />
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Drones are fly.</p>
                    <Button color="primary" variant="contained">See the Drones</Button>
                </MainText>
            </Main>
        </Root>
    )
}
