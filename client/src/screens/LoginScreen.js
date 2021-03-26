import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CustomContainer from "../components/CustomContainer";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginScreen = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "/user/login",
        {
          email,
          password,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.data));
        history.push("/home");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setError("Invalid Credentials");
        } else if (error.response.status >= 500) {
          setError("Something went wrong");
        }
      });
  };

  return (
    <CustomContainer>
      <h3 className="my-2">Login</h3>
      <Form>
        {error && <div className="alert bg-danger">{error}</div>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button
          onClick={submitHandler}
          variant="primary btn-block"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className='mt-2'>
        Don't have an account? <Link to="/signup">SignUp</Link>
      </p>
    </CustomContainer>
  );
};

export default LoginScreen;
