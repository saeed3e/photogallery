//Load photo Gallery component
import PhotoGallery from "./gallery/PhotoGallery.js";

// Load images data array
import { imageUrlpaths } from "./data/imagesPath.js";

// Initialize photoGallery
new PhotoGallery({
  data: imageUrlpaths
});
