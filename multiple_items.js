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

    $price = jQuery(this).find(".ProductItem__Price.Price:first").text().trim()
    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery(".collection__products .product-tile").length > 0 &&
  jQuery('img#mainimage:first').length === 0
) {
  $arr = []

  jQuery(".collection__products .product-tile").each(function () {
    $title = jQuery(this).find(".type-body-regular").text().trim()

    $img =
  'https:' +
  (((jQuery(this).find("img:first").attr("src") ||
   jQuery(this).find("img:first").attr("srcset") ||
   jQuery(this).find("img:last").attr("srcset") ||
   jQuery(this).find("img:last").attr("srcset")|| '')))
   .split(' ')[0];

    $link =
    'https://www.siesmarjanarchive.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".sale:first").text().trim()
    if ($title && $img && $link && $price)    
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
     jQuery(this).find(".product__img").next().text().trim()
    //  .split('src="')[1].split(' ')[0].slice(0, -1) 
     

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
  jQuery('[class="Product__SlideItem Product__SlideItem--image Carousel__Cell is-selected"] img:first').length === 0
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

    $price = jQuery(this).find(".ProductItem__Price:first").text().trim()
    // .split(' ')[0]
    
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


if (jQuery(".flex-wrap section").length > 0  &&
  [].length === 0
) {
  $arr = [];

  jQuery(".flex-wrap section").each(function () {
    $title = jQuery(this).find(".vtex-product-summary-2-x-brandName").text().trim();

    $img =   
    jQuery(this).find("img:first").attr('src')
    // .split(' ')[0]

    $link = 'https://www.pandoraoficial.com.mx' + jQuery(this).find('a:first').attr("href");

    $price = jQuery(this).find(".vtex-store-components-3-x-sellingPrice:first").text().trim().split('Ahora')[1]
     || 
    jQuery(this).find(".vtex-store-components-3-x-sellingPrice:first").text().trim()
    
    // if ($title && $img && $link && $price)
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
  jQuery(".product-collection .product-item").length > 0 &&
  jQuery(".img.product-images__image:first").length === 0
) {
  $arr = [];

  jQuery(".product-collection .product-item").each(function () {
    $title = jQuery(this).find(".product-title:first").text().trim();

    $img = jQuery(this).find("img:first").attr("src")      

    $link = 'https://kiwisboutique.com' + jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find('.regular-product:first').text().trim()
    // .slice(0, -3).trim()
    
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
  jQuery('ul.productGrid li').length > 0 &&
  // jQuery(".img.product-gallery__image:first").length === 0
  [].length === 0
) {
  $arr = [];

  jQuery('ul.productGrid li').each(function () {
    $title = jQuery(this).find('.card-title').text().trim().replace(/\s\s+/g, "");

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
         .split(' ')[0]

    $link = jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find('.price-section .price--withoutTax').text().trim()
    // .split(',')[0]
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}




if (
  jQuery('.ProductListWrapper .ProductItem__Wrapper').length > 0 &&
  jQuery('[class="Product__Slideshow Product__Slideshow--zoomable Carousel"] img').length === 0
) {
  $arr = [];

  jQuery('.ProductListWrapper .ProductItem__Wrapper').each(function () {
    $title = jQuery(this).find(".ProductItem__Title").text().trim()
    // .split(' / ')[0];

    if(jQuery(this).find("img:first").next().next().text().trim())
    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    'https:' + 
    jQuery(this).find("img:first")
    .next().next()
    .text().trim()
    .split('src="')[1]
    .split(' alt')[0]
    // .trim()
    .slice(0, -1)
    else $img = ''

    $link = 'https://joeythelabel.com' + jQuery(this).find("a:first")
    .attr("href");

    $price = jQuery(this).find(".ProductItem__Price:first").text().trim()
    // .split('Regular price')[1] ||
    // jQuery(this).find(".product-card__price").text().trim()
    // .split('From')[1]
    // .trim()
    
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
       jQuery(this).find("img:first").attr("src") 
      //  jQuery(this).find("a:first img:first").attr("data-src") ||
      //  jQuery(this).find("a:first source:first").attr("data-srcset") ||
      //  jQuery(this).find("a:first source:first").attr("srcset")

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
  jQuery("#Collection .grid__item").length > 0 &&
  [].length === 0
) {
  $arr = []

  jQuery("#Collection .grid__item").each(function () {
    $title = jQuery(this).find(".indiv-product-title-text").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find("img:first")
        .attr("src")

    $link = "https://www.thegerdu.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".money-styling .money:first").text().trim()
    // .split('Br')[1].split(' ')[0]

    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (jQuery("#product-loop .product-index-inner").length > 0 &&
jQuery('.photo-zoom-link [role="presentation"]').length === 0) {
  $arr = []

  jQuery("#product-loop .product-index-inner").each(function () {
    $title = jQuery(this).parent().find("h3").text().trim()

    $img = "https:" + jQuery(this).parent().find("img:first").attr("src")

    $link = "https://hiddencosmetics.co" + jQuery(this).parent().attr("href")

    $price =
      // "€" +     
        jQuery(this).parent().find(".price .money:first").text().trim()
      //  ||
      // jQuery(this).find(".plp-product__price ").attr("ge-data-converted-price"))

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}



if (
  jQuery(".container .product-wrap").length > 0 &&
  jQuery('[class="Product__SlideItem Product__SlideItem--image Carousel__Cell is-selected"] img').length === 0
) {
  $arr = [];

  jQuery(".container .product-wrap").each(function () {
    $title = jQuery(this).find('.title').text().trim();

    if(jQuery(this).find(".image-element__wrap").next().text().trim())
    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] || 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    'https:' + 
    jQuery(this).find(".image-element__wrap")
    .next()
    .text().trim()
    .split('src="')[1]
    .split(' alt')[0].trim()
    .slice(0, -1)
    else $img = '' 
    
    //  $img = 
    //   // 'https:' +
    //      (((jQuery(this).find("img:first").attr("src") ||
    //      jQuery(this).find("img:first").attr("data-srcset") ||
    //      jQuery(this).find("img:first").attr("data-src") ||
    //      jQuery(this).find("img:first").attr("data-zoom")|| '')))
    //      .split(' ')[0];

    $link = 
    'https://www.lesuth.com' + 
    jQuery(this).find('a:first').attr("href");

    $price = jQuery(this).find(".price .current_price").text().trim()
    // .split('Regular price')[1].trim()
    
    
    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });  
    
  $arr;
}



if (
  jQuery('ul.search-result-items li').length > 0 &&
  // jQuery(".img.product-gallery__image:first").length === 0
  [].length === 0
) {
  $arr = [];

  jQuery('ul.search-result-items li').each(function () {
    $title = jQuery(this).find('.name-link').text().trim().replace(/\s\s+/g, "");

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

    $link = jQuery(this).find("a.thumb-link:first").attr("href");

    $price = jQuery(this).find('.product-price span:first').text().trim()
    // .split(',')[0]
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

if (
  jQuery('[data-hook="product-list-wrapper"] li').length > 0 &&
  jQuery('[data-layout-name="classic"] .slick-active [data-hook="product-image"]:first').length === 0
) {
  $arr = [];

  jQuery('[data-hook="product-list-wrapper"] li').each(function () {
    $title = jQuery(this).find('[data-hook="product-item-product-details"] h3').text().trim();

    // if(jQuery(this).find("img:first").next().text().trim())
    // $img =
    // // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] || 
    // // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    // 'https:' + 
    // jQuery(this).find(".product__img-wrapper")
    // .next()
    // .text().trim()
    // .split('src="')[1]
    // .split(' alt')[0].trim()
    // .slice(0, -1)
    // else $img = '' 
    
     $img = 
      // 'https:' +
         (((jQuery(this).find('[data-hook="wix-media-image"]').attr("src").replace(/\s/g,'%20') ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
         jQuery(this).find('[data-hook="wix-media-image"]').attr("src").replace(/\s/g,'%20')|| '')))
         .split(' ')[0];

    $link = 
    // 'https://toasterkiwi.shop' + 
    jQuery(this).find('a:first').attr("href");

    $price = jQuery(this).find('[data-hook="product-item-product-details"] [data-hook="product-item-price-to-pay"]').text().trim()
    .split('$')[1]
    // .trim()
    
    
    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });  
    
  $arr;
}



////////////////////////////////////////////////////////////////////////////////////////////


if (jQuery("#CollectionSection .grid__item").length > 0 && [].length === 0) {
  $arr = []

  jQuery("#CollectionSection .grid__item").each(function () {
    $title = jQuery(this).find(".grid-link__title").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find(".product__img-wrapper")
        .next()
        .text()
        .trim()
        .split('src="')[1]
        .split(" alt")[0]
        .slice(0, -1)

    $link =
      "https://nightanddaynetmarket.com" + jQuery(this).find("a:first").attr("href")

    $price = (jQuery(this).find(".grid-link__meta").text().trim()
    .split('From')[1] ||
    jQuery(this).find(".grid-link__meta").text().trim().split('Regular price')[1])
    // .split('No reviews')[0]
    // .trim()

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}

if (
  jQuery(".collection-page .grid__item").length > 0 &&
  jQuery('img#mainimage:first').length === 0
) {
  $arr = []

  jQuery(".collection-page .grid__item").each(function () {
    $title = jQuery(this).find(".collection-page__meta--title").text().trim()

    if((jQuery(this).find('.collection-page__image-inner:first').css('background-image')|| 
    jQuery(this).find('.collection-page__image-inner:last').css('background-image') || '')
    .split('url(')[1])

    $img =
    (jQuery(this).find('.collection-page__image-inner:first').css('background-image')|| 
    jQuery(this).find('.collection-page__image-inner:last').css('background-image') || '')
    .split('url(')[1]
    .slice(1,-2)

    else $img = ''
    //  ||
    // ('https:' + 
    //   ((jQuery(this).find(".grid__image-ratio:first").attr('data-bgset') ||
    //     jQuery(this).find(".grid__image-ratio:first").next().attr('data-bgset'))).trim().split(' ')[0].slice(0, -1))

    $link =
    'https://epikcanvas.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".product-price .money:last").text().trim()
    if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (jQuery("#CollectionSection .grid__item").length > 0 &&
jQuery('.photo-zoom-link [role="presentation"]').length === 0) {
  $arr = []

  jQuery("#CollectionSection .grid__item").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
      // "https:" +
      (((jQuery(this).find('.grid-product__secondary-image').css('background-image') || '')
      .split('url(')[1] || '')
      .slice(1,-2) ||
      ("https:" +((jQuery(this).find('img.grid-product__image')
        .next()
        .text()
        .trim() || '')
        .split('src="')[1] || '')
        .split('alt')[0].trim()
        .slice(0, -1)))

    $link =
      "https://uk.etatlibredorange.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".grid-product__price .money:first").text().trim()
    // .split('Regular price')[1]
    // .split('No reviews')[0]
    // .trim()

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })

  $arr
}


if (
  jQuery('.container li').length > 0 &&
  jQuery('.product-single__photo img:first').length === 0
) {
  $arr = [];

  jQuery('.container li').each(function () {
    $title = jQuery(this).find(".product-grid__product__title").text().trim().split('£')[0].trim()
    // .split(' / ')[0];

    if(jQuery(this).find(".product-grid__product__img-container").find('noscript').text().trim())
    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    'https:' + 
    jQuery(this).find(".product-grid__product__img-container")
    .find('noscript')
    .text().trim()
    .split('src="')[1]
    .split(' alt')[0]
    // .trim()
    .slice(0, -1)
    else $img = ''

    $link = 'https://ukshop.sabah.am' + jQuery(this).find("a:first")
    .attr("href");

    $price = '£' + jQuery(this).find(".product-grid__product__title").text().trim().split('£')[1]
    // .split('Regular price')[1] ||
    // jQuery(this).find(".product-card__price").text().trim()
    // .split('From')[1]
    // .trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}


if (
  jQuery('ul.grid--view-items li').length > 0 &&
  jQuery('.product-single__photo img:first').length === 0
) {
  $arr = [];

  jQuery('ul.grid--view-items li').each(function () {
    $title = jQuery(this).find(".grid-view-item__title").text().trim();

    if(jQuery(this).find(".product-card__image-with-placeholder-wrapper").next().text().trim())
    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    'https:' + 
    jQuery(this).find(".product-card__image-with-placeholder-wrapper")
    .next()
    .text().trim()
    .split('src="')[1]
    .split(' alt')[0].trim()
    .slice(0, -1)
    else $img = ''
     

    $link =
     'https://www.rjswim.com' +
       jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".price-item--sale").text().trim() ||  jQuery(this).find(".price-item--regular").text().trim()
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });

  $arr
}


if (
  jQuery("#Collection .grid__item").length > 0 &&
  [].length === 0
) {
  $arr = []

  jQuery("#Collection .grid__item").each(function () {
    $title = jQuery(this).find(".indiv-product-title-text").text().trim()

    $img =
      "https:" +
      jQuery(this)
        .find("img:first")
        .attr("src")
        .slice(0, -1)

    $link = "https://www.thegerdu.com" + jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".money-styling .money:last").text().trim().split('Kezdőár:')[1]
     || jQuery(this).find(".money-styling .money:last").text().trim()   
    // .split('Br')[1].split(' ')[0]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery(".section-list .product-card").length > 0 &&
  jQuery(".Product__SlideItem--image.is-selected img").length === 0
) {
  $arr = [];

  jQuery(".section-list .product-card").each(function () {
    $title = jQuery(this).find("h2.product-title").text().trim().replace(/\s\s+/g, "");

    $img =
    // 'https:' +
     jQuery(this).find("img:first").attr("src") 
    //  jQuery(this).find("img:first").attr("data-src") ||
    //  jQuery(this).find("img:first").attr("data-second-image") ||
    //  jQuery(this).find("img:first").attr("data-srcset") ||
    //  jQuery(this).find("img:first").attr("srcset") 

    $link =
     'https://www.emag.hu' + 
    jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".product-price-current:last").text().trim()
    // .split('RON')[0].trim().split(' ').join('')
    //  || jQuery(this).find(".card__price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

if (
  jQuery(".card-collection .card").length > 0 &&
  jQuery(".Product__SlideItem--image.is-selected img").length === 0
) {
  $arr = [];

  jQuery(".card-collection .card").each(function () {
    $title = jQuery(this).find("h2.product-title-zone").text().trim().replace(/\s\s+/g, "");

    $img =
    // 'https:' +
     jQuery(this).find("img:first").attr("src") 
    //  jQuery(this).find("img:first").attr("data-src") ||
    //  jQuery(this).find("img:first").attr("data-second-image") ||
    //  jQuery(this).find("img:first").attr("data-srcset") ||
    //  jQuery(this).find("img:first").attr("srcset") 

    $link =
     'https://www.emag.hu' + 
    jQuery(this).find("a:first").attr("href");

    $price = jQuery(this).find(".product-new-price:last").text().trim()
    // .split('RON')[0].trim().split(' ').join('')
    //  || jQuery(this).find(".card__price").text().trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}


if (
  jQuery("ul.products li").length > 0 &&
  jQuery('.slick-active [role="presentation"]:first').length === 0 
  && jQuery('.product-information').length === 0  
) {
  $arr = []

  jQuery("ul.products li").each(function () {
    $title = jQuery(this).find('h3').text().trim()

    $img =
    // "https:" +
    jQuery(this)
      .find("noscript")
      // .next()
      .text()
      .trim()
      .split('src="')[1]
      .split(" size")[0]
      .split(" class")[0]
      .slice(0, -1)

    $link =
    // 'https://www.kukyflor.com' +
      jQuery(this).find("a:first").attr("href")

    $price = jQuery(this).find(".woocommerce-Price-currencySymbol:first").parent().text().trim()
    // .split('S/.')[1]
    // .split('ex')[0]
    // ||  jQuery(this).find(".gtm-item-price").text().trim() 
    // .split('US')[1]
    // ||
    // jQuery(this).find(".price").text().trim())
    // .split('€')[1]

    // if ($title && $img && $link && $price)    
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery('ul#products-list li').length > 0 &&
  jQuery(".images-container  a:first").length === 0
) {
  $arr = []

  jQuery('ul#products-list li').each(function () {
    $title = jQuery(this).find('.product-name').text().trim()

    $img =
      // 'https:' +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        jQuery(this).find("img:last").attr("src") ||
        ""
      )
        //  .split(', ')[0];
        .replace(/\s/g, "%20")

    $link =
      // 'https://www.kukyflor.com' +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "PEN" +
      jQuery(this).find(".special-price .price:first").text().trim()
    .split(',–')[0]
    ||  jQuery(this).find(".price-box .price:first").text().trim()
    .split(',–')[0]
    // ||
    // jQuery(this).find(".price").text().trim())
    // .split('€')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}



if (
  jQuery('.collection--grid .product-item').length > 0 &&
  jQuery('.product__photo--single img:first').length === 0
) {
  $arr = [];

  jQuery('.collection--grid .product-item').each(function () {
    $title = jQuery(this).find(".product-item__title").text().trim()
    // .split(' / ')[0];

    if(jQuery(this).find(".product-item__image-container").prev().text().trim())
    $img =
    // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1] 
    // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
    'https:' + 
    jQuery(this).find(".product-item__image-container")
    .prev()
    // .next()
    .text().trim()
    .split('src="')[1]
    .split(' alt')[0]
    .trim()
    .slice(0, -1)
    else $img = ''

    $link = 'https://tidystreetstore.com' + jQuery(this).find("a:first")
    .attr("href");

    $price = ((jQuery(this).find(".product-item__price-wrapper:first").text().trim()
    .split('Regular price')[1] || '').trim() 
    ||
    (jQuery(this).find(".product-item__price-wrapper:first").text().trim()
    .split('from ')[1] || '').trim()) 
    // jQuery(this).find(".product-card__price").text().trim()
    // .split('From')[1]
    // .trim()
    
    if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}

if (jQuery('.product__photo--single img:first').length > 0) 
$img = jQuery('.product__photo--single img:first').attr('src')
.split(', ')[0]
else
$img = jQuery('meta[property="og:image"]:eq(0)').attr('content')

if ($img.indexOf("http") == -1)
'https:'+$img
else
$img

if (
  jQuery(".grid-uniform .grid__item").length > 0 &&
  jQuery(".image-zoom img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery(".grid-uniform .grid__item").each(function () {
    $title = jQuery(this).find(".grid-link__title").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img.ls-is-cached:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-src") ||
        //  jQuery(this).find("img:first").attr("data-second-image") ||
        jQuery(this).find("img.ls-is-cached:first").attr("data-src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://www.slownorth.com" + jQuery(this).find("a:first").attr("href")

    $price =     
      jQuery(this)
        .find(".collection__product-price:first")
        .text()
        .trim()
        .replace(/\s/g, "")
        // .split("CFA")[0]
    // .split("Sale price")[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}


if (
  jQuery("ul.snize-search-results-content li").length > 0 &&
  jQuery(".images-container  a:first").length === 0
) {
  $arr = []

  jQuery("ul.snize-search-results-content li").each(function () {
    $title = jQuery(this).find(".snize-title").text().trim()

    $img =
      // 'https:' +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        jQuery(this).find("img:last").attr("src") ||
        ""
      )
        //  .split(', ')[0];
        .replace(/\s/g, "%20")

    $link =
      // 'https://www.kukyflor.com' +
      jQuery(this).find("a:first").attr("href")

    $price =
      // "PEN" +
      jQuery(this)
        .find(".snize-price-list .snize-price:first")
        .text()
        .trim()
        .split(",–")[0]
    // ||  jQuery(this).find(".gtm-item-price").text().trim()
    // .split('US')[1]
    // ||
    // jQuery(this).find(".price").text().trim())
    // .split('€')[1]

    if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (jQuery('.image__container img:first').length > 0) 
  $img = jQuery('.image__container img:first').attr('src')  
  .split(' ')[0]
  // .replace('360x', '1080x')
  else
  $img = jQuery('meta[property="og:image"]:eq(0)').attr('content')
  
  if ($img.indexOf("http") == -1)
  'https:'+$img
  else
  $img

  if (
    jQuery("ul.snize-search-results-content li").length > 0 &&
    jQuery(".images-container  img:first").length === 0
  ) {
    $arr = []
  
    jQuery("ul.snize-search-results-content li").each(function () {
      $title = jQuery(this).find(".snize-title").text().trim()
  
      $img =
        // 'https:' +
        (
          jQuery(this).find("img:first").attr("src") ||
          //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
          //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
          jQuery(this).find("img:last").attr("src") ||
          ""
        )
          //  .split(', ')[0];
          .replace(/\s/g, "%20")
  
      $link =
        // 'https://www.kukyflor.com' +
        jQuery(this).find("a:first").attr("href")
  
      $price =
        // "PEN" +
        jQuery(this)
          .find(".snize-price-list .snize-price:first")
          .text()
          .trim()
          .split(",–")[0]
      // ||  jQuery(this).find(".gtm-item-price").text().trim()
      // .split('US')[1]
      // ||
      // jQuery(this).find(".price").text().trim())
      // .split('€')[1]
  
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    })
    $arr
  }


  if (
    jQuery(".grid-uniform .grid__item").length > 0 &&
    jQuery('.product-single__image-wrapper img:first').length === 0
    // &&  jQuery(".product-single").length === 0
  ) {
    $arr = []
  
    jQuery(".grid-uniform .grid__item").each(function () {
      $title = jQuery(this).find(".grid-link__title").text().trim()
  
      if (jQuery(this).find("noscript").text().trim())
        $img =
          // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
          // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
          "https:" +
          jQuery(this)
            .find("noscript")          
            .text()
            .trim()
            .split('src="')[1]
            .split(" ")[0]         
            .trim()
            .slice(0, -1)
      // .replace('gif', 'jpg')
      else $img = ""
  
      $link = "https://moodsclothing.com" + jQuery(this)
      .find("a:first")
      .attr("href")
  
      $price =  
      '$' +    
       (jQuery(this)
          .find(".grid-link__meta")
          .text()
          .trim()
          .replace(/\s/g, "") 
          .split('$')[2]
          ||
          jQuery(this)
          .find(".grid-link__meta")
          .text()
          .trim()
          .replace(/\s/g, "") 
          .split('$')[1])
          
      
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    })
    $arr
  }


  if (
    jQuery('[data-pf-type="ProductList"] [data-pf-type="ProductBox"]').length > 0 &&
    jQuery('[data-pf-type="MasterImage"] img[role="presentation"].zoomImg:first').length === 0
    &&  jQuery('[data-pf-type="ImageItem"]').length === 0
  ) {
    $arr = []
  
    jQuery('[data-pf-type="ProductList"] [data-pf-type="ProductBox"]').each(function () {
      $title = jQuery(this).find('[data-product-type="title"]').text().trim()
  
      $img =
        "https:" +
        (
          jQuery(this).find("img:first").attr("src") ||
          //  jQuery(this).find("img:first").attr("data-src") ||
          //  jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("src") ||
          ""
        )
          // .replace(/\s/g, "%20")
          .split(" ")[0]
  
      $link =
        "https://pipe-decor.com" + jQuery(this).find("a:first").attr("href")
  
      $price =     
      // "$" + 
      jQuery(this)
          .find('[data-product-type="price"]:first')
          .text()
          .trim()
          .replace(/\s/g, "")
          // .split("$")[2] || '').trim()
      // .split("Sale price")[1]
  
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    })
    $arr
  }


  if (
    jQuery(".collectionGrid-row .collectionBlock").length > 0 &&
    jQuery('[class="responsive-image__wrapper easyzoom easyzoom--adjacent is-ready").length === 0
    // &&  jQuery(".product-single").length === 0
  ) {
    $arr = []
  
    jQuery(".collectionGrid-row .collectionBlock").each(function () {
      $title = jQuery(this).find(".collectionBlock__title").text().trim()
  
      if (jQuery(this).find("noscript").text().trim())
        $img =
          // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
          // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
          "https:" +
          jQuery(this)
            .find("noscript")          
            .text()
            .trim()
            // .split('src="')[1]
            .split("url('")[1]
            .split("');")[0]         
            .trim()
            .slice(0, -2)
      // .replace('gif', 'jpg')
      else $img = ""
  
      $link = "https://deco.miami" + jQuery(this)
      .find("a:first")
      .attr("href")
  
      $price =  
      '$' +    
        (jQuery(this)
          .find(".collectionBlock__price:first")
          .text()
          .trim()
          .replace(/\s/g, "") 
          .split('$')[2] 
          ||
          jQuery(this)
          .find(".collectionBlock__price:first")
          .text()
          .trim()
          .replace(/\s/g, "") 
          .split('$')[1])
          
      
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    })
    $arr
  }


  if (
    jQuery(".grid-uniform .grid-item").length > 0 &&
    jQuery('.image-zoom img:first').length === 0
    // &&  jQuery(".product-single").length === 0
  ) {
    $arr = []
  
    jQuery(".grid-uniform .grid-item").each(function () {
      $title = jQuery(this).find("p").text().trim()
  
      if (jQuery(this).find("noscript").text().trim())
        $img =
          // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
          // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
          "https:" +
          jQuery(this)
            .find("noscript")          
            .text()
            .trim()
            .split('src="')[1]
            .split(" ")[0]         
            .trim()
            .slice(0, -1)
      // .replace('gif', 'jpg')
      else $img = ""
  
      $link = "https://uhlan.co.uk" + jQuery(this)
      .find("a:first")
      .attr("href")
  
      $price =  
      // '$' +    
       jQuery(this)
          .find(".product-item--price .visually-hidden:last")
          .text()
          .trim()
          .replace(/\s/g, "") 
          // .split('$')[2]
         
          
      
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    })
    $arr
  }

  if (
    jQuery(".collection-listing--collection .collection-listing--product").length > 0 &&
    jQuery(".product-single__photo-wrapper img:first").length === 0
    // &&  jQuery(".product-single").length === 0
  ) {
    $arr = []
  
    jQuery(".collection-listing--collection .collection-listing--product").each(function () {
      $title = jQuery(this).find(".product--title").text().trim()
  
      if (jQuery(this).find("noscript").text().trim())
        $img =
          // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
          // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
          "https:" +
          jQuery(this)
            .find("noscript")
            .text()
            .trim()
            .split('src="')[1]
            // .split("url('")[1]
            .split(" ")[0]
            .trim()
            .slice(0, -1)
      // .replace('gif', 'jpg')
      else $img = ""
  
      $link =
        "https://tenshundredsthousands.com" + 
        jQuery(this).find("a:first").attr("href")
  
      $price = jQuery(this).find(".product--price-wrapper .product--price:first").text().trim().replace(/\s/g, "")
      // .split('$')[1]
  
      if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
    })
    $arr
  }

  if (
    jQuery(".grid--uniform .grid__item").length > 0 &&
    jQuery('.product-single__photo.slick-active img:first')
      .length === 0
    // &&  jQuery(".product-single").length === 0
  ) {
    $arr = []
  
    jQuery(".grid--uniform .grid__item").each(function () {
      $title = jQuery(this).find(".grid-view-item__title").text().trim()
  
      $img =
        "https:" +
        (
          jQuery(this).find("img:first").attr("src") ||
          jQuery(this).find("img:first").attr("data-srcset") ||
          jQuery(this).find("img:first").attr("srcset") ||
          // jQuery(this).find("img:last").attr("src") ||
          ""
        )
          // .replace(/\s/g, "%20")
          .split(" ")[0]
  
      $link = "https://shwainc.com" + jQuery(this).find("a:first").attr("href")
  
      $price =
      
      jQuery(this)
        .find(".product-price__price")
        .text()
        .trim()
        .replace(/\s/g, "")
      // .split('$')[1] || ''
  
      if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
    })
    $arr
  }


  if (
    jQuery(".grid--uniform .grid__item").length > 0 &&
    jQuery(".product__main-photos img:first").length === 0
    // &&  jQuery(".product-single").length === 0
  ) {
    $arr = []
  
    jQuery(".grid--uniform .grid__item").each(function () {
      $title = jQuery(this).find(".grid-product__title:first").text().trim()
  
      if (jQuery(this).find("noscript").text().trim())
        $img =
          // jQuery(this).find('.grid__image-ratio:first').css('background-image').split('"')[1]
          // jQuery(this).find('.grid__image-ratio:first').next().css('background-image').split('"')[1] ||
          "https:" +
          jQuery(this)
            .find("noscript")
            .text()
            .trim()
            .split('src="')[1]
            .split(" ")[0]
            .trim()
            .slice(0, -1)
      // .replace('gif', 'jpg')
      else $img = ""
  
      $link =
        "https://blesses.shop" + jQuery(this).find("a:first").attr("href")
  
      $price =
        // "$" +
       jQuery(this)
          .find(".price:first .price__regular .price-item--regular")
          .text()
          .trim()
          .replace(/\s/g, "")
          // .split("$")[1] 
         
  
      // if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    })
    $arr
  }  
  
  jQuery('.pdp-hero__price-container:first').text().trim().split('From')[1] || jQuery('.pdp-hero__price-container:first').text().trim().split('From') 

  if (
    jQuery(".product-grid .product-item").length > 0 &&
    jQuery('[class="lazy-image product__photo slick-slide slick-current slick-active"] img:first').length === 0
    // jQuery('.product-description').length === 0
  ) {
    $arr = []
  
    jQuery(".product-grid .product-item").each(function () {
      $title = jQuery(this).find(".title").text().trim()
  
      $img =
        // "https:" +
        
         ( jQuery(this)
            .find('[data-aos="img-in"]:first')
            .attr("data-bgset") ||
          jQuery(this)
            .find('[data-aos="img-in"]:first')
            .attr("data-bgset") ||
          // jQuery(this)
          //   .find(".product-item__image:first source:first")
          //   .attr("srcset") ||
          // jQuery(this)
          //   .find(".product-item__image:first source:first")
          //   .attr("data-srcset") ||
          jQuery(this).find('a:first div div')
          .css("background-image")
        // .split('url"')[1]
        // .split('"')[0]
        // .slice(-8) 
        ||
          ""
         )
          // .replace(/\s/g, "%20")
          .split(" ")[1]
  
      $link = "https://flutecenter.com" + jQuery(this).find("a:first").attr("href")
  
      $price = jQuery(this).find(".price:first .money").text().trim().replace(/\s/g, "")
      // .split("$")[1] || ""
  
      if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
    })
    $arr
  }

  if (
    jQuery('.products .product-grid-item').length >
      0 &&
    jQuery(".woocommerce-product-gallery img:first").length === 0
    // &&  jQuery('.product-details__desc-col').length === 0
  ) {
    $arr = []
  
    jQuery('.products .product-grid-item').each(
      function () {
        $title = jQuery(this)
          .find(".product-title")
          .text()
          .trim()
  
        $img =
          // "https:" +
          // jQuery(this).find("img:first").attr("data-src") ||
          (
            jQuery(this).find("img:first").attr("data-srcset") ||
            jQuery(this).find("img:first").attr("srcset") ||
            jQuery(this).find("img:first").attr("src") ||
            ""
          )
            // .replace(/\s/g, "%20")
            .split(" ")[0]
  
        $link =
          // "https://www.tpro.com" + 
          jQuery(this).find("a:first").attr("href")
  
        $price =
           '$' +
          (jQuery(this)
            .find(
              ".price:first .prod-price"
            )
            .text()
            .trim()
            .replace(/\s/g, "")
        .split('$')[1]
        // .split(' ')[0]
        || 
        jQuery(this)
            .find(
              ".price:first .woocommerce-Price-amount:last"
            )
            .text()
            .trim()
            .replace(/\s/g, "")
        .split('$')[1])
  
        if ($title && $img && $link && $price)
          $arr.push([$title, $img, $link, $price])
      }
    )
    $arr
  }
  '£'+jQuery(".price-list:first .price:last").text().trim().split('£')[1]

  if (
    jQuery(".collection .product-list .product-item").length > 0 &&
    jQuery(".product-gallery__carousel-wrapper img:first").length === 0
    // &&  jQuery('.product-details__desc-col').length === 0
  ) {
    $arr = []
  
    jQuery(".collection .product-list .product-item").each(function () {
      $title = jQuery(this).find(".product-item__title").text().trim()
  
      $img =
        // "https:" +
        (
          jQuery(this).find("img:first").attr("srcset") ||
          jQuery(this).find("img:first").attr("data-srcset") ||
          //  jQuery(this).find("img:first").attr("srcset") ||
          // jQuery(this).find("img:last").attr("src") ||
          ""
        )
          // .replace(/\s/g, "%20")
          .split(" ")[0]
     
  
      $link =
        "https://www.ecr4kids.com" + jQuery(this).find("a:first").attr("href")
  
      $price =
        "$" +
        (jQuery(this)
          .find(".price--highlight")
          .text()
          .trim()
          .replace(/\s/g, "")
          .split("£")[1] ||
          jQuery(this)
            .find(".price")
            .text()
            .trim()
            .replace(/\s/g, "")
            .split("$")[1])
  
      if ($title && $img && $link && $price)
        $arr.push([$title, $img, $link, $price])
    })
    $arr
  }

  if (
    jQuery('.product-listing .product_item').length >
      0 &&
    jQuery(".carousel img:first").length === 0
    // &&  jQuery('.product-details__desc-col').length === 0
  ) {
    $arr = []
  
    jQuery('.product-listing .product_item').each(
      function () {
        $title = jQuery(this)
          .find(".product_title")
          .text()
          .trim()
  
        $img =
          "https:" +(
          // jQuery(this).find("img:first").attr("data-mainimage") ||
          
            // jQuery(this).find("img:first").attr("data-srcset") ||
            jQuery(this).find("img:last").attr("srcset") ||
            jQuery(this).find("img:last").attr("src") ||
            "")
          
            // .replace(/\s/g, "%20")
            .split(" ")[0]
  
        $link =
          "https://www.joycenamenecklace.com/" + 
          jQuery(this).find("a:first").attr("href")
  
        $price =
          //  '$' +
          jQuery(this)
            .find(
              ".product_price:first span:first" 
            )
            .text()
            .trim()
            .replace(/\s/g, "")
        // .split('$')[1]
        // .split(' ')[0]
  
        if ($title && $img && $link && $price)
          $arr.push([$title, $img, $link, $price])
      }
    )
    $arr
  }
  

//////////////////////////////////////////////////////////


if (
  jQuery(".products-grid .product-item").length > 0 &&
  jQuery('.product-photo-container img:first').length === 0
) {
  $arr = []

  jQuery(".products-grid .product-item").each(function () {
    $title = jQuery(this).find(".product-title").text().trim()

    $img =
      // "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find(".product-item__image-wrapper img:first").attr("srcset") ||
        //  jQuery(this).find(".product-item__image-wrapper img:last").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      ).split(", ")[0]
    // .replace(/\s/g, "%20")

    $link =
      "https://www.bedandbathlinen.co.uk" + jQuery(this).find("a:first").attr("href")

    $price =
    jQuery(this).find(".price-box:first .special-price:first").text().trim() ||
      "$" +
      " " +
      jQuery(this).find(".regular-product:first").text().trim()
    .split("$")[1]
    
    // .trim()

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (
  jQuery(".grid--uniform .grid-product").length > 0 &&
  // jQuery('.product__main-photos img:first').length === 0
  jQuery('.product-single__description-full').length === 0
) {
  $arr = []

  jQuery(".grid--uniform .grid-product").each(function () {
    $title = jQuery(this).find(".grid-product__title").text().trim()

    $img =
    "https:" +
    (
      jQuery(this)
        .find(".grid__image-ratio:first div:last")
        .attr("data-bgset") ||
      jQuery(this)
        .find(".grid__image-ratio:last div:last")
        .attr("data-bgset") ||
      jQuery(this)
        .find(".grid__image-ratio:first source:first")
        .attr("srcset") ||
      jQuery(this)
        .find(".grid__image-ratio:first source:first")
        .attr("data-srcset") ||
      jQuery(this).find(".grid__image-ratio:last div:last").css("background-image")
      // .split("url(")[1]
      // .slice(-8) 
         ||
      ""
    )
      // .replace(/\s/g, "%20")
      .trim()
      .split(" ")[0]

    $link = "https://audvik.com" + jQuery(this).find("a:first").attr("href")

    $price =
    '$' +
    jQuery(this).find(".grid-product__price:first .money").text().trim().replace(/\s/g, "")
    .split("$")[1]

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (
  jQuery(".product_listing__main .product_item").length > 0 &&
  jQuery(".single_product__img img:first").length === 0
  // &&  jQuery('.product-details__desc-col').length === 0
) {
  $arr = []

  jQuery(".product_listing__main .product_item").each(function () {
    $title = jQuery(this)
      .find(".product_name:first")
      .text()
      .trim()

    $img =
      "https:" +
      // jQuery(this).find("img:first").attr("data-src") ||
      (
        jQuery(this).find("img:first").attr("data-srcset") ||
        jQuery(this).find("img:first").attr("srcset") ||
        jQuery(this).find("img:first").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://so-gorgeous.co.uk" + jQuery(this).find("a:first").attr("href")

    $price =
      //  '$' +
      jQuery(this)
        .find(".product_price:first .money")
        .text()
        .trim()
        .replace(/\s/g, "")
    // .split('$')[1]

    // if ($title && $img && $link && $price)
      $arr.push([$title, $img, $link, $price])
  })
  $arr
}

if (
  jQuery('[id="product-loop"] .product').length > 0 &&
  jQuery(".product-photo-container img:first").length === 0
  // &&  jQuery(".product-single").length === 0
) {
  $arr = []

  jQuery('[id="product-loop"] .product').each(function () {
    $title = jQuery(this).find("h3").text().trim()

    $img =
      "https:" +
      (
        jQuery(this).find("img:first").attr("src") ||
        //  jQuery(this).find("img:first").attr("data-srcset") ||
        //  jQuery(this).find("img:first").attr("srcset") ||
        // jQuery(this).find("img:last").attr("src") ||
        ""
      )
        // .replace(/\s/g, "%20")
        .split(" ")[0]

    $link =
      "https://shininglightdolls.com" + jQuery(this).find("a:first").attr("href")

    $price =
      // '$' +
      jQuery(this)
          .find(".price:first .onsale")
          .text()
          .trim()
          .replace(/\s/g, "")
          ||
    
        jQuery(this)
          .find(".price:first .prod-price")
          .text()
          .trim()
          .replace(/\s/g, "")
          

    // if ($title && $img && $link && $price)
    $arr.push([$title, $img, $link, $price])
  })
  $arr
}