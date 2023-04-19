import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { NewPassword } from "./pages/NewPassword/NewPassword";
import { Profile } from "./pages/Profile/Profile";
import { RecoveryPassword } from "./pages/RecoveryPassword/RecoveryPassword";
import { Registration } from "./pages/Registration/Registration";
import { TestPage } from "./pages/TestPage/TestPage";
import { LogIn } from "./pages/Login/LogIn";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/fridayproject/login/" element={<LogIn />} />
        <Route path="/fridayproject/registration/" element={<Registration />} />
        <Route path="/fridayproject/profile/" element={<Profile />} />
        <Route path="/fridayproject/error/" element={<ErrorPage />} />
        <Route path="/fridayproject/recovery/" element={<RecoveryPassword />} />
        <Route path="/fridayproject/newpass/" element={<NewPassword />} />
        <Route path="/fridayproject/test/" element={<TestPage />} />
      </Routes>
    </div>
  );
};
