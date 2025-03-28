import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Page404 from "../pages/Page404"

const MainRoute = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>} />
            <Route path='*' element={<Page404/>} />
        </Routes>
    </div>
  )
}

export default MainRoute