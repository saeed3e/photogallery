//Load photo Gallery component
import PhotoGallery from "./gallery/PhotoGallery.js";

// Load images data array
import { imageUrlpaths } from "./data/imagesPath.js";

// Initialize photoGallery
new PhotoGallery({
  data: imageUrlpaths
});

// const rootElem = document.createElement('div');
// rootElem.id = "root"
// document.body.appendChild(rootElem);
// ReactDOM.render(document.createElement('h1'), document.getElementById("root"));