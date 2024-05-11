import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "../Login/Login.css";
import "./Signup.css";

export default function Login() {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    console.log(
      "Email is ",
      email,
      "\n Password is ",
      password,
      "\n Confirm Password is ",
      confirm
    );

    if (password.length < 6) {
      setError("Password should be 6 characters or more");
      return;
    }
    if (password !== confirm) {
      setError("Your password didn't match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="formContainer">
      <h2 className="formTitle">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Enter password"
            required
          />
        </div>
        <input type="submit" value="Sign Up" className="btn-submit" />
      </form>
      <p>
        Already have an account ? <Link to="/login">login</Link>{" "}
      </p>
      {<p className="text-error">{error}</p>}
    </div>
  );
}
