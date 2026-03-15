import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Statement from "./pages/Statement"
import SendMoney from "./pages/SendMoney"

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/send" element={<ProtectedRoute><SendMoney/></ProtectedRoute>}/>
      <Route path="/statement" element={<ProtectedRoute>
        <Statement/>
      </ProtectedRoute>}/>
      
      </Routes></BrowserRouter>
  )
 
}

export default App
