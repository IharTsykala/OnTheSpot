jQuery('meta[name="description"]').attr('content').replace(/\r|\n/g, '').split('&amp;').join('')

jQuery('[itemprop="description"]:first').text().trim()

jQuery('#goto-description').text().trim().replace(/\r|\n/g, ' ')

jQuery('.description').text().trim().replace(/\r|\n/g, '. ').split(':')[0]

jQuery('.p-b:first ul').text().trim().replace(/\r|\n/g, '. ')
product-usps