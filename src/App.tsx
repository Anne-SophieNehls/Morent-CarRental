import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DetailsPage from './pages/DetailsPage';
import RentPage from './pages/RentPage';
import BookingPage from './pages/BookingPage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';

const client = new QueryClient();

function App() {
return (
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/details' element={<DetailsPage/>}/>
        <Route path='/bookings' element={<BookingPage/>}/>
        <Route path='/favorites/:id' element={<FavoritesPage/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
        <Route path='/rent/:id' element={<RentPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
}

export default App
