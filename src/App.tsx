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
import AddActivityPage from './pages/AddActivityPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({ username: '', role: 'USER' as UserRole, activities: [] as Activity[], password: '' });
  const [activities, setActivities] = useState([] as Activity[]);



  useEffect(() => {
    // Hämta aktivitetsdata från MirageJS
    fetch('/activities') // Använd rätt endpoint här
      .then((response) => response.json())
      .then((data) => setActivities(data)); // Uppdatera aktivitetsstaten med data från Mirage
      console.log(activities)
  }, []);

  function onAddActivity(id: number, title: string, content: string, date: string, maxCount: number) {
    // Skapa en ny aktivitet med de givna parametrarna
    const newActivity: Activity = {
      id,
      title,
      content,
      date,
      maxCount,
    };
  
    // Skapa en kopia av den befintliga activities-arrayen och lägg till den nya aktiviteten
    const updatedActivities = [...activities, newActivity];
  
    // Uppdatera activities-arrayen med den nya arrayen
    setActivities(updatedActivities);
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem("loggedInUser");
    if (storedUserData) {
      const user = JSON.parse(storedUserData);
      setIsLoggedIn(true);
      setLoggedInUser(user);
    }
    console.log(loggedInUser);
  }, []);

  function handleLogin(username: string, role: UserRole, activities: Activity[], password: string) {
    setIsLoggedIn(true);
    console.log('in app');
    setLoggedInUser({ username, role, activities, password });
    localStorage.setItem("loggedInUser", JSON.stringify({ username, role, activities }))
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
               
                  <BookingPage activities={activities}/> 
                
              </>
            }
          />
             <Route
            path="/admin"
            element={
              <>
                {isLoggedIn && <PageBanner {...loggedInUser} />}
               
                  <AdminPage activities={activities}/> 
                
              </>
            }
          />
                    <Route path="/add" element={<AddActivityPage activities={activities} setActivities={setActivities} onAddActivity={onAddActivity} />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
