import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';// Importera din nya sida

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<LoginPage />} />
          <Route path='/bookings' element={<BookingPage />} /> 
          <Route path='/admin' element={<AdminPage />} /> 
          {/* Lägg till din nya route */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
