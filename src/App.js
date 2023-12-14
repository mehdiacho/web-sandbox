import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Sandbox from "./pages/Sandbox";
import {AuthContextProvider} from "./config/auth-context";

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
            <Routes>
                <Route path={'/'} element={<Login />} />
                <Route path={'dash'} element={<Dashboard />} />
                <Route path={'account'} element={<Account />} />
                <Route path={'sand'} element={<Sandbox />} />
            </Routes>
        </AuthContextProvider>
    </div>
  );
}

export default App;
