import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Button,Container } from 'react-bootstrap';

const Dashboard = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div>
			<Container>
                <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
                <Button variant="primary" onClick={handleLogout}>
                       Logout
                </Button>
                </Navbar>
            </Container>
	    </div>
	);
};

export default Dashboard;
