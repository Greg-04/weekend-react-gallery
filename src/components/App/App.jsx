import GalleryList from '../GalleryList/GalleryList';

function App() {
  return (
    <div>
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      <GalleryList data-testid="galleryList" />
    </div>
  );
}

export default App;
