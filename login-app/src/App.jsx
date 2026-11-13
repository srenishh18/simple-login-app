
import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    if (email && password) {
      setLoggedIn(true);
    }
  }

  return (
    <div className="container">
      <div className="card">

        {loggedIn ? (
          <>
            <h1>Welcome!</h1>
            <p>You have logged in successfully.</p>
            <h3>{email}</h3>

            <button onClick={() => {
              setLoggedIn(false);
              setEmail("");
              setPassword("");
            }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <p>Enter your details to continue</p>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Login</button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}

export default App;
