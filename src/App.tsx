import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import { Activity } from './types/Activity';
import PageBanner from './components/PageBanner';
import { UserRole } from './types/User';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({ username: '', role: 'USER' as UserRole, activities: [] as Activity[], password: '' });

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser]);

  function handleLogin(username: string, role: UserRole, activities: Activity[], password: string) {
    setIsLoggedIn(true);
    console.log('in app');
    setLoggedInUser({ username, role, activities, password });
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage onLogin={handleLogin} />} />
          <Route
            path="/bookings"
            element={
              <>
                {isLoggedIn && <PageBanner {...loggedInUser} />}
               
                  <BookingPage /> // Annars visa BookingPage
                
              </>
            }
          />
             <Route
            path="/admin"
            element={
              <>
                {isLoggedIn && <PageBanner {...loggedInUser} />}
               
                  <AdminPage /> 
                
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
