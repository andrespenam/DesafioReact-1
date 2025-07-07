import './App.css'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import RegisterPage from './components/RegisterPage'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      {/*<RegisterPage />*/}
      {/*<LoginPage />*/}
      <Cart />
      <Footer />
    </>
  )
}

export default App
