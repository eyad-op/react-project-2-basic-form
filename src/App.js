import "./App.css";

function App() {
  return (
    <div className="container">
      <form className="register__form">
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input id="email" type="text" placeholder="Email" name="email" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
