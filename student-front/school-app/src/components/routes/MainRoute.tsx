import { Route, Routes } from "react-router-dom"
import  {Login}  from "../pages/Login"
import  {Teacher}  from "../pages/Teacher"

export function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/teacher" element={<Teacher/>} />
        </Routes>
      
    </div>
  )
}

