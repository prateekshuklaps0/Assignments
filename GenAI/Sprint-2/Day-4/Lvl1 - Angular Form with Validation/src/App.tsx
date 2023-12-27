import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const errors: any = {};
    const { name, email, password, confirmPassword, phoneNumber } = formData;

    if (!name || name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }

    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (phoneNumber && !/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber)) {
      errors.phoneNumber = "Enter a valid phone number (e.g., (123) 456-7890)";
    }

    // Custom password strength validation
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)) {
      errors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }

    return errors;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setSuccessMessage("Registration successful!");
      // Submit the form to your server or perform the desired action here.
    } else {
      setSuccessMessage("");
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <div className="Outer">
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>

          <div>
            <label>Phone Number (optional):</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <div className="error">{errors.phoneNumber}</div>
            )}
          </div>

          <button type="submit">Register</button>
        </form>

        {successMessage && <div className="success">{successMessage}</div>}
      </div>
    </div>
  );
}

export default App;
