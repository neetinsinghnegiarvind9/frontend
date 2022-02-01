import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';


const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/user";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {		
				setError(error.data.message);			
		}
	};

	return(
		<div>		
            <Row>
                <Col>
                    <h1>Welcome Back</h1>
					    <Link to= "/login">
						    <Button variant="success" type="submit">
                                Sign In
                            </Button>
					     </Link>
                </Col>

                <Col>
                    <Form onSubmit = {handleSubmit}>
                        <h1> Create Account</h1>
                            <Form.Control type = "text" 
                                      placeholder="First name"
                                      name = "firstName"
                                      onChange = {handleChange}
                                      value = {data.firstName}
                                      required
                                       />
                            <Form.Control type = "text" 
                                      placeholder="Last name"
                                      name = "lastName"
                                      onChange = {handleChange}
                                      value = {data.lastName}
                                      required
                                       />
                            <Form.Control type = "email" 
                                      placeholder="Email"
                                      name = "email"
                                      onChange = {handleChange}
                                      value = {data.email}
                                      required
                                       />
                            <Form.Control type = "password" 
                                      placeholder="Password"
                                      name = "password"
                                      onChange = {handleChange}
                                      value = {data.password}
                                      required
                                       />
                                {error && <div>{error}</div>}
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                   
                </Row>            
		    </div>
		)

export default Signup;