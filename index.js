// console.log("hi")
// const body = document.querySelector("body")
// const main = document.querySelector("main")
// console.log(main)

const requestApi = async () => {
  try {
    const responsePrise = await fetch(
      "https://www.asos.com/api/product/catalogue/v3/productgroups/ctl/10264367?currency=USD&keyStoreDataversion=j42uv2x-26&lang=ru-RU&sizeSchema=RU&store=RU"
    )
    const responseInfo = await fetch(
      "https://www.asos.com/api/product/catalogue/v3/productgroups/ctl/10264367?currency=USD&keyStoreDataversion=j42uv2x-26&lang=ru-RU&sizeSchema=RU&store=RU"
    )

    console.log(await responsePrise.json())
    console.log(await responseInfo.json())
  } catch (e) {
    console.log(e)
  }
}

requestApi()

const currentImg = document.querySelector(".img").src
const image = document.querySelectorAll(".gallery-image")
const information = document.querySelector(".product-hero")
const title = information.querySelector("h1").innerHTML
const currentPrise = document.querySelector(
  ".current-price.product-price-discounted"
)
const prevPrise = document.querySelectorAll(".product-prev-price")

console.log(`title: ${title}`)

console.log(`prev prise: ${prevPrise[1].innerHTML.slice(0, 5)}`)

console.log(`current prise: ${currentPrise.innerHTML.slice(0, 5)}`)

console.log(`link on currentImage: ${currentImg}`)

const arrImageSrc = Array.from(image).map((item) => item.src)
console.log(`array link image:`, arrImageSrc)
