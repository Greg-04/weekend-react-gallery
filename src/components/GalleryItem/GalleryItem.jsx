import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';

function GalleryItem({ galleryData, refreshGalleryList }) {
  //setting state for description to boolean
  const [toggleDescription, setToggleDescription] = useState(true);

  //toggle button function
  const handleToggle = () => {
    setToggleDescription(!toggleDescription);
  };

  //Axios call
  const addLikeCall = (taskId) => {
    return axios.put(`/api/gallery/like/${taskId}`);
  };

  //handle to add like
  const addLikeHandle = (id) => {
    addLikeCall(id)
      .then((response) => {
        refreshGalleryList();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div data-testid="galleryItem">
      <h3>Title: {galleryData.title}</h3>
      {toggleDescription ? (
        <div className="gallery-image">
          <img
            className="gallery-image"
            src={galleryData.url}
            alt={galleryData.title}
          />
        </div>
      ) : (
        <p className="Description" data-testid="description">
          {galleryData.description}
        </p>
      )}
      <div>
        <button data-testid="toggle" onClick={handleToggle}>
          Click for Description!
        </button>
        <button
          data-testid="like"
          onClick={(event) => addLikeHandle(galleryData.id)}>
          Love it!
        </button>
      </div>
      <div>{galleryData.likes} people love this!</div>
    </div>
  );
}

export default GalleryItem;
