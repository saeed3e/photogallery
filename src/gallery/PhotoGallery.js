/**
 * Open Source library: To lazy load the images using IntersectionObserver API
 * Ref: https://github.com/ApoorvSaxena/lozad.js
 */
import lozad from "lozad";

/**
 * Open Source library: To enable smoothe transition to achieve 60 FPS,
 * While animation only composite layer will impact
 * Ref: https://github.com/googlearchive/flipjs
 */
import "./../lib/flip.js";

/**
 * Open Source library: To enable swipe functionality on touce devices
 * Ref: https://github.com/thebird/Swipe
 */
import { Swipe } from "./../lib/swipe-Vanilla.js";

// Import all icons required in application
import * as icons from "./../icons/icons.js";

// Load images from given context
const images = require.context("./../images");

// Import style for photo gallery component
import "./../style/style.scss";

// To store carousel plugni Instance
let carouselInstance = null;

export default class PhotoGallery {
  constructor({ data }) {
    // define variable
    this.imagePaths = data;

    //Initialize photo Gllery
    this.init();
  }

  init = () => {
    // Create image grid
    this.createImageGrid();

    //Initialize imageViewerContainer
    this.imageViewerContainer();

    // // //init silder
    this.initImageCarousel();

    //Using event delegation concept listen click event on image
    this.bindEvent();

    // //init lazy loading of images
    this.initImageLazyloading();

    //Reset crousel when orientation change, to repositioning the placement of images
    window.addEventListener("orientationchange", () => {
      this.initImageCarousel();
    });
  };

  bindEvent = () => {
    // Get the imageViewer root node
    const elem = document.querySelector("#imageCont");

    // Initialize flip library.
    // Used to achieve smooth animation and achieve 60 FPS.
    window.flip = new FLIP({
      element: elem
    });

    //Attached event listner on prev and next button to enable image slide functionality on non-touch devices, like desktop
    const nextPrevTag = document.querySelector('.nextPrev');
    if(nextPrevTag){
        nextPrevTag.querySelector('.prev').addEventListener('click',()=>{
            carouselInstance.prev();
        });
        nextPrevTag.querySelector('.next').addEventListener('click',()=>{
            carouselInstance.next();
        })
    }

    // Attached a single click handler on parnet of images grid layout
    // to listen click event on image tag by vanialla(core) javascript event delegation concepts
    document
      .querySelector(".imageGridContainer")
      .addEventListener("click", e => {
        if (e.target.nodeName == "IMG") {
          //Get the target Image index
          const targetImageIndex = parseInt(e.target.getAttribute("index"));

          //Get the image to which is shown in image viewer container
          const targetImageTobeViewed = elem.querySelectorAll(".imgWrap img")[
            targetImageIndex
          ];

          // Check if somehow 'image lazyloaded plugin' unable to set the src of alreay loaded image
          // on the image which to be shown inside imageViewer, then set the src.
          if (!targetImageTobeViewed.dataset.loaded) {
            targetImageTobeViewed.src = e.target.dataset.src;
          }

          // Off the view scroll.
          document.body.style.overflowY = "hidden";

          // Jump to image on which user click by carousel plugin.
          carouselInstance.slide(targetImageIndex);

          // Get Initial(hidden position) co-ordinates of imageViewer
          flip.first();
          // Get Final(visible position) co-ordinates of imageViewer
          flip.last("lastPosition");
          // Revert to initial(hidden) position
          flip.invert();
          // Play the visible animation
          flip.play();

          // attach event on cross button
          elem.querySelector(".cross").addEventListener("click", () => {
            // Reset the window scroll
            document.body.style.overflowY = "auto";
            // Revent back the image viewer to its initial(hidden) position
            elem.classList.remove("lastPosition");
            // Play the hidden animation
            flip.play();
          });
        }
      });
  };

