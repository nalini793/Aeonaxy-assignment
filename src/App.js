import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./pages/signup/Signup";

import ProfileCreation from "./pages/profile/ProfileCreation";
import OptionSelection from "./pages/options/OptionSelection";
import EmailVerification from "./pages/verification/EmailVerification";

import UserDetails from "./context/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <UserDetails.Provider value={{ email: null, dp: null, location: null }}>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/profile" element={<ProfileCreation />} />
          <Route path="/options" element={<OptionSelection />} />
          <Route path="/main" element={<EmailVerification />} />
        </Routes>
      </UserDetails.Provider>
    </BrowserRouter>
  );
}

export default App;
