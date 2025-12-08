import React, { useState } from "react";
import axios from "axios";
import { API_URL, DASHBOARD_URL } from "../../config";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Sending signup request with:", { username, email, password });

      const response = await axios.post(
        `${API_URL}/api/auth/signup`,
        { username, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // If backend returns a token (preferred)
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        if (response.data.user) localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect to dashboard with token
        window.location.replace(`${DASHBOARD_URL}?token=${response.data.token}`);
      }
      // Fallback: backend only returns success message
      else if (response.data.message === "User created successfully") {
        alert("Signup successful!");

        if (response.data.user) localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect to dashboard (without token)
        window.location.replace(DASHBOARD_URL);
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err.response || err);
      setError(err.response?.data?.message || "Error during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src="media/images/signup.png" alt="Signup Promo" className="signup-image" />
        <h3>Join Us and Enjoy:</h3>
        <ul>
          <li>Easy stock trading</li>
          <li>Comprehensive back-office operations</li>
          <li>Direct mutual funds in a demat account</li>
        </ul>
      </div>

      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="signup-input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="signup-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="signup-input"
          />
          <button type="submit" disabled={loading} className="signup-button">
            {loading ? "Signing up..." : "Continue"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <div className="login-link-container" style={{ textAlign: "center", marginTop: "15px" }}>
          <a href="/login" className="login-link">
            Already have an account? Login
          </a>
        </div>

        <div className="disclaimer">
          <p>
            By signing up, you authorize us to contact you even if your number is registered on DND.
            Online KYC is conducted as per regulations. For HUF, Corporate, or NRI accounts, please use
            offline forms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
