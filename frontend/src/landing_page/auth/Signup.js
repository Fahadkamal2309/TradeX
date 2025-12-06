import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, { email, password });
      if (response.data.success) {
        alert("Signup successful!");
        setEmail("");
        setPassword("");
      } else {
        alert(response.data.message || "Signup failed");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Error during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side */}
      <div className="signup-left">
        <img
          src="media/images/signup.png"
          alt="Signup Promo"
          className="signup-image"
        />
        <h3>Join Us and Enjoy:</h3>
        <ul>
          <li>Easy stock trading</li>
          <li>Comprehensive back-office operations</li>
          <li>Direct mutual funds in a demat account</li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSignup}>
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
          <button
            type="submit"
            disabled={loading}
            className="signup-button"
          >
            {loading ? "Signing Up..." : "Continue"}
          </button>
        </form>

        <div className="login-link-container" style={{ textAlign: "center", marginTop: "15px" }}>
          <Link to="/login" className="login-link">
            Already have an account? Login
          </Link>
        </div>

        <div className="disclaimer">
          <p>
            By signing up, you authorize us to contact you even if your number
            is registered on DND. We will fetch KYC information from the C-KYC
            registry with your PAN. Online KYC is conducted as per KRA
            regulations and PMLA guidelines. For HUF, Corporate, Partnership, or
            NRI accounts, please use offline forms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
