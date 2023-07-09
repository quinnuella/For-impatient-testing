'use strict'
const loadImage = url => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    const callback = () => {
      if (request.status === 200) { 
        const blob = new Blob([request.response], {type: 'image/png'})
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        resolve(img)
      } else {
        reject(Error(`${request.status}: ${request.statusText}`))
      }
    }

    request.open('GET', url)
    request.responseType = 'blob'
    request.addEventListener('load', callback)
    request.addEventListener('error', event => reject(Error('Network error')));
    request.send()
  })  
}

document.addEventListener('DOMContentLoaded', () => {
  const imgdiv = document.getElementById('images')
  const promise = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Hanafuda_January_Hikari_Alt.svg/76px-Hanafuda_January_Hikari_Alt.svg.png')
  console.log({promise})
  promise.then(img => {
    imgdiv.appendChild(img)
    console.log({promise})
  })
})