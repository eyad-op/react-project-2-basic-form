import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) =>
    setValues({ ...values, firstName: event.target.value });
  const handleLastNameInputChange = (event) =>
    setValues({ ...values, lastName: event.target.value });
  const handleEmailInputChange = (event) =>
    setValues({ ...values, email: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) setValid(true);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <form className="register__form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <p className="success__message">
            Success! Thank you for registering!
          </p>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="firstName"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span>Please enter your first name...</span>
        ) : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="lastName"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span>Please enter your last name...</span>
        ) : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span>Please enter your e-mail address...</span>
        ) : null}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
