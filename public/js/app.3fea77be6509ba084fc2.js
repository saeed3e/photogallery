(self.webpackChunkphotogallary=self.webpackChunkphotogallary||[]).push([[143],{8344:(e,t,a)=>{"use strict";var s=a(7059),i=a.n(s),o=(a(7485),a(3703)),p=a(1181),c=a(2116),r=a(8152),n=a(385),g=a(5747),d=a(4696),l=a(3261),m=a(8970);function u(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function b(e,t,a){return t&&u(e.prototype,t),a&&u(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=a(6303),x=null,k=null;new(b((function e(t){var a=this,s=t.data;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,"init",(function(){a.loadPlacholderImage(),a.createImageGrid(),a.imageViewerContainer(),a.initImageCarousel(),a.bindEvent(),a.initImageLazyloading(),window.addEventListener("orientationchange",(function(){a.initImageCarousel()}))})),j(this,"prevNext_button_handler",(function(){var e=document.querySelector(".nextPrev");e&&(document.onkeydown=function(e){switch(e.keyCode){case 37:x.prev();break;case 39:x.next()}},e.querySelector(".prev").addEventListener("click",(function(){x.prev()})),e.querySelector(".next").addEventListener("click",(function(){x.next()})))})),j(this,"bindEvent",(function(){var e=document.querySelector("#imageCont");window.flip=new FLIP({element:e}),a.prevNext_button_handler(),document.querySelector(".imageGridContainer").addEventListener("click",(function(t){if("IMG"==t.target.nodeName){var a=parseInt(t.target.getAttribute("index")),s=e.querySelectorAll(".imgWrap img")[a];s.dataset.loaded||(s.src=t.target.dataset.src),document.body.style.overflowY="hidden",x.slide(a),flip.first(),flip.last("lastPosition"),flip.invert(),flip.play(),e.querySelector(".cross").addEventListener("click",(function(){document.body.style.overflowY="auto",e.classList.remove("lastPosition"),flip.play()}))}}))})),j(this,"createImage",(function(e){var t=e.path,a=e.alt,s=void 0===a?"":a,i=e.index,o=e._class,p=t.mobile,c=t.desktop,r=f("./"+p),n=f("./"+c);return"<img class=".concat("lozad "+o,' data-src="').concat(r,'" data-srcset="').concat(n," 1024w, ").concat(r,' 680w" index="').concat(i,'" alt="').concat(s,'" src="').concat(d,'"/>')})),j(this,"imageSlider",(function(e){e.path;var t=e.alt,s=(e.index,a.imagePaths.map((function(e,s){return'<div class="imgWrap">\n                  '.concat(a.createImage({path:e,index:s,alt:t,_class:"detailView"}),"\n              </div>")})));return"<div id=\"mySwipe\" class='swipe'>\n                <div class='swipe-wrap'>\n                  ".concat(s.join(""),"\n                </div>\n            </div>")})),j(this,"header",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,a=void 0===t?"Lounge":t;return"<header>\n                  ".concat(a,'\n                  <img class="icon cross lozad" data-src="').concat(g,'"/>\n              </header>')})),j(this,"footer",(function(){return'<div class="nextPrev">\n                <img width="60" class="prev" src="'.concat(m,'"/>\n                <img width="60" class="next" src="').concat(l,'"/>\n            </div>\n            <footer>\n              <img class="icon lozad" data-src="').concat(p,'"/>\n              <img class="icon lozad" data-src="').concat(c,'"/>\n              <img class="icon lozad" data-src="').concat(r,'"/>\n              <img class="icon lozad" data-src="').concat(n,'"/>\n          </footer>')})),j(this,"imageViewer",(function(e){return'<div id="imageCont" class="imageCont">\n                '.concat(a.header(),"\n                ").concat(a.imageSlider({path:e}),"\n                ").concat(a.footer(),"\n            </div>")})),j(this,"injectTemplateInBody",(function(e){var t=document.createRange().createContextualFragment(e);document.body.appendChild(t)})),j(this,"imageViewerContainer",(function(){var e=a.imageViewer();a.injectTemplateInBody(e)})),j(this,"createImageGrid",(function(){var e=a.imagePaths.map((function(e,t){return"<figure>".concat(a.createImage({path:e,index:t}),"</figure>")})),t='<header>Image gallery</header>\n                      <section class="imageGridContainer">\n                          '.concat(e.join(""),"\n                      </section>");a.injectTemplateInBody(t)})),j(this,"initImageCarousel",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.getElementById("mySwipe");t&&(x=(0,o.o)(t,{continuous:!1,startSlide:e,callback:function(e,t){var a=t.querySelector("img");a.src=a.dataset.src}}))})),j(this,"loadPlacholderImage",(function(){var e=new Image;e.src=d,e.onload=function(){k.observe()}})),j(this,"initImageLazyloading",(function(){k=i()(".lozad")})),this.imagePaths=s,this.init()})))({data:[{mobile:"mobile/a1.jpeg",desktop:"desktop/a1-2x.jpeg"},{mobile:"mobile/a2.jpeg",desktop:"desktop/a2-2x.jpeg"},{mobile:"mobile/a3.jpeg",desktop:"desktop/a3-2x.jpeg"},{mobile:"mobile/a4.jpeg",desktop:"desktop/a4-2x.jpeg"},{mobile:"mobile/a5.jpeg",desktop:"desktop/a5-2x.jpeg"},{mobile:"mobile/a6.jpeg",desktop:"desktop/a6-2x.jpeg"},{mobile:"mobile/a7.jpeg",desktop:"desktop/a7-2x.jpeg"},{mobile:"mobile/a8.jpg",desktop:"desktop/a8-2x.jpg"},{mobile:"mobile/a9.jpeg",desktop:"desktop/a9-2x.jpeg"},{mobile:"mobile/a10.jpeg",desktop:"desktop/a10-2x.jpeg"},{mobile:"mobile/a11.jpeg",desktop:"desktop/a11-2x.jpeg"},{mobile:"mobile/a12.jpg",desktop:"desktop/a12-2x.jpg"},{mobile:"mobile/a13.jpg",desktop:"desktop/a13-2x.jpg"},{mobile:"mobile/a14.jpg",desktop:"desktop/a14-2x.jpg"},{mobile:"mobile/a15.jpeg",desktop:"desktop/a15-2x.jpeg"},{mobile:"mobile/a16.jpeg",desktop:"desktop/a16-2x.jpeg"},{mobile:"mobile/a17.jpeg",desktop:"desktop/a17-2x.jpeg"},{mobile:"mobile/a18.jpeg",desktop:"desktop/a18-2x.jpeg"},{mobile:"mobile/a19.jpeg",desktop:"desktop/a19-2x.jpeg"},{mobile:"mobile/a20.jpeg",desktop:"desktop/a20-2x.jpeg"}]})},6303:(e,t,a)=>{var s={"./comment.svg":2116,"./cross.svg":5747,"./desktop/a1-2x.jpeg":8374,"./desktop/a10-2x.jpeg":3613,"./desktop/a11-2x.jpeg":3174,"./desktop/a12-2x.jpg":2327,"./desktop/a13-2x.jpg":7558,"./desktop/a14-2x.jpg":8907,"./desktop/a15-2x.jpeg":2835,"./desktop/a16-2x.jpeg":3230,"./desktop/a17-2x.jpeg":6334,"./desktop/a18-2x.jpeg":415,"./desktop/a19-2x.jpeg":4601,"./desktop/a2-2x.jpeg":2245,"./desktop/a20-2x.jpeg":8431,"./desktop/a3-2x.jpeg":294,"./desktop/a4-2x.jpeg":8654,"./desktop/a5-2x.jpeg":509,"./desktop/a6-2x.jpeg":4060,"./desktop/a7-2x.jpeg":292,"./desktop/a8-2x.jpg":2816,"./desktop/a9-2x.jpeg":977,"./mobile/a1.jpeg":7566,"./mobile/a10.jpeg":3355,"./mobile/a11.jpeg":4058,"./mobile/a12.jpg":4227,"./mobile/a13.jpg":5991,"./mobile/a14.jpg":3990,"./mobile/a15.jpeg":1910,"./mobile/a16.jpeg":3747,"./mobile/a17.jpeg":2364,"./mobile/a18.jpeg":8696,"./mobile/a19.jpeg":6649,"./mobile/a2.jpeg":4191,"./mobile/a20.jpeg":8203,"./mobile/a3.jpeg":3996,"./mobile/a4.jpeg":725,"./mobile/a5.jpeg":3363,"./mobile/a6.jpeg":2598,"./mobile/a7.jpeg":143,"./mobile/a8.jpg":8846,"./mobile/a9.jpeg":3917,"./next.png":3261,"./placeholderImage.png":4696,"./plus.svg":8152,"./plusOne.svg":1181,"./preloader.svg":4271,"./prev.png":8970,"./share.svg":385};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=o,e.exports=i,i.id=6303},2116:(e,t,a)=>{"use strict";e.exports=a.p+"images/c11515b705aaae11a40d.svg"},5747:(e,t,a)=>{"use strict";e.exports=a.p+"images/d8a123b58426f2052b85.svg"},8374:(e,t,a)=>{"use strict";e.exports=a.p+"images/35c2114d924e672d4952.jpeg"},3613:(e,t,a)=>{"use strict";e.exports=a.p+"images/f033b0a6f0cc252f8ff0.jpeg"},3174:(e,t,a)=>{"use strict";e.exports=a.p+"images/616e7da752caabbbfe23.jpeg"},2327:(e,t,a)=>{"use strict";e.exports=a.p+"images/18fb788867df25890196.jpg"},7558:(e,t,a)=>{"use strict";e.exports=a.p+"images/02bd39b5234ff09d9e03.jpg"},8907:(e,t,a)=>{"use strict";e.exports=a.p+"images/e8374f0f45713d27a03a.jpg"},2835:(e,t,a)=>{"use strict";e.exports=a.p+"images/f8063d57c8dca23df3dc.jpeg"},3230:(e,t,a)=>{"use strict";e.exports=a.p+"images/aad293a172fdd421dc17.jpeg"},6334:(e,t,a)=>{"use strict";e.exports=a.p+"images/6b552e27047bcec5e36a.jpeg"},415:(e,t,a)=>{"use strict";e.exports=a.p+"images/1509350f42e16f096e16.jpeg"},4601:(e,t,a)=>{"use strict";e.exports=a.p+"images/9477fe4989c4be9c1d87.jpeg"},2245:(e,t,a)=>{"use strict";e.exports=a.p+"images/20180b394d970fc5d0c6.jpeg"},8431:(e,t,a)=>{"use strict";e.exports=a.p+"images/65886d80fb471bcb4ed4.jpeg"},294:(e,t,a)=>{"use strict";e.exports=a.p+"images/c148a1d15674018458cc.jpeg"},8654:(e,t,a)=>{"use strict";e.exports=a.p+"images/59cb12a23ff8a58ce7cc.jpeg"},509:(e,t,a)=>{"use strict";e.exports=a.p+"images/6fab9118c7e856ace86c.jpeg"},4060:(e,t,a)=>{"use strict";e.exports=a.p+"images/805a6c6e55962412f85e.jpeg"},292:(e,t,a)=>{"use strict";e.exports=a.p+"images/5d28067f681998468043.jpeg"},2816:(e,t,a)=>{"use strict";e.exports=a.p+"images/daae197d6c457104532c.jpg"},977:(e,t,a)=>{"use strict";e.exports=a.p+"images/24219be5495caf56c2b4.jpeg"},7566:(e,t,a)=>{"use strict";e.exports=a.p+"images/9d10f07b0844851a868d.jpeg"},3355:(e,t,a)=>{"use strict";e.exports=a.p+"images/727404d186133d60bc2a.jpeg"},4058:(e,t,a)=>{"use strict";e.exports=a.p+"images/fa809907a1b6ab8ae156.jpeg"},4227:(e,t,a)=>{"use strict";e.exports=a.p+"images/1aac7ec31357ed2ae5e5.jpg"},5991:(e,t,a)=>{"use strict";e.exports=a.p+"images/8bbcee352e940ccccb5a.jpg"},3990:(e,t,a)=>{"use strict";e.exports=a.p+"images/3829902f04af3890c34f.jpg"},1910:(e,t,a)=>{"use strict";e.exports=a.p+"images/43068523e1029b45657b.jpeg"},3747:(e,t,a)=>{"use strict";e.exports=a.p+"images/ed66941718496b089c1a.jpeg"},2364:(e,t,a)=>{"use strict";e.exports=a.p+"images/0565646cb389de5dde6c.jpeg"},8696:(e,t,a)=>{"use strict";e.exports=a.p+"images/1526f044982c7f223488.jpeg"},6649:(e,t,a)=>{"use strict";e.exports=a.p+"images/0926ef44adbc9cefe105.jpeg"},4191:(e,t,a)=>{"use strict";e.exports=a.p+"images/55767f10470cf5612498.jpeg"},8203:(e,t,a)=>{"use strict";e.exports=a.p+"images/5138d31698311e0b23d5.jpeg"},3996:(e,t,a)=>{"use strict";e.exports=a.p+"images/e6f436da4cd66bfcd49b.jpeg"},725:(e,t,a)=>{"use strict";e.exports=a.p+"images/37411e394c4e8ed00efc.jpeg"},3363:(e,t,a)=>{"use strict";e.exports=a.p+"images/65ecad89018a19e90b28.jpeg"},2598:(e,t,a)=>{"use strict";e.exports=a.p+"images/634de00daafa1bba9e11.jpeg"},143:(e,t,a)=>{"use strict";e.exports=a.p+"images/ccd2378a7fb8f2141f51.jpeg"},8846:(e,t,a)=>{"use strict";e.exports=a.p+"images/79f453c0e1519f64ddd7.jpg"},3917:(e,t,a)=>{"use strict";e.exports=a.p+"images/287828595be2d4b8e9cf.jpeg"},3261:(e,t,a)=>{"use strict";e.exports=a.p+"images/169a13c4ed5f0210ae8e.png"},4696:(e,t,a)=>{"use strict";e.exports=a.p+"images/a707c6235f460ce11f28.png"},8152:(e,t,a)=>{"use strict";e.exports=a.p+"images/8c9f874d1dbdb7dd325a.svg"},1181:(e,t,a)=>{"use strict";e.exports=a.p+"images/7955b3d6e01bdaf47938.svg"},4271:(e,t,a)=>{"use strict";e.exports=a.p+"images/1786504d66f9c53f6f6f.svg"},8970:(e,t,a)=>{"use strict";e.exports=a.p+"images/e44201f3529c436215ec.png"},385:(e,t,a)=>{"use strict";e.exports=a.p+"images/a19a03c318e07015758c.svg"}},e=>{e.O(0,[216],(()=>(8344,e(e.s=8344)))),e.O()}]);
//# sourceMappingURL=app.3fea77be6509ba084fc2.js.map