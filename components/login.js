import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
		} catch (error) {
			if (
				error.response 
			) {
				setError(error.response.data.message);
			}
		}
	};

	return(
		<div>
        <Row>
          <Col>
              <Form onSubmit = {handleSubmit}>
                  <h1> Login to Your Account</h1>
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
                        Sign In
                    </Button>
              </Form>
            </Col>

                <Col>                      
                    <h1>New Account</h1>
					           <Link to= "/signup">
						        <Button variant="success" type="submit">
                       Sign Up
                    </Button>
					          </Link>
                </Col>
                  
        </Row>            
		</div>
		)

export default Login;

