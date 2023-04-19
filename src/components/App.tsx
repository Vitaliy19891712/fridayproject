import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./pages/Login/ErrorPage";
import { NewPassword } from "./pages/Login/NewPassword";
import { Profile } from "./pages/Login/Profile";
import { RecoveryPassword } from "./pages/Login/RecoveryPassword";
import { Registration } from "./pages/Login/Registration";
import { TestPage } from "./pages/Login/TestPage";
import { LogIn } from "./pages/Login/LogIn";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login/" element={<LogIn />} />
        <Route path="/registration/" element={<Registration />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/error/" element={<ErrorPage />} />
        <Route path="/recovery/" element={<RecoveryPassword />} />
        <Route path="/newpass/" element={<NewPassword />} />
        <Route path="/test/" element={<TestPage />} />
      </Routes>
    </div>
  );
};
