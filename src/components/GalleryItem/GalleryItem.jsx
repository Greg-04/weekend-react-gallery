import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem({ galleryData }) {
  const [toggleDescription, setToggleDescription] = useState(true);

  const handleToggle = () => {
    setToggleDescription(!toggleDescription);
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
        <button data-testid="like">Love it!</button>
      </div>
      <div data-testid="like"> {galleryData.likes} people love this!</div>
    </div>
  );
}

export default GalleryItem;
