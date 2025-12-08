import React, { useState } from "react";
import axios from "axios";
import { API_URL, DASHBOARD_URL } from "../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Sending login request with:", { email, password });

      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // Backend returns token on success
      if (response.data.token) {
        // Save token
        localStorage.setItem("token", response.data.token);

        // Save user info if returned
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        // Redirect to dashboard
        window.location.replace(DASHBOARD_URL);

      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err.response || err);
      if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
      }
      setError(err.response?.data?.message || "Error during login.");
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
          <button type="submit" disabled={loading} className="login-button">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Show error messages */}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
