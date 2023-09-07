import React from 'react';
import axios from 'axios';
import { Activity } from '../types/Activity';
import { User } from '../types/User';

interface BookingButtonProps {
  activity: Activity;
  updateUserActivities: (activity: Activity) => void;
  loggedInUser:User
}

function BookingButton({ activity, updateUserActivities, loggedInUser }: BookingButtonProps) {
  function handleBookActivity() {
    // Replace with the actual user ID
    const userId = loggedInUser.id;
    console.log(activity)
    // Create a new booking object
    const booking = {
      userId: userId,
      activityId: activity.id,
      bookedDate: new Date(),
    };

    // Send the booking information to your backend
    axios
      .post('/bookings', booking)
      .then((response) => {
        console.log('Booking successful:', response.data);
        const newActivity = {
          id: activity.id,
          title: activity.title,
          content: activity.content,
          date: new Date(activity.date),
          maxCount: activity.maxCount,
        };
        // After a successful booking, update the user's activities
        updateUserActivities(newActivity); // Skicka med aktiviteten som parameter
      })
      .catch((error) => {
        console.error('Error booking activity:', error);
      });
  }

  return (
    <button onClick={handleBookActivity}>Book Activity</button>
  );
}

export default BookingButton;
