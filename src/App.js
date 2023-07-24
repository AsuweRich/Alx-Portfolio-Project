import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emplisting from "./Components/Emplisting";
import EmpCreate from "./Components/EmpCreate";
import EmpDetail from "./Components/EmpDetail";
import EmpEdit from "./Components/EmpEdit";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Emplisting />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/detail/:empid" element={<EmpDetail />}></Route>
          {/* the empid here has been use with useparams, it will retrieve the data fetch with api and makes it appear in next page since you are routing */}
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
