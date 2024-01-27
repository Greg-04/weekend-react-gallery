import './GalleryItem.css';

function GalleryItem({ galleryData }) {
  return (
    <div data-testid="galleryItem">
      <h3>Title: {galleryData.title}</h3>
      <div className="gallery-image">
        <img
          className="gallery-image"
          src={galleryData.url}
          alt={galleryData.title}
        />
      </div>
      <p data-testid="description">{galleryData.description}</p>
      <button data-testid="like">Love it!</button>
      <div data-testid="like"> {galleryData.likes} people love this!</div>
    </div>
  );
}

export default GalleryItem;
