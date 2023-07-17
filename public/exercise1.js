'use strict';
//ex1 & ex5
const addImage = async (url, element) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const blob = await response.blob();
      const img = document.createElement('img');
      img.src = URL.createObjectURL(blob);
      element.appendChild(img);
    } else {
      console.log(`${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.log('An error occurred while loading images.');
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  const imgdiv = document.getElementById('images');
  
  addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Hanafuda_January_Hikari_Alt.svg/76px-Hanafuda_January_Hikari_Alt.svg.png',imgdiv)
 .then(() => addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hanafuda_February_Tane_Alt.svg/76px-Hanafuda_February_Tane_Alt.svg.png', imgdiv))
 .then(() => addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hanafuda_March_Hikari_Alt.svg/76px-Hanafuda_March_Hikari_Alt.svg.png', imgdiv))
 .then(() => addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hanafuda_April_Tane_Alt.svg/76px-Hanafuda_April_Tane_Alt.svg.png', imgdiv))

  /* await addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Hanafuda_January_Hikari_Alt.svg/76px-Hanafuda_January_Hikari_Alt.svg.png', imgdiv);
  await addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hanafuda_February_Tane_Alt.svg/76px-Hanafuda_February_Tane_Alt.svg.png', imgdiv);
  await addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hanafuda_March_Hikari_Alt.svg/76px-Hanafuda_March_Hikari_Alt.svg.png', imgdiv);
  await addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hanafuda_April_Tane_Alt.svg/76px-Hanafuda_April_Tane_Alt.svg.png', imgdiv); */
});
