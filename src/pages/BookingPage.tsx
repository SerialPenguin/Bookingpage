import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../types/Activity';

function BookingPage(): JSX.Element {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Fetch activities from your Mirage.js server
    axios.get<Activity[]>('/activities') // Assuming your Mirage.js server responds to '/activities' route
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  // Filtrera aktiviteter med maxCount > 0
  const filteredActivities = activities.filter((activity) => activity.maxCount > 0);

  return (
    <div>
      <h2>BookingPage</h2>
      <h3>Activities:</h3>
      <ul>
        {filteredActivities.map((activity) => (
          <li key={activity.id}>
            <h4>{activity.title}</h4>
            <p>{activity.content}</p>
            <p>Date: {new Date(activity.date).toLocaleDateString('en-GB')}</p>
            <p>Max Count: {activity.maxCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingPage;


