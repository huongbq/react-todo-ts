import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/Row/TodoList";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/home" element={<TodoList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
