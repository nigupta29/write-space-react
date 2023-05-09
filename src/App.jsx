import { BrowserRouter, Route, Routes } from "react-router-dom"
import Archive from "./pages/Archive"
import BlogPost from "./pages/BlogPost"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/blog/archives' element={<Archive />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
