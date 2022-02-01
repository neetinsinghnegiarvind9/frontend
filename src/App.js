import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Signup from "./components/singup";
import Login from "./components/login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Dashboard />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;