import "../src/components/UI/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Err from "./components/login/errpass";
import Forgot from "./components/login/forgot";
import Remake from "./components/login/remake";
import Profile from "./components/dashboard/profile";
import Dashboard from "./components/dashboard/dashboard";
import Addrecru from "./components/recruitment/addrecruitment";
import Listrecru from "./components/recruitment/listrecruitment";
import Editrecru from "./components/recruitment/editrecruitment";
import Addnews from "./components/news/addnews";
import Listnews from "./components/news/listnews";
import Editnews from "./components/news/editnews";
import Addstaff from "./components/staff/addstaff";
import Liststaff from "./components/staff/liststaff";
import Inforstaff from "./components/staff/inforstaff";
import Editstaff from "./components/staff/editstaff";
import Listask from "./components/mailask/listmail";
import Editmail from "./components/mailask/editmail";

function App() {
  return (
    // <div className="full">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/forgot" element={<Forgot />} />
        <Route path="/login/errpass" element={<Err />} />
        <Route path="/login/remake" element={<Remake />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/dashboard" element={<Dashboard />} />
        <Route path="/recruitment/addrecruitment" element={<Addrecru />} />
        <Route path="/recruitment/listrecruitment" element={<Listrecru />} />
        <Route
          path="/recruitment/editrecruitment/:id"
          element={<Editrecru />}
        />
        <Route path="/news/addnews" element={<Addnews />} />
        <Route path="/news/listnews" element={<Listnews />} />
        <Route path="/news/editnews/:id" element={<Editnews />} />
        <Route path="/mailask/listmail" element={<Listask />} />
        <Route path="/mailask/editmail/:id" element={<Editmail />} />
        <Route path="/staff/addstaff" element={<Addstaff />} />
        <Route path="/staff/liststaff" element={<Liststaff />} />
        <Route path="/staff/inforstaff" element={<Inforstaff />} />
        <Route path="/staff/editstaff/:id" element={<Editstaff />} />
      </Routes>
    </BrowserRouter>

    // </div>
  );
}

export default App;
