import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Chart from './Components/Chart';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Login />
          </>
        }
      />

<Route
        exact
        path="/dashboard"
        element={
          <>
            <Dashboard />
          </>
        }
      />
     </Routes>
    </BrowserRouter>

  );
}

export default App;
