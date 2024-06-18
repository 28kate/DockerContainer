import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Video } from 'cloudinary-react';

function TutVid() {
  let { id } = useParams();
  const [tutvideo, setTutvideo] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/postVid/byId/${id}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setTutvideo(response.data);
        } else if (typeof response.data === 'object') {
          setTutvideo([response.data]);
        } else {
          console.error('Invalid response data:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {tutvideo.map((tut, key) => (
        <div key={key}>
          <div>{tut.project}</div>
          <Video cloudName="duf5btydy" publicId={tut.video} controls />
          <div>{tut.description}</div>
        </div>
      ))}
    </div>
  );
}

export default TutVid;
