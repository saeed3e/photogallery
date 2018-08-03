## Photo Gallery
Demo link
https://saeed3e.github.io/photogallery/

## Login credential 
 - Photo Gallery demo
   -  Username: saeed3e@gmail.com
   -  Password: koko
	
## Features added		
* Create web layout as per design.
* Using CSS3 Grid layout feature to create responsive photo gallery.
* Lazy loading of images which is out of first fold by using Intersectionobserver API.
* Achieve 60 FPS, while transitioning from image grid view to detail view by only use of those CSS3 property(transform and opacity) which impact only on composite layer.
* Added smooth sliding effect so that user can swap left and right to see the next image.
* In photo detail view header is stick to the top and footer in stick to the bottom and image sliding area take the rest portion according to screen size by using flex property.
* Added next and prev button only on non-touchable devices.
* I have added webpack configuration so that demo can also be run on localhost by simply follow listed commands Inside the photo gallery folder.
   - npm install
   - npm start

→ Automatic demo will run on chrome browser with port 9000,
→ http://localhost:9000/

## Tested devices
    iPhone 6s(IOS), Samsung S(Android), readmi 5A

## Simulation mode testing:
    On slow 3g, fast 3g and wifi connection.
    With enabled CPU throttling by 4x, 6x

## Third party library used 
    Lozad
    Flipjs
    Swipe

## Application size (gzip)
	vendor.js → 4.98 kb
	app.js → 2.79 kb
	style.css → 842 bytes
	index.html → 530 bytes
