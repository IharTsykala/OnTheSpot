jQuery('header.product-title').text().trim()

jQuery('h1.product-single__title').text().trim()

jQuery('h1.page-title').text().trim().split(' In ')[0]

jQuery('h1[itemprop="name"]').text().trim().replace(/\r|\n/g, 'slash').split('slash')[0]
jQuery('h1[itemprop="name"]').text().trim().replace(/\r|\n/g, 'slash').split('slash')[1]
.replace(/\r|\n/g, ' ')

jQuery('h1[data-talos="labelPdpProductTitle"]').text().trim()

jQuery('h1.cd-title').text().trim()

jQuery('h1').text().trim()

jQuery('h1.title-xl span').text().trim()
jQuery('h1.title-xl').text().trim().replace(/\r|\n/g, ' ').split(' ').slice(0,2).join(' ')

jQuery('h1').text().trim() || jQuery('div[class="-vBYKX"]').text().trim()
document.querySelector('h1').innerText.trim() || document.querySelector('div[class="-vBYKX"]').innerText.trim()

-vBYKX
document.querySelectorAll("._1fhgRH ._37lU4r").innerText.trim() 
"._1fhgRH ._37lU4r"