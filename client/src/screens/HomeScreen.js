import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const HomeScreen = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({});

  const logoutUser = () => {
    localStorage.removeItem("userInfo");
    history.push("/signup");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      history.push("/");
    } else {
      setUserInfo(user);
    }
  }, []);
  return (
    <Container
      className="justify-content-center align-items-center d-flex p-3"
      style={{ flexDirection: "column" }}
    >
      <br />
      <h1>Welcome {userInfo.name}</h1>
      <button onClick={logoutUser} className="btn btn-danger">
        Log out
      </button>
    </Container>
  );
};

export default HomeScreen;
