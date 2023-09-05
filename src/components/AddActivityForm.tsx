import { useState } from 'react';
import axios from 'axios';
import { Activity } from '../types/Activity';

interface AddActivityFormProps {
  onAddActivity: (activity: Activity) => void;
}

function AddActivityForm({ onAddActivity }: AddActivityFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [maxCount, setMaxCount] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const newActivity: Activity = {
      id: Math.random(), // Generera ett unikt ID, eller använd en annan strategi
      title,
      content,
      date,
      maxCount: parseInt(maxCount, 10),
    };

    // Skicka en POST-förfrågan till Mirage-databasen för att lägga till aktiviteten
    axios
      .post('/activities', newActivity)
      .then((response) => {
        console.log('Activity added:', response.data);
        onAddActivity(newActivity); // Skicka tillbaka den nya aktiviteten till förälderkomponenten
        // Återställ formuläret efter att aktiviteten har lagts till
        setTitle('');
        setContent('');
        setDate('');
        setMaxCount('');
      })
      .catch((error) => {
        console.error('Error adding activity:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Max Count:
        <input
          type="number"
          value={maxCount}
          onChange={(e) => setMaxCount(e.target.value)}
        />
      </label>
      <button type="submit">Add Activity</button>
    </form>
  );
}

export default AddActivityForm;
