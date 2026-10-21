import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
        
          <Route path="/product" element={<p>Product</p>}/>
        
          <Route path="/login" element={<p>login</p>}/>
        
          <Route path="/carrinho" element={<p>Carrinho</p>}/>
        
        </Routes>

      </main>

      <Footer/>

    </BrowserRouter>
  )
};

export default App
