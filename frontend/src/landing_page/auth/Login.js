import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" }, // ensures backend parses JSON
        }
      );

      if (response.data.success) {
        // Store token & user info
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        alert("Login successful!");
        // Redirect to dashboard or homepage
        window.location.href = "/dashboard";
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      alert(error.response?.data?.message || "Error during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <img
          src="media/images/signup.png"
          alt="Login Promo"
          className="login-image"
        />
      </div>

      {/* Right Side */}
      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-input"
          />
          <button
            type="submit"
            disabled={loading}
            className="login-button"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="additional-info" style={{ marginTop: "20px" }}>
          <p>© 2025. All rights reserved.</p>
          <p>Support</p>
          <p>
            NSE & BSE – SEBI Registration no.: INZ000031633
            <br />
            MCX - SEBI Registration no.: INZ000038238
            <br />
            CDSL - SEBI Registration no.: IN-DP-431-2019
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