  /**
   * Create image template with added lazy loaded attributes (class="lozad", data-src="image path")
   */
  createImage = ({ path, alt = "", index }) => {
    const {mobile,  desktop} = path;

    const mobileSrc = images("./" + mobile);
    const desktopSrc = images("./" + desktop);

    return `<img class="lozad" data-src="${mobileSrc}" data-srcset="${desktopSrc} 1024w, ${mobileSrc} 680w" index="${index}" alt="${alt}" src="${
      icons.loader
    }"/>`;
  };

  /**
   * Generate image's slider template
   */
  imageSlider = ({ path, alt, index }) => {
    const _images = this.imagePaths.map((val, index) => {
      return `<div class="imgWrap">
                  ${this.createImage({ path: val, index, alt })}
              </div>`;
    });
    return `<div id="mySwipe" class='swipe'>
                <div class='swipe-wrap'>
                  ${_images.join("")}
                </div>
            </div>`;
  };

  /**
   * Create header template for both screen/section
   */
  header = ({ title = "Lounge" } = {}) => {
    return `<header>
                  ${title}
                  <img class="icon cross lozad" data-src="${icons.cross}"/>
              </header>`;
  };

  /**
   * Create footer template for image viewer section
   */
  footer = () => {
    return `<div class="nextPrev">
                <img width="60" class="prev" src="${icons.prev}"/>
                <img width="60" class="next" src="${icons.next}"/>
            </div>
            <footer>
              <img class="icon lozad" data-src="${icons.plusOne}"/>
              <img class="icon lozad" data-src="${icons.comment}"/>
              <img class="icon lozad" data-src="${icons.plus}"/>
              <img class="icon lozad" data-src="${icons.share}"/>
          </footer>`;
  };

  /**
   * Create imageViewer template
   */
  imageViewer = path => {
    return `<div id="imageCont" class="imageCont">
                ${this.header()}
                ${this.imageSlider({ path })}
                ${this.footer()}
            </div>`;
  };

  injectTemplateInBody = template => {
    // Create a documentFragment of imageViewer
    const templateFragment = document
      .createRange()
      .createContextualFragment(template);
    // Append created templateFragment in body tag.
    document.body.appendChild(templateFragment);
  };

  /**
   * Create Image viewer template and append in body tag
   */
  imageViewerContainer = () => {
    //Get the imageview template
    const imageViewerTemplate = this.imageViewer();

    // Inject created template in body
    this.injectTemplateInBody(imageViewerTemplate);
  };

  /**
   * This function is to create imageViewer template and append in body tag.
   */
  createImageGrid = () => {
    // Generate all the images as per data provided
    const grids = this.imagePaths.map((path, index) => {
      return `<figure>${this.createImage({ path, index })}</figure>`;
    });

    // Create imageGrid template with header and genrated images.
    const template = `<header>Image gallery</header>
                      <section class="imageGridContainer">
                          ${grids.join("")}
                      </section>`;

    // Inject created template in body
    this.injectTemplateInBody(template);
  };

  /**
   * this function is to enabled swipe feature on images inside imageViewer
   */
  initImageCarousel = (currentImageIndex = 0) => {
    //get the carousel root tag to enable swipe feature
    const elem = document.getElementById("mySwipe");
    if (elem) {
      carouselInstance = Swipe(elem, {
        // Init swipe functionality
        continuous: false,
        startSlide: currentImageIndex, //  index position Swipe should start at
        callback: function(index, elem) {
          // to be invoked at each slide change.
          //Set the src of already loaded images in image viewer section too
          const imgElm = elem.querySelector("img");
          imgElm.src = imgElm.dataset.src;
        }
      });
    }
  };

  /**
   * this function is to initialize image lazy laoding furntionality by "lozad" funtion
   */
  initImageLazyloading = () => {
    //Open source plugin to enabled image lazy loading feature.

    const observer = lozad(".lozad", {
      // lazy loads elements with default selector as '.lozad'

      loaded: function(el) {
        // This function envoke for each loaded image

        //Set the image width and height dimention to 100%, for better visibility of images inside grid system layout
        if (!el.classList.contains("icon")) {
          el.style.width = "100%";
          el.style.height = "100%";
        }
      }
    });
    //Start observering
    observer.observe();
  };
}
