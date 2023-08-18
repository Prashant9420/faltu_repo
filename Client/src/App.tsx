import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import ResetPassword from "./components/SignIn/ResetPassword/ResetPassword";
import SignUp from "./components/SignUp/SignUp";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/Home/Home";
import User from "./components/UserProfile/User";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={`/document/${uuidv4()}`} />}
          />
          <Route path="/document/:id" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
