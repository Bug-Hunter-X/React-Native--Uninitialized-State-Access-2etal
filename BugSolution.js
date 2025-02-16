import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/name');
        const data = await response.json();
        setName(data.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {name ? <p>Name: {name}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MyComponent;

