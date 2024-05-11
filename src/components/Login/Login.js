import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Login.css";

export default function Login() {
  
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email is ", email, "\n Password is ", password);

    if (password.length < 6) {
      setError("Password should be 6 characters or more");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("Logged in successfully");
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError("Email or Password is invalid");
      });
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Login</h2>
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
        <input type="submit" value="Login" className="btn-submit" />
      </form>
      <p>
        New to Ema John ? <Link to="/signup">Create a new account</Link>{" "}
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
}
