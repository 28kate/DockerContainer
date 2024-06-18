import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [data, setData] = useState(null); // Set initial state to null
  useEffect(() => {
    fetch("http://localhost:5001/members")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data); // Log the fetched data
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  console.log(data); // Log the state

  return (
    <header>
      <div className='container header_container'>
      {data && data.name && data.status && (
          <div>
            <p>Name: {data.name}</p>
            <p>Status: {data.status}</p>
          </div>
        )}
        <h5 className='text-light'>Software Engineer</h5>
      
       
      </div>
    </header>
  );
  
}

export default Header;

