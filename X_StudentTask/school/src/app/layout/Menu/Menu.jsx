import Login from "@/app/pages/Login"
import Link from "next/link"

const Menu = () => {
  return (
    <div className="Menu">
      
        <Link href="/">Login</Link>
     
     
        <Link href="/login" ref={<Login/>} >Login</Link>
      
      
        <Link href="/register">Register</Link>
      
      
        <Link href="/about">About</Link>
      
      
    </div>
  )
}

export default Menu