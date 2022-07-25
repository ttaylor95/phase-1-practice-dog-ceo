//console.log('%c HI', 'color: firebrick')

//write javascript that fetches the images, parses the response as json

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then( resp => resp.json())
.then(images =>{
    const imgs = imgs.map((img) =>{
        let i = `<img src=${img}>`
        return i
    })

    imgsArray.forEach(element =>{
        container.innerHTML += element 
    })
})