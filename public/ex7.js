/* Often, a client-side application needs to defer work until after the
browser has finished loading the DOM. You can place such work into a
listener for the DOMContentLoaded event. But if document.readyState != 'loading',
the loading has already happened, and the event won’t fire again. Capture
both cases with a function yielding a promise, so that one can call
whenDOMContentLoaded().then(. . .) */

const { resolve } = require("path");

/* const { rejects } = require("assert")
const { resolve } = require("path")

const whenDOMContentLoaded = async() => {
  new Promise((resolve, reject) => {
    if(document.readyState != 'loading') return reject(Error('won\'t fire'))
    else return resolve()
  })
} */
function whenDOMContentLoaded() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    document.addEventListener('DOMContentLoaded', () => {
      resolve();
    });
  });
}

whenDOMContentLoaded().then(() => {
  // Work to be done after DOM content has loaded
  console.log('DOM content has loaded');
});

const urls = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  'https://example.com/image4.jpg',
  'https://example.com/image5.jpg',
  'https://example.com/image6.jpg',
];

const promises = urls.map(loadImage);

Promise.allSettled(promises)
  .then((results) => {
    for (const result of results) {
      if (result.status === 'fulfilled') {
        const image = result.value;
        // Append the loaded image into a DOM element
        document.getElementById('imageContainer').appendChild(image);
      } else {
        const error = result.reason;
        console.log('Image failed to load:', error);
      }
    }
  });

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    image.src = url;
  });
}

{
  //ex9 
  const urls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
    'https://example.com/image6.jpg',
  ];
  
  async function loadImages() {
    const promises = urls.map(loadImage);
  
    const results = await Promise.allSettled(promises);
  
    for (const result of results) {
      if (result.status === 'fulfilled') {
        const image = result.value;
        // Append the loaded image into a DOM element
        document.getElementById('imageContainer').appendChild(image);
      } else {
        const error = result.reason;
        console.log('Image failed to load:', error);
      }
    }
  }
  
  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      image.src = url;
    });
  }
  
  // Call the loadImages function to start loading and handling the images
  loadImages();
  
}

//ex10
const sleep = async(du) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, du);
  })
}