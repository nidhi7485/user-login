import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RegisForm from './components/RegisForm'
import LoginForm from './components/LoginForm'
import UserDashbord from './components/UserDashbord'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/dashbord' element={<UserDashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
