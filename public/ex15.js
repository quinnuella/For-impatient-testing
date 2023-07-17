//const { resolve } = require("path")
/* 
const produceAfterRandomDelay = async(f, mms) => {
  new Promise(resolve => {
    const items = [1,2,3,4,5,6,7,8,9,10]
   let result = await Promise.all(setTimeout((...items) => f, Math.random()*mms)) 
  })
} */

//const { url } = require("inspector");


/* const produceAfterRandomDelay = async(f, mms) => {
  new Promise(resolve => {
    const items = [1,2,3,4,5,6,7,8,9,10]
    const cb = f(...items)
    resolve(result)
   let result = Promise.all(setTimeout(cb, Math.random()*mms)) 
  })
} */

const produceAfterRandomDelay = async(val, mms) => {
  return new Promise (resolve => {
    setTimeout(() => {
    resolve(val) 
  }, mms * Math.random());
})
}



const futures = []
for(let i=0; i<10; i++){
  futures[i] = produceAfterRandomDelay(i+1, 1000)
}

/* let result = await Promise.all(futures)
console.log(result)

 */
Promise.all(futures)
  .then((results) => {
    console.log('Results:', results);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  {
    //16!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const loadImageWithAwait = async(url) => {
      try{
        const response = await fetch(url)
        if (response.status == 200) { 
          const blob = await response.blob()
          const img = document.createElement('img')
          img.src = URL.createObjectURL(blob)
          document.body.appendChild(img)
        }
      } catch (err){
        console.log('Error loading image:', err);
      }  
    }
    
    loadImageWithAwait('https://images.squarespace-cdn.com/content/v1/57680faed2b857901c0094a3/1466525369800-VKMJ4L4681U6ECZ39G0S/Picture+009.jpg?format=750w');
  
  }



  /* //17
  const loadAllImg = async(url) => {
    const response = await fetch(url)
    const data = await response.text()
    data.then(html => {
      let matches = html.match(/<img.*?src="(.*?)"/g)
      return loadImageWithAwait(...matches)
    }) 
  }
  loadAllImg('https://cors-proxy.htmldriven.com/?url=https://www.htmldriven.com/sample.json')

 
  
 {
  const fetchPageAndLoadImages = async (url) => {
    try {
      // Fetch the HTML content of the web page
      const response = await fetch(url);
      const html = await response.text();
  
      // Create a temporary container element to parse the HTML
      const container = document.createElement('div');
      container.innerHTML = html;
  
      // Find all image elements in the parsed HTML
      const imageElements = container.querySelectorAll('img');
  
      // Load each image URL
      imageElements.forEach((img) => {
        const imageUrl = img.src;
  
        // Create an image element to load the image
        const image = new Image();
        image.onload = () => {
          // Image loaded successfully, append it to the document
          document.body.appendChild(image);
        };
        image.onerror = () => {
          // Error loading image
          console.error(`Error loading image: ${imageUrl}`);
        };
        image.src = imageUrl;
      });
    } catch (error) {
      console.error('Error fetching web page:', error);
    }
  };
  
  // Usage example
  const url = 'https://qquella.github.io/Nebengesch%C3%A4ft/sideBusiness01.html'; // Replace with the desired web page URL
  fetchPageAndLoadImages(url);
  
 }

 {
  const getImageUrls = async (html) => {
    const regex = /<img.*?src="(.*?)"/g;
    const imageUrls = [];
    let match;
  
    while ((match = regex.exec(html)) !== null) {
      imageUrls.push(match[1]);
    }
  
    return imageUrls;
  };
  
  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  };
  
  const loadImagesFromWebPage = async (url) => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const imageUrls = await getImageUrls(html);
  
      const imageElements = await Promise.all(imageUrls.map(loadImage));
      
      // Append the loaded images to the document or perform any other desired action
      const imageContainer = document.getElementById('image-container');
      imageElements.forEach((img) => {
        imageContainer.appendChild(img);
      });
    } catch (error) {
      console.error('Error loading web page:', error);
    }
  };
  
  // Example usage:
  loadImagesFromWebPage('https://openstax.org/books/calculus-volume-3/pages/5-6-calculating-centers-of-mass-and-moments-of-inertia');
  
 } */


/*  //18
 class CancellationToken {
  constructor() {
    this.cancelled = false;
    this.listeners = [];
  }

  cancel() {
    this.cancelled = true;
    this.listeners.forEach((listener) => listener());
  }

  throwIfCancellationRequested() {
    if (this.cancelled) {
      throw new Error('Cancellation requested.');
    }
  }

  register(listener) {
    this.listeners.push(listener);
  }

  unregister(listener) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }
}

const fetchImages = async (url, token) => {
  token.throwIfCancellationRequested();

  try {
    const response = await fetch(url);
    // Perform further processing
    // ...
  } catch (error) {
    if (error.message === 'Cancellation requested.') {
      console.log('Fetch operation cancelled.');
    } else {
      console.error('Error fetching images:', error);
    }
  }
};

const token = new CancellationToken();

// Register cancellation listener
token.register(() => {
  console.log('Cancellation requested.');
});

// Start the fetchImages operation
const images = fetchImages('https://images.squarespace-cdn.com/content/v1/57680faed2b857901c0094a3/1466525369800-VKMJ4L4681U6ECZ39G0S/Picture+009.jpg?format=750w', token);

// Later, if you want to cancel the operation
token.cancel();
 */