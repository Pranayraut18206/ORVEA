import logo from "../../assets/wimp-logo_200x60@2x.webp"
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [correct,setCorrect] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const email = user.email;
    const password = user.password;

    if (email === "" || password === "" || !email.includes("@")) {
      setError("Invalid email or password");
      return;
    }

    const hasLower = password !== password.toUpperCase();
    const hasUpper = password !== password.toLowerCase();
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);

    if (password.length < 8 || !hasLower || !hasUpper || !hasSpecial) {
      setError("Password must be 8+ chars with uppercase, lowercase & special character");
      return;
    }

    setError("");
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Saved");
    setCorrect("Login successful!")

    setUser({ email: "", password: "" });
  }

  return (
    <div>
      <form className="form">
        <img src={logo} alt="Logo" style={{ height: "15%", width: "60%", margin: "10px auto" }} />

        <h1 style={{ fontSize: "20px", color: "rgb(255, 106, 0)", fontWeight: "bold" }}>
          Sign in
        </h1>

        <p style={{ color: "grey", fontSize: "10px" }}>
          Sign in or create a new account
        </p>

        <input
          placeholder="Email"
          value={user.email}
          className="email-inp"
          type="email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
            setError("");
          }}
        />

        <input
          placeholder="Password"
          value={user.password}
          className="pass-inp"
          type="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
            setError("");
          }}
        />

        {error && (
          <p style={{ color: "red", fontSize: "12px", marginTop: "5px",fontWeight:"bold" }}>
            {error}
          </p>
        )}
        {correct&&(
          <p style={{color:"green", fontSize: "12px", marginTop: "5px",fontWeight:"bold",textAlign:"center"}}>{correct}</p>
        )

        }

        <button className="signin" type="submit" onClick={handleSubmit}>
          Continue
        </button>

        <div className="form-divider">or</div>

        <button className="signup">Sign up</button>
      </form>
    </div>
  );
}