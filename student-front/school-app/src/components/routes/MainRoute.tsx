import { Route, Routes } from "react-router-dom"
import  {Login}  from "../pages/Login"
import  {Teacher}  from "../pages/Teacher"
import { Register } from "../pages/Register"

export function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/teacher" element={<Teacher/>} />
        </Routes>
      
    </div>
  )
}

