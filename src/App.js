import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import Statement from "./pages/Statement/Statement";
import Transaction from "./pages/Transaction/Transaction";
import CustomClearance from "./pages/CustomClearance/CustomClearance";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/statement" element={<Statement/>} />
            <Route path="/transaction" element={<Transaction/>}/>
            <Route path="/cusclear" element={<CustomClearance/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
