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
  jQuery(".zoomWindowContainer .grid-product").length > 0 &&
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
     jQuery(this).find(".product__img").next().text().trim().split('src="')[1].split(' ')[0].slice(0, -1) 
     

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
  jQuery(".product-grid  li").length > 0 &&
  [].length === 0
) {
  $arr = [];

  jQuery(".product-grid  li").each(function () {
    $title = jQuery(this).find(".product-summary__name").text().trim();

    $img =    
    jQuery(this).find("img:first").attr('src')      

    $link = 'https://www.buycostumes.com/' + jQuery(this).find('a:first').attr("href");

    $price = jQuery(this).find("strong[itemprop='price']").text().trim()
    
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
  jQuery(".ProductBrowser__ProductsContainer-sc-1k6djnz-5 article").length > 0 &&
  jQuery(".slick-slide.slick-active.slick-current img:first").length === 0
) {
  $arr = [];

  jQuery(".ProductBrowser__ProductsContainer-sc-1k6djnz-5 article ").each(function () {
    $title = jQuery(this).find(".ProductCell__ProductName-w2jl0d-10").text().trim().replace(/\s\s+/g, "");

    $img =
    // 'https:' +
     jQuery(this).find("img:first").attr("src") 
    

    $link =
    //  'https://selenestone.com/' + 
    jQuery(this).find(" a:first").attr("href");

    $price = jQuery(this).find(".bfx-price").text().trim()
    // .split('RON')[0].trim().split(' ').join('')
    //  || jQuery(this).find(".card__price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}


// ('https:' +
//      ((jQuery(this).find(".ProductItem__ImageWrapper img:first").attr("srcset") ||
//      jQuery(this).find(".ProductItem__ImageWrapper img:first").attr("data-srcset") ||
//      jQuery(this).find(".ProductItem__ImageWrapper img:last").attr("srcset") ||
//      jQuery(this).find(".ProductItem__ImageWrapper img:last").attr("data-srcset"))))
//      .split(' ')[0]

if (
  jQuery('ul[data-hook="product-list-wrapper"] li').length > 0 &&
  // jQuery(".img.product-gallery__image:first").length === 0
  [].length === 0
) {
  $arr = [];

  jQuery('ul[data-hook="product-list-wrapper"] li').each(function () {
    $title = jQuery(this).find('h3[data-hook="product-item-name"]').text().trim().replace(/\s\s+/g, "");

    $img =
    //  'https:' +
    //  (jQuery(this).find("img:first").next().text().trim().split('src="')[1].split(' alt')[0].slice(0, -1) ||
    //    jQuery(this).find(".product__list__image img:first").attr("src"))
    // //     || 
    //  jQuery(this).find("img:first").next().text().trim().split('src="')[1].split(' alt')[0].slice(0, -1))

            ((jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img.product-image-photo:first").attr("data-default-img") ||
        //  jQuery(this).find("img.product-image-photo:first").attr("data-src") ||
         jQuery(this).find("img:last").attr("src")) ||
         '')
         .split(', ')[0]

    $link = jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find('[data-hook="product-item-price-to-pay"]').text().trim().split(',')[0]
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}




if (
  jQuery("#search-result-items li").length > 0 &&
  jQuery(".product-image.swiper-slide-active img").length === 0
) {
  $arr = [];

  jQuery("#search-result-items li").each(function () {
    $title = jQuery(this).find(".product-name").text().trim();

    $img = jQuery(this).find("img:first").attr("src")

    $link = jQuery(this).find("a:first").attr("href");

    $price = '€' +  (jQuery(this).find('.product-standard-price ').text().trim().split(' ')[0])
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}



if (
  jQuery("#bc-sf-filter-products .product-listing").length > 0 &&
  jQuery(".Product__SlideItem--image.is-selected img").length === 0
) {
  $arr = [];

  jQuery("#bc-sf-filter-products .product-listing").each(function () {
    $title = jQuery(this).find("h3.product-title").text().trim().replace(/\s\s+/g, "");

    $img =
    // 'https:' +
     jQuery(this).find("img:first").attr("src") ||
     jQuery(this).find("img:first").attr("data-src") ||
     jQuery(this).find("img:first").attr("data-second-image") ||
     jQuery(this).find("img:first").attr("data-srcset") ||
     jQuery(this).find("img:first").attr("srcset") 

    $link =
     'https://rebelliousfashion.com/' + 
    jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".product-price .money:last").text().trim().split('RON')[0].trim().split(' ').join('')
    //  || jQuery(this).find(".card__price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}


if (
  jQuery("#product-loop .product-index").length > 0 &&
  jQuery(".presentation").length === 0
) {
  $arr = [];

  jQuery("#product-loop .product-index").each(function () {
    $title = jQuery(this).find(".prod-title").text().trim().replace(/\s\s+/g, "");

    $img =
     'https:' +
      // jQuery(this).find("a:first .box-ratio").attr("src")
    //  (jQuery(this).find("img:first").attr("srcset") ||
    //  jQuery(this).find("img:first").attr("data-srcset") ||
    //  jQuery(this).find("img:first").attr("src"))   
     jQuery(this).find("a:first .box-ratio").next().text().trim().split('src="')[1]
     .split(' ')[0].slice()
    

    $link = 
    'https://courtsgeneralstore.com' +
     jQuery(this).find("a:first").attr("href");

    if(jQuery(this).find(".prod-price").text().trim().split('-')[0].split('From ')[1])
    $price = jQuery(this).find(".prod-price").text().trim().split('-')[0].split('From ')[1]
    else $price = jQuery(this).find(".prod-price").text().trim()
    //  || jQuery(this).find(".card__price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

if (
  jQuery(".products [class='product-small box ']").length > 0 &&
) {
  $arr = [];

  jQuery(".products [class='product-small box ']").each(function () {
    $title = jQuery(this).find(".product-title").text().trim().replace(/\s\s+/g, "");

    $img =
    //  'https:' +

    //  (jQuery(this).find("img:first").next().text().trim().split('src="')[1].split(' alt')[0].slice(0, -1) ||
    //    jQuery(this).find(".product__list__image img:first").attr("src"))
    //     || 
     jQuery(this).find("img:first").attr("src")

    $link = 
    // 'https://www.bitiba.co.uk'  + 
    jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".price-wrapper .woocommerce-Price-amount.amount:first").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

if (
  jQuery(".products [class='product-small box ']").length > 0 &&
  jQuery(".woocommerce-product-gallery__image.is-selected img:first").length === 0
) {
  $arr = [];

  jQuery(".products [class='product-small box ']").each(function () {
    $title = jQuery(this).find(".woocommerce-loop-product__title").text().trim().replace(/\s\s+/g, "");

    $img =
    //  'https:' +

    //  (jQuery(this).find("img:first").next().text().trim().split('src="')[1].split(' alt')[0].slice(0, -1) ||
    //    jQuery(this).find(".product__list__image img:first").attr("src"))
    //     ||
     jQuery(this).find("img:first").next().text().trim().split('src="')[1].split(' class')[0].slice(0, -1).replace(/\s/g,'%20')

    $link = jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find("[class='woocommerce-Price-amount amount']:last").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}


if (
  jQuery("ul.products-grid li").length > 0 &&
  [].length === 0
) {
  $arr = [];

  jQuery("ul.products-grid li").each(function () {
    $title = jQuery(this).find(".product-name").text().trim();

    $img = 
    // 'https://www.lampegiganten.dk' +
    //  (jQuery(this).find(".panel-body a:first img").attr("data-src") ||
       jQuery(this).find("a:first img:first").attr("src") ||
       jQuery(this).find("a:first img:first").attr("data-src") ||
       jQuery(this).find("a:first source:first").attr("data-srcset") ||
       jQuery(this).find("a:first source:first").attr("srcset")

    $link =
    //  'https://www.lampegiganten.dk' +
      jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".price-box .price:last").text().trim()
    
    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

if (
  jQuery(".results-container .cell").length > 0 &&
  jQuery(".presentation").length === 0
) {
  $arr = [];

  jQuery(".results-container .cell").each(function () {
    $title = jQuery(this).find('h2.product-name').text().trim();

    $img =  
    'https:'+  
    jQuery(this).find("img:first").attr('src')
    // .next().text().trim().split('src="')[1].split(' alt')[0].slice(0, -1)     

    $link = 'https://www.jpcycles.com' + jQuery(this).find('a:first').attr("href");

    $price = jQuery(this).find("#pricing-display").text().trim().split(' to ')[0].trim()
    
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });  
    
  $arr;
}




if (
  jQuery(".columns .product-wrap").length > 0 &&
  jQuery("#product-featured-image").length === 0
) {
  $arr = []

  jQuery(".columns .product-wrap").each(function () {
    $title = jQuery(this).find(".hidden-product-link").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find("img:first")
        .attr("src")

    $link = "https://americfashion.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".money:first").text().trim()
    // .split('Br')[1].split(' ')[0]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (jQuery(".grid-products a").length > 0 && [].length === 0) {
  $arr = []

  jQuery(".grid-products a").each(function () {
    $title = jQuery(this).find("h3.plp-product__title").text().trim()

    $img = "https:" + jQuery(this).find("img:first").attr("src")

    $link = "https://eu.aimeleondore.com" + jQuery(this).attr("href")

    $price =
      "€" +
      (jQuery(this).find(".plp-product__price .money").attr("ge-data-converted-price") ||
      jQuery(this).find(".plp-product__price ").attr("ge-data-converted-price"))

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}



if (
  jQuery(".product-list .product-wrap").length > 0 &&
  jQuery('[class="gallery-cell is-selected"] img').length === 0
) {
  $arr = [];

  jQuery(".product-list .product-wrap").each(function () {
    $title = jQuery(this).find('.title').text().trim();

    $img =  
    'https:'+  
    jQuery(this).find("img:first").attr('src')
    // (jQuery(this).find("img:first").attr('srcset') ||
    // jQuery(this).find("img:first").attr('data-srcset') ||
    // 'https:'+  jQuery(this).find("img:first").attr('src')).split(' ')[0]
    // .next().text().trim().split('src="')[1].split(' alt')[0].slice(0, -1)     

    $link = 'https://www.jpcycles.com' + jQuery(this).find('a:first').attr("href");

    $price = jQuery(this).find(".price .money:first").text().trim().split(' to ')[0].trim()
    
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });  
    
  $arr;
}