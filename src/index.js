//Load photo Gallery component
import PhotoGallery from "./PhotoGallery.js";

// Load images data array
import { imageUrlpaths } from "./imagesPath.js";

// Initialize photoGallery
new PhotoGallery({
  data: imageUrlpaths
});
