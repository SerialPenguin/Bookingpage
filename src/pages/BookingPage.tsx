

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../types/Activity';
import BookingButton from '../components/BookingButton';


interface BookinPageProps{
  activities: Activity[];
  
}
function BookingPage(props:BookinPageProps): JSX.Element {
  //const [activities, setActivities] = useState<Activity[]>([]);
  const { activities} = props;
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  
  return (
    <div>
      <h2>BookingPage</h2>
      <h3>Activities:</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h4>{activity.title}</h4>
            <p>{activity.content}</p>
            <p>Date: {new Date(activity.date).toLocaleDateString('en-GB')}</p>
            <p>Max Count: {activity.maxCount}</p>
            {/* Pass the activity as a prop to BookingButton */}
            <BookingButton activity={activity} />
          </li>
        ))}
      </ul>
      
      
    </div>
  );
}

export default BookingPage;
