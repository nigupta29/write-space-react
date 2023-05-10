import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layouts/Footer'
import Newsletter from './components/layouts/Newsletter'
import Archive from './pages/Archive'
import BlogPost from './pages/BlogPost'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'

export default function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/blogs/archive" element={<Archive />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </div>
  )
}
