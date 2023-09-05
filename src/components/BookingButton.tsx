import React from 'react';
import axios from 'axios';
import { Activity } from '../types/Activity'; // Import the Activity type

interface BookingButtonProps {
  activity: Activity; // Define the type of the 'activity' prop
}

function BookingButton({ activity }: BookingButtonProps) {
  function handleBookActivity() {
    // Handle the booking action here
    // You can add logic to perform the booking and communicate with Mirage.js or your backend.

    // Replace with the actual user ID
    const userId = 1;

    // Create a new booking object
    const booking = {
      userId: userId,
      activityId: activity.id,
      bookedDate: new Date(),
    };

    // Send the booking information to Mirage.js or your backend
    axios.post('/bookings', booking)
      .then((response) => {
        console.log('Booking successful:', response.data);
        // You can update the user's booking list or perform any other actions here.
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