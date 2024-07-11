import "./App.css";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <LogIn />
      <SignUp /> */}
      <Home />
    </div>
  );
}

export default App;
