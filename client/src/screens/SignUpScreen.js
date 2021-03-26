import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CustomContainer from "../components/CustomContainer";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "/user/signup",
        {
          email,
          name,
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
        if (error.response.status === 400) {
          setError("User Already exists");
        } else if (error.response.status >= 500) {
          setError("Something went wrong");
        }
      });
    // history.push("/home");
  };

  return (
    <div>
      <CustomContainer>
        <h3 className="my-2">Sign Up</h3>
        {error && <div className="alert bg-danger">{error}</div>}

        <Form>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
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
            Register
          </Button>
        </Form>
        <p className="mt-2">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </CustomContainer>
    </div>
  );
};

export default SignUp;
