import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  // - videos: El valor del estado.
  // - setVideos: Función que permite actulizar el estado.
  const [ videos, setVideos ] = useState([]);//useState({ "mylist": [], "trends":[], "originals": []});
  
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;