jQuery('meta[name="description"]').attr('content').split('&amp;').join('')

jQuery('.description .content').text().trim()

jQuery('#opis').text().trim().replace(/\r|\n/g, ' ')