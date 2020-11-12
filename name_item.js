jQuery('p.product-details__brand').text().trim()

jQuery('.product-title:first').text().trim()

jQuery('h1#title').text().trim().split(' In ')[0]

jQuery('h1[itemprop="name"]').text().trim().replace(/\r|\n/g, 'slash').split('slash')[0]
jQuery('[itemprop="name"]').text().trim().replace(/\r|\n/g, 'slash').split('slash')[1]
.replace(/\r|\n/g, ' ')

jQuery('h1[data-talos="labelPdpProductTitle"]').text().trim()
jQuery('h1').text().trim()

jQuery('.site-name img:first').attr('alt')

jQuery('h1:first').text().trim()

jQuery('h2.product-name').text().trim()
jQuery('.product__title').text().trim().replace(/\r|\n/g, ' ').split(' ').slice(0,2).join(' ')

jQuery('h2.ProductMeta__Vendor').text().trim() || jQuery('div[class="-vBYKX"]').text().trim()
document.querySelector('h1').innerText.trim() || document.querySelector('div[class="-vBYKX"]').innerText.trim()

-vBYKX
document.querySelectorAll("._1fhgRH ._37lU4r").innerText.trim() 
"._1fhgRH ._37lU4r"

document.querySelector("h1.product__title").innerText.trim() 