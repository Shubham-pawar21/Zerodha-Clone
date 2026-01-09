import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3002/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful");
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container">
      <div className="p-5 text-center mt-5">
        <h1 className="fs-3">Open a free demat and trading account online</h1>
        <p className="fs-5 mt-4 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row">
        <div className="col-7 p-5">
          <img src="media/images/account_open.svg" />
        </div>
        <div
          className="col-5 p-5 offset-1"
          style={{
            width: "400px",

            padding: "70px",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          }}
        >
          <form class="needs-validation" novalidate onSubmit={handleSubmit}>
            <div className="text-center">
              <img
                src="media/images/kite-logo.png"
                style={{ width: "4.75rem" }}
              />
              <br></br>
              <h3 className="text-muted">Signup to Zerodha</h3>
            </div>

            <div class="mb-3">
              <lable for="username" class="form-label">
                Username
              </lable>
              <input
                name="username"
                placeholder="Enter username"
                id="username"
                type="text"
                class="form-control"
                onChange={handleChange}
                required
              />
              <div class="valid-feedback">Looks good !</div>
            </div>
            <div class="mb-3">
              <lable for="email" class="form-label">
                Email
              </lable>
              <input
                name="email"
                placeholder="Enter email"
                id="email"
                type="email"
                class="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <lable for="password" class="form-label">
                Password
              </lable>
              <input
                name="password"
                placeholder="Enter password"
                id="password"
                type="password"
                class="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              class="btn btn-success"
              style={{
                width: "100%",
                backgroundColor: "#ff5722",
                border: "none",
                padding: "10px",
                color: "white",
                fontSize: "16px",
              }}
            >
              Submit
            </button>
            <br></br>
            <p className="text-center text-muted">
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#ff5722" }}>
                Login!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
