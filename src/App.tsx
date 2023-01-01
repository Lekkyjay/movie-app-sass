import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import 'swiper/swiper.min.css'
import './App.scss'
import Detail from './pages/detail/Detail'
import Catalog from './pages/Catalog'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<Catalog />} />
        <Route path='/:category/search/:keyword' element={<Catalog />} />
        <Route path='/:category/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
