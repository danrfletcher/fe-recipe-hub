import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/pages/Home'
import Recipes from './components/pages/Recipes'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Error from './components/Error'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/recipes' element={<Recipes />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
