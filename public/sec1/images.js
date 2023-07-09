'use strict'
const addImage = (url, element) => {
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.responseType = 'blob'

  request.addEventListener('load', () => {
    if (request.status == 200) { 
      const blob = new Blob([request.response], {type: 'image/png'})
      const img = document.createElement('img')
      img.src = URL.createObjectURL(blob)
      element.appendChild(img)
    } else {
      console.log(`${request.status}: ${request.statusText}`)
    }
  })
  request.addEventListener('error', event => console.log('Network error'));
  request.send()
}

document.addEventListener('DOMContentLoaded', () => {
  const imgdiv = document.getElementById('images')
  addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Hanafuda_January_Hikari_Alt.svg/76px-Hanafuda_January_Hikari_Alt.svg.png', imgdiv)
  addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hanafuda_February_Tane_Alt.svg/76px-Hanafuda_February_Tane_Alt.svg.png', imgdiv)
  addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hanafuda_March_Hikari_Alt.svg/76px-Hanafuda_March_Hikari_Alt.svg.png', imgdiv)
  addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hanafuda_April_Tane_Alt.svg/76px-Hanafuda_April_Tane_Alt.svg.png', imgdiv)

})