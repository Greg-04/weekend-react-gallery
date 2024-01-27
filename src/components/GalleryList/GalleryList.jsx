import { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
import axios from 'axios';
import './GalleryList.css';

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
    <main>
      <h2>Gallery List</h2>
      {galleryList.map((galleryData, dataIndex) => {
        return (
          <div key={dataIndex}>
            <h3>Title: {galleryData.title}</h3>
            <div>
              <img
                className="gallery-image"
                src={galleryData.url}
                alt={galleryData.title}
              />
            </div>
            <p>{galleryData.description}</p>
            <button>Love it!</button>
            <span> {galleryData.likes} </span>
          </div>
        );
      })}
    </main>
  );
}

export default GalleryList;
