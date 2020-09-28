jQuery('header.product-title').text().trim()

jQuery('h1.product-name--visible').text().trim()

jQuery('h1.product-single__title').text().trim()

jQuery('h1[itemprop="name"]').text().trim().replace(/\r|\n/g, 'slash').split('slash')[0]
jQuery('h1[itemprop="name"]').text().trim().replace(/\r|\n/g, 'slash').split('slash')[1]
.replace(/\r|\n/g, ' ')
