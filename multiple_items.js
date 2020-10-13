list_view
if (
  jQuery("#products ul li.storm-item").length > 0 &&
  jQuery('.slick-track img[itemprop="image"]').length === 0
) {
  $arr = []

  jQuery("#products ul li.storm-item").each(function () {
    $title = jQuery(this).find(".pro_txt h3 a").text().trim().replace(/\r|\n/g, 'slash').split('slash')[0]

    $img =
    "https://stormfashion.dk" + (jQuery(this).find(".pro_img img").attr("data-original") ||
      jQuery(this).find(".pro_img img").attr("src"))

    $link =
    'https://stormfashion.dk' +
      jQuery(this).find(".pro_img a").attr("href")

    $price = 'Click on the goods' + jQuery(this).find(".product__price .money:first").text().trim()
    if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}
grid-view-item__link grid-view-item__image-container full-width-link
product_img product_img--first
grid__item grid__item--collection-template small--one-half medium-up--one-quarter pro_box product_box product-item

ProductList
ProductItem
inner product-item  on-sale wow fadeIn

if (
  jQuery(".ProductList .ProductItem").length > 0 &&
  jQuery(".Product__Slideshow").length === 0
) {
  $arr = []

  jQuery(".ProductList .ProductItem").each(function () {
    $title = jQuery(this).find("h2.ProductItem__Title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find("noscript:first")
        .text()
        .trim()
        .split(" ")[3]
        .slice(5, -1)

    $link =
      "https://www.lakenzie.com/" +
      jQuery(this).find("h2.ProductItem__Title a:first").attr("href")

    $price = jQuery(this).find(".ProductItem__Price .money:first").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery("#gf-products .grid-product").length > 0 &&
  jQuery('img#mainimage:first').length === 0
) {
  $arr = []

  jQuery("#gf-products .grid-product").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] || 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    ('https:' + 
      ((jQuery(this).find(".grid__image-ratio:first").attr('data-bgset') ||
        jQuery(this).find(".grid__image-ratio:first").next().attr('data-bgset'))).trim().split(' ')[0].slice(0, -1))

    $link =
    'https://minimale-animale.com/' +
      jQuery(this).find(".grid-product__content a:first").attr("href")

    $price = jQuery(this).find(".grid-product__price .money:first").text().trim()
    // if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

grid__image-ratio grid__image-ratio--portrait lazyloaded
{/* <img class="grid-product__image" src="//cdn.shopify.com/s/files/1/2941/5212/products/SicilianCosmo_1024x.png?v=1590089983" alt="Sicilian Cosmo Flower"> */}
          

if (
  jQuery("#search-result-items article").length > 0 &&
  jQuery("ul.product-images__thumbnails__container").length === 0
) {
  $arr = []

  jQuery("#search-result-items article").each(function () {
    $title = jQuery(this).find(".product-tile__name").text().trim()

    $img =
      
      jQuery(this).find("img.plp__products__item__image").attr("data-src") || jQuery(this).find("img").attr("src")

    $link =
      
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product-tile__price").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery(".searchResultContent .result").length > 0 &&
  jQuery(".m-tp-productimagegallery-thumbnails-wrapper img").length === 0
) {
  $arr = [];

  jQuery(".searchResultContent .result").each(function () {
    $title = jQuery(this).find(".m-tp-productbox002-title-text").text().trim();

    $img = 'https://www.tchibo.de' + jQuery(this).find("img:first").attr("src") ||
    'https://www.tchibo.de' + jQuery(this).find("figure.cp-image img:first").attr("data-src") 

    $link = 'https://www.tchibo.de' + jQuery(this).find("a:first").attr("href").slice(1);

    $price = '€' + (jQuery(this).find('.c-tp-price-currentprice:first').text().trim().slice(0, -2) + '.' + (
      jQuery(this).find('.c-tp-price-currentprice:first sup').text().trim() || '00'))
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}



if (
  jQuery(".kategorija-izdelki .izdelek_osnutek").length > 0 &&
  jQuery(".img#slika_izdelka").length === 0
) {
  $arr = [];

  jQuery(".kategorija-izdelki .izdelek_osnutek").each(function () {
    $title = jQuery(this).find(".naslov a:first").text().trim();

    $img = 'https://www.ideo.si' + jQuery(this).find("img:first").attr("src") ||
    'https://www.ideo.si' + jQuery(this).find("img:first").attr("data-original") 

    $link = 'https://www.ideo.si' + jQuery(this).find(".naslov a:first").attr("href");

    $price = '€' + (jQuery(this).find('.cena').text().trim().split(' ')[0])
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

product-index desktop-4 first tablet-half mobile-half

if (
  jQuery("[class='  main-ccon'] .main-productlistbox").length > 0 &&
  jQuery("img.zoomImg").length === 0
) {
  $arr = [];

  jQuery("[class='  main-ccon'] .main-productlistbox").each(function () {
    $title = jQuery(this).find(".caption-name").text().trim();

    $img = jQuery(this).find("img:first").attr("src")

    $link = 'https://www.enaa.com' + jQuery(this).find("a:first").attr("href");

    $price = '€' + jQuery(this).find('.enaa-cena').text().replace(/\r|\n/g, '').trim().split(' ')[0]
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}
"https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/asus-vivobook-14-k413fa-ek695t(1013292)_394546_1_Normal_Large.webp"
"https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/lenovo-ip-3-15ada05-81w100ecmx(1013302)_390326_10_Normal_Large.webp"
row product-grid grid-tile-container gtm-container gtm-container-initialized

if (
  jQuery(".CollectionMain .ProductList .ProductItem").length > 0 &&
  jQuery(".Product__Slideshow .Product__SlideItem:first img:first").length === 0
) {
  $arr = [];

  jQuery(".CollectionMain .ProductList .ProductItem").each(function () {
    $title = jQuery(this).find("ProductItem__Title a").text().trim();

    $img = 
    'https:' + 
    (jQuery(this).find("source").attr('srcset')
    || jQuery(this).find("img.ProductItem__Image:first").attr('srcset')
     || jQuery(this).find("img.ProductItem__Image:last").attr('srcset')
     ||jQuery(this).find(".product__img").next().text().trim().split('src="')[1]).split(' ')[0].slice(0, -1) 
     

    $link = 'https://www.shopbeergear.com' + jQuery(this).find("a.product-link").attr("href");

    $price = jQuery(this).find(".product__price-price .money:first").text().trim() || jQuery(this).find(".product__price-price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
    
  $arr;
}


if (
  jQuery(".CollectionMain .ProductList .ProductItem__Wrapper").length > 0 
  &&
  jQuery(".Product__Slideshow .Product__SlideItem:first img:first").length === 0
) {
  $arr = [];

  jQuery(".CollectionMain .ProductList .ProductItem__Wrapper").each(function () {
    $title = jQuery(this).find(".ProductItem__Title a").text().trim();

    $img = 
    'https:' + 
    (jQuery(this).find("img.ProductItem__Image:first").attr('srcset') ||
      jQuery(this).find("img.ProductItem__Image:first").attr('data-srcset') ||
        jQuery(this).find("img.ProductItem__Image:last").attr('srcset') ||
          jQuery(this).find("img.ProductItem__Image:last").attr('srcset') ||
            jQuery(this).find("img.ProductItem__Image:last").next().next().text().trim().split('src="')[1]).split(' ')[0].slice(0, -1) 
     

    $link = 'https://summituk.co.uk' + jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".ProductItem__Price .money:first").text().trim().split(' ')[0]
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
    
  $arr;
}
ProductList ProductList--grid ProductList--removeMargin Grid

if (
  jQuery("._35HD7C ._1R0K0g").length > 0 &&
  jQuery("._3KsTU0 img._30XEf0").length === 0
) {
  $arr = [];

  jQuery("._35HD7C ._1R0K0g").each(function () {
    $title = jQuery(this).find("a._2cLu-l").text().trim();

    $img =    
    jQuery(this).find("img._30XEf0").attr('src')      

    $link = 'https://www.2gud.com/' + jQuery(this).find('a.Zhf2z-').attr("href");

    $price = jQuery(this).find("a._1Vfi6u ._1vC4OE").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });  
    
  $arr;
}

if(jQuery("._1fhgRH ._37lU4r").length > 0 &&
   jQuery(".bJCmFu img.cydMly").length === 0) {
    $arr = [];

    jQuery("._35HD7C ._1R0K0g").each(function () {
      $title = ''
  
      $img =    
      jQuery(this).find("img._3a3qyb").attr('src')      
  
      $link = '';
  
      $price = ''
      
      if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price]);
    });  
      
    $arr;
   }

document.querySelectorAll('._35HD7C ._1R0K0g')
document.querySelectorAll('._3KsTU0 img._30XEf0')
// $price = ('€' + jQuery(this).find(".price-new").attr('data-csscontent')).split(' ')[0]


if (jQuery("#bc-sf-filter-products .grid-product__content").length > 0  &&
  jQuery(".product-image-main img").length === 0
) {
  $arr = [];

  jQuery("#bc-sf-filter-products .grid-product__content").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim();

    $img =   
    jQuery(this).find("div.grid-product__secondary-image").attr('data-bgset').split(' ')[0]

    $link = 'https://www.farah.co.uk/' + jQuery(this).find('a:first').attr("href");

    $price = jQuery(this).find(".grid-product__price span:last").text().trim() || 
    jQuery(this).find(".grid-product__price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
    
  $arr;
}

grid-product__secondary-image small--hide lazyloaded
section--collection
findify-widget--grid__column findify-widget--grid__column-2
findify-lists--products-list
findify-widget--product__price cgFaj _19m_S

if (
  jQuery(".product-grid__items-list .product-item").length > 0 &&
  jQuery(".img.product-images__image:first").length === 0
) {
  $arr = [];

  jQuery(".product-grid__items-list .product-item").each(function () {
    $title = jQuery(this).find(".product-item__name:first").text().trim();

    $img = jQuery(this).find("a.product-item__link img:first").attr("src")      

    $link = 'https://www.nittygrittystore.com/' + jQuery(this).find("a.product-item__link").attr("href");

    $price = '€' + ' ' +  jQuery(this).find('.price .price__value:first').text().trim().slice(0, -3).trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

jQuery(". li.product-item").length > 0 &&


if (
  jQuery(".grid--view-items .grid__item").length > 0 &&
  jQuery("img.zoomImg:first").length === 0
) {
  $arr = [];

  jQuery(".grid--view-items .grid__item").each(function () {
    $title = jQuery(this).find(".grid-view-item__title").text().trim();

    $img = 'https:' + jQuery(this).find("img:first").attr("src")      

    $link = 'https://alwaysagainusa.com' + jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find('.product-price__price:last').text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

if (
  jQuery(".opportunity-content .product-list").length > 0 &&
  jQuery(".container-fluid img.wrapper-main-slider__image.lazy-init").length === 0
) {
  $arr = [];

  jQuery(".opportunity-content .product-list").each(function () {
    $title = jQuery(this).find(".product-list__product-name").text().trim();

    $img =  
    (jQuery(this).find("img.ProductItem__Image:first").attr('srcset') ||
      jQuery(this).find("img.ProductItem__Image:first").attr('data-srcset') ||
        jQuery(this).find("img.ProductItem__Image:last").attr('srcset') ||
          jQuery(this).find("img.ProductItem__Image:last").attr('data-srcset') ||
            jQuery(this).find("img.ProductItem__Image:last").next().next().text().trim().split('src="')[1]).split(' ')[0].slice(0, -1) 

    $link = 'https://www.vatanbilgisayar.com/' + jQuery(this).find(".product-list__image-safe a:first").attr("href");

    $price = jQuery(this).find('.product-list__cost .product-list__price:first').text().trim().split(' ')[0]
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

if (
  jQuery(".collection-wo-filters .m-b").length > 0 &&
  jQuery('.carousel-inner .active img:first').length === 0
) {
  $arr = [];

  jQuery(".collection-wo-filters .m-b").each(function () {
    $title = jQuery(this).find(".m-y a:first").text().trim();

    $img = 'https:' + jQuery(this).find("img:first").attr("src")    

    $link = 'https://montiel.com/' + jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find('p.m-y').text().replace(/\r|\n/g, '').split('—')[1].trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}
"Frankie Tee                         in White — $46"
document.querySelectorAll('.flex-wrap li.product')

$text = false;
if (
  jQuery("fieldset:contains(Size) label").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("fieldset:contains(Size) label").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "")=== $sarg &&
      !jQuery(this).parent().find('input').attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;


if (
  jQuery(".ProductList-grid .ProductList-item").length > 0 &&
  jQuery('[class="ProductItem-gallery-slides-item-image loaded"]').length === 0
) {
  $arr = [];

  jQuery(".ProductList-grid .ProductList-item").each(function () {
    $title = jQuery(this).find(".ProductList-title").text().trim();

    $img = jQuery(this).find(".ProductList-innerImageWrapper img:first").attr("src")

    $link = 'https://shopthebreak.com' + jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find('.ProductList-overlay .product-price .sqs-money-native:first').text().replace(/\r|\n/g, '').trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}