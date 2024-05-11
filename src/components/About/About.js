import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Secret about us!!!</h2>
      {user?.uid ? (
        <p>Welcome {user?.email}</p>
      ) : (
        <>
          <p>
            Please <Link to="/login">Login</Link>{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default About;
