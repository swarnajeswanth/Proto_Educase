import React, { useState } from "react";
import RegisterCard from "./Components/RegisterCard";
import LoginCard from "./Components/LoginCard";
import SignupCard from "./Components/SignpCard";

const App = () => {
  const [screen, setScreen] = useState("welcome");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 transition-all">
      {screen === "welcome" && (
        <RegisterCard onRegister={() => setScreen("login")} />
      )}
      {screen === "login" && (
        <LoginCard
          onBack={() => setScreen("welcome")}
          onSignup={() => setScreen("signup")}
        />
      )}
      {screen === "signup" && <SignupCard onBack={() => setScreen("login")} />}
    </div>
  );
};

export default App;
