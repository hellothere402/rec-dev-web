import  Container  from "react-bootstrap/Container";
import NavBar from 'react-bootstrap/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'

function BrandBar() {
    return (
        <>
            <NavBar bg="light">
                <Container>
                    <NavBar.Brand href="#home">Home</NavBar.Brand>
                </Container>
             </NavBar>
            <br />
            <NavBar bg="light"> 
                <Container>
                    <NavBar.Brand>Educational resources</NavBar.Brand>
                </Container>
            </NavBar>
            <br />
            <NavBar bg="light">
                <Container>
                    <NavBar.Brand>Why Recycle?</NavBar.Brand>
                </Container>
            </NavBar>
            <br />
            <NavBar bg="dark">
                <Container>	
                    <NavBar.Brand href="#home">
                        <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Recycling logo"
                        />
                    </NavBar.Brand>
                </Container>
            </NavBar>
            <br />
            <NavBar bg="dark" variant="dark">
                <Container>
                    <NavBar.Brand href="#home">
                        <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Recycling Website
                    </NavBar.Brand>
                </Container>
            </NavBar>
            </>
    );
}
            

export default BrandBar;

