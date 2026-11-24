
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './User/Pages/Home';
import Contact from './User/Pages/Contact';
import Books from './User/Pages/Books';
import Auth from './Pages/Auth';
import Profile from './User/Pages/Profile';
import View from './User/Pages/View';
import AdminDashBoard from './Admin/Pages/AdminDashBoard';
import AdminResource from './Admin/Pages/AdminResource';
import AdminSettings from './Admin/Pages/AdminSettings';
import Preloader from './Components/Preloader'
import PageNotFound from './Pages/PageNotFound';

function App() {

  const [isLoading, SetLoading] = useState(true)

  setTimeout(() => {
    SetLoading(false)
  }, 3000);


  return (
    <>
      <Routes>
        <Route path='/' element={ isLoading ? <Preloader/> :<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/books' element={<Books />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />

        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/books/:id' element={<View />} />

        <Route path='/admin' element={<AdminDashBoard />} />
        <Route path='/admin/resources' element={<AdminResource />} />
        <Route path='/admin/settings' element={<AdminSettings />} />
         <Route path='/*' element={<PageNotFound />} />


      </Routes>
    </>
  )
}

export default App
