import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';

const fetchGalleryList = () => {
  return axios.get('/api/gallery');
};

function GalleryList() {
  const [galleryList, setGalleryList] = useState([]);

  const refreshGalleryList = () => {
    //api call
    const listPromise = fetchGalleryList();
    listPromise
      //success
      .then((response) => {
        console.log('Server Data:', response.data);
        setGalleryList(response.data);
      })
      //failure
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  //initial load of component
  useEffect(() => {
    //body of effect
    console.log('Hi');
    //api call
    refreshGalleryList();
  }, []);

  return (
    <main data-testid="galleryList">
      <h2>Gallery List</h2>
      {galleryList.map((galleryData, dataIndex) => (
        <GalleryItem
          data-testid="galleryItem"
          key={dataIndex}
          galleryData={galleryData}
        />
      ))}
    </main>
  );
}

export default GalleryList;
