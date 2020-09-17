// name

document.querySelector(".container h1").innerText.trim();

// description

document.querySelector(".container h3.desc p").innerText.trim();

// Main Image Getter JS

let img;
if (
  document.querySelectorAll(".container .carousel-item.active img").length > 0
)
  img = document
    .querySelectorAll(".container .carousel-item.active img")[0]
    .getAttribute("src");
else
  img = document
    .querySelectorAll('meta[property="og:image"]')[0]
    .getAttribute("content");

if (img.indexOf("http") == -1) img = "https:" + img;
else img;

// Item Images Getter JS

if (document.querySelectorAll(".carousel-indicators li img").length > 0) {
  let img;
  let arr = [];
  document
    .querySelectorAll(".carousel-indicators li img")
    .forEach(function (item, index) {
      img = item.getAttribute("src").split("?")[0];
      if (img.indexOf("http") == -1) img = "https:" + img;
      if (index < 4) arr.push(img);
    });
  arr;
}

// Price Getter JS

document
  .querySelector(".card-boxes .active-card .product-choice .item-price")
  .innerText.trim() ||
  document.querySelector(".add-to-cart-item .price").innerText.trim();

// Stock Status Getter JS

document
  .querySelector("#AddToCart")
  .innerText.trim()
  .toLowerCase()
  .indexOf("out") >= 0;

// Reviews Getter JS

if (document.querySelectorAll(".stamped-reviews .stamped-review").length > 0) {
  arr = [];
  document
    .querySelectorAll(".stamped-reviews .stamped-review")
    .forEach(function (item, index) {
      content = item
        .querySelector(".stamped-review-content-body")
        .innerText.trim();
      author = item.querySelector(".author").innerText.trim();
      rating = item.querySelectorAll(".stamped-fa-star ").length;
      reviewed_at = item.querySelector(".created").innerText.trim();
      arr[index] = { content, author, rating, reviewed_at };
    });
  arr;
}

if (jQuery(".okeReviews-reviews-review").length > 0) {
  $arr = [];
  jQuery(".okeReviews-reviews-review").each(function (index) {
    content = jQuery(this)
      .find(".okeReviews-review-main-content")
      .text()
      .trim();
    author = jQuery(this)
      .find(".okeReviews-review-reviewer-profile-name")
      .text()
      .trim();
    rating = jQuery(this)
      .find(".okeReviews-starRating .okeReviews-a11yText:first")
      .text()
      .trim()
      .split(" ")[1];
    reviewed_at = jQuery(this)
      .find(".okeReviews-review-date span:last")
      .text()
      .trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

// https://shoptimages.s3.amazonaws.com/logos/mrporter-logo.svg

if ($price.indexOf("AUD") > -1)
  $price = "AUD" + $price.replace("AUD", "").replace("\u0024", "").trim();
else if ($price.indexOf("CAD") > -1)
  $price = "CAD" + $price.replace("CAD", "").replace("\u0024", "").trim();
else if ($price.indexOf("USD") > -1)
  $price = "USD" + $price.replace("USD", "").replace("\u0024", "").trim();
else if ($price.indexOf("NZD") > -1)
  $price = "NZD" + $price.replace("NZD", "").replace("\u0024", "").trim();
else if ($price.indexOf("CNY") > -1)
  $price =
    "CNY" + $price.replace("CNY", "").trim().replace("\u0024", "").trim();
else if ($price.indexOf("Rs.") > -1)
  $price = "INR" + $price.replace("INR", "").replace("Rs.", "").trim();
else if ($price.indexOf("HKD") > -1)
  $price = "HKD" + $price.replace("HKD", "").replace("\u0024", "").trim();
else if ($price.indexOf("SGD") > -1)
  $price = "SGD" + $price.replace("SGD", "").replace("\u0024", "").trim();
else if ($price.indexOf("GBP") > -1)
  $price = "GBP" + $price.replace("GBP", "").replace("£", "").trim();
else if ($price.indexOf("EUR") > -1)
  $price = "EUR" + $price.replace("EUR", "").replace("€", "").trim();
else if ($price.indexOf("JPY") > -1)
  $price = "JPY" + $price.replace("JPY", "").replace("¥", "").trim();

////////////////////////////////////

if ($pr.indexOf("AUD") > -1)
  $pr = "AUD" + $pr.replace("AUD", "").replace("\u0024", "").trim();
else if ($pr.indexOf("CAD") > -1)
  $pr = "CAD" + $pr.replace("CAD", "").replace("\u0024", "").trim();
else if ($pr.indexOf("USD") > -1)
  $pr = "USD" + $pr.replace("USD", "").replace("\u0024", "").trim();
else if ($pr.indexOf("NZD") > -1)
  $pr = "NZD" + $pr.replace("NZD", "").replace("\u0024", "").trim();
else if ($pr.indexOf("CNY") > -1)
  $pr = "CNY" + $pr.replace("CNY", "").trim().replace("\u0024", "").trim();
else if ($pr.indexOf("Rs.") > -1)
  $pr = "INR" + $pr.replace("INR", "").replace("Rs.", "").trim();
else if ($pr.indexOf("HKD") > -1)
  $pr = "HKD" + $pr.replace("HKD", "").replace("\u0024", "").trim();
else if ($pr.indexOf("SGD") > -1)
  $pr = "SGD" + $pr.replace("SGD", "").replace("\u0024", "").trim();
else if ($pr.indexOf("GBP") > -1)
  $pr = "GBP" + $pr.replace("GBP", "").replace("£", "").trim();
else if ($pr.indexOf("EUR") > -1)
  $pr = "EUR" + $pr.replace("EUR", "").replace("€", "").trim();
else if ($pr.indexOf("JPY") > -1)
  $pr = "JPY" + $pr.replace("JPY", "").replace("¥", "").trim();

$pr;

// replace для абзацев

replace(/\s\s+/g, " ");

////////////////////////////////////////////////////////////////////////////////////////////REGEXP

// ^https?\:\/\/ego\.co\.uk\/[cC]heckout - basket url identificator
// ^https?\:\/\/www\.dereklam\.com\/\w+\/[bB]ag
// =(\d{5,})
// cart_regexUrl
// \/([A-Za-z0-9-]+)\.html
// [0-9]{10}
// /([\d\w-]+$)
// /[-a-z]+/(\W|$)
// products\/([A-Za-z0-9-]+)
// \/products\/([\w-]+)
// /checkouts\/([A-Za-z0-9-?&=._]+)
// /\d{4,}/(\d{4,})
// ^https?\:\/\/www\.jildorshoes\.com\/\w+\/[cC]art
// google docs sites list
// https://docs.google.com/spreadsheets/d/1xyadL6335H8X9Z3Aa5B0tOnBy6ldDG979IJdwowrPwo/edit#gid=0
// amazon for logos avaliable in jopinhoney // don`t forget set read on images
// https://s3.console.aws.amazon.com/s3/buckets/rules-images/images/?region=us-west-2&tab=overview#
// amazon for images  // don`t forget set read on images
// https://s3.console.aws.amazon.com/s3/buckets/shoptimages/?region=us-west-2&tab=overview#
// замена всех пробелов
// /\s\s+/g
// заеина всех enters
// /(\r\n|\n|\r)/gm
// euro literal \u20AC
// замена ысех запятых
// /[\,%]/g
// replace(/\u00a0/g, "") replace &nbsp;
// native choose last element of node list
//  document.querySelector('.view-grid .element:last-of-type')
// emit onchange on input
//  document.querySelector('.coupon.promotional input[type="text"]').dispatchEvent(new Event('change', {bubbles: true}));
//  document.querySelector('.coupon.promotional button').click()
// document.querySelector('[name="discount_code_show"]').dispatchEvent(new Event('input', {bubbles: true}));  document.querySelector('[name="discount_code_show"]').dispatchEvent(new Event('change'));
// sudo npm install -g --unsafe-per m node-sass
// быстрое удаление деток
// jQuery(this).find(".amount ").clone().children().remove().end().text().replace('from','').trim()
// var jQuery = $d
// get pnly numbers
// .match(/(\d+([,\s]?\d+){0,9}.?\d+)/ig)[0]

// когда в урле картинки есть пробелы - мы заменяем их на %20!!!!!!!!!!
// replace(' ', '%20')








//POPULAR////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

wait_for(function() {return jQuery && jQuery.fn.jquery;});
//name
jQuery('h1.ProductMeta__Title').text().replace(/\s\s+/g, " ").replace('-','').trim();
//brand getter
jQuery('.ProductMeta__Vendor').text().trim() || "Sachin And Babi";
//gender getter
if (jQuery('.breadcrumbs').text().indexOf("Women") >= 0) "Female";
else if (jQuery('.breadcrumbs').text().indexOf("Men") >= 0) "Male";
else "";
//description
jQuery('.ProductMeta__Description').text().trim();
jQuery('.ProductMeta__Description').text().replace(/\s\s+/g, " ");
//main image
if (jQuery('.Carousel__Cell.is-selected noscript').length > 0)
  $img = jQuery('.Carousel__Cell.is-selected noscript').text().split('src="')[1].split('"')[0];
else $img = jQuery('meta[property="og:image"]:eq(0)').attr("content");
​
if ($img.indexOf("http") == -1) "https:" + $img;
else $img;
​
//item images getter
if (jQuery('.Product__Slideshow .Carousel__Cell noscript').length > 0) {
  $arr = [];
  jQuery('.Product__Slideshow .Carousel__Cell noscript').each(function(index) {
    if (index < 4) $arr.push('https:'+jQuery(this).text().split('src="')[1].split('"')[0]);
  });
  $arr;
}
​
//price
$pr = jQuery('.ProductMeta [data-money-convertible]:last').text().replace(/\s+/g,'')
​
if ($pr.indexOf("AUD") > -1)
  $pr = "AUD"+$pr.replace("AUD","").replace("\u0024","").trim()
else if ($pr.indexOf("CAD") > -1)
  $pr = "CAD"+$pr.replace("CAD","").replace("\u0024","").trim()
else if ($pr.indexOf("USD") > -1)
  $pr = 'USD'+$pr.replace("USD","").replace("\u0024","").trim()
else if ($pr.indexOf("Rs.") > -1)
  $pr = 'INR'+$pr.replace("INR","").replace("Rs.","").trim()
else if ($pr.indexOf("GBP") > -1)
  $pr = 'GBP'+$pr.replace("GBP","").replace('£','').trim()
else if ($pr.indexOf("EUR") > -1)
  $pr = 'EUR'+$pr.replace("EUR","").replace('€','').trim()
else if ($pr.indexOf("JPY") > -1)
  $pr = 'JPY'+$pr.replace("JPY","").replace('¥','').trim()
else if ($pr.indexOf("SEK") > -1)
  $pr = 'SEK'+$pr.replace("SEK","").trim()
else if ($pr.indexOf("NOK") > -1)
  $pr = 'NOK'+$pr.replace("NOK","").trim()
else if ($pr.indexOf("DKK") > -1)
  $pr = 'DKK'+$pr.replace("DKK","").trim()
​
$pr;
​
jQuery('.ProductMeta [data-money-convertible] .money').text().replace(/\s+/g,'')
//original price
jQuery('#ComparePrice-product-template').text().replace(/\s+/g,'') || jQuery('#ProductPrice-product-template').text().replace(/\s+/g,'')
//stock avaliable
jQuery(".availability.unavailable").length > 0
jQuery("#BIS_trigger").hasClass("is-hidden")
jQuery("#js-waitlist-row").hasClass("hide")
jQuery('.ProductForm__AddToCart').text().trim().toLowerCase().indexOf("out") >= 0 || jQuery("h1:contains(404)").length > 0;
//mulitiproducts
if (jQuery('.ProductList .ProductItem').length > 0 && jQuery('.Product__Info').length === 0) {
  $arr = [];
  jQuery('.ProductList .ProductItem').each(function() {
    $title = jQuery(this).find('.ProductItem__Title').text().replace(/\s\s+/g,' ').trim();
    $img = 'https:'+jQuery(this).find('noscript').text().split('src="')[1].split('"')[0];
    $link = 'https://elietahari.com'+jQuery(this).find('a').attr("href");
    $price = jQuery(this).find('[data-money-convertible]:first').text().replace(/\s+/g,'');
    $arr.push([$title, $img, $link, $price]);
  });
  $arr;
}
//reviews
if (jQuery('.tt-c-reviews-list__content .tt-c-review').length > 0) {
  $arr = [];
  jQuery('.tt-c-reviews-list__content .tt-c-review').each(function() {
      content = jQuery(this).find('.tt-c-review__text-content').text().trim();
      author = jQuery(this).find('.tt-o-byline__author').text().trim()
      rating = jQuery(this).find('.tt-o-icon--star--full').length
      reviewed_at = jQuery(this).find('.tt-c-review__date').text().trim();
      $arr.push({ content, author, rating, reviewed_at });
  });
  $arr;
}
​
if (jQuery(".yotpo-reviews:eq(0) .yotpo-review:not(.yotpo-hidden)").length > 0) {
  jQueryarr = [];
  jQuery(".yotpo-reviews:eq(0) .yotpo-review:not(.yotpo-hidden)").each(function(index) {
    content = jQuery(this).find(".content-review").text().trim();
    author = jQuery(this).find(".yotpo-user-name").text().trim();
    rating = jQuery(this).find(".yotpo-icon-star").length + "";
    reviewed_at = jQuery(this).find(".yotpo-review-date:eq(0)").text().trim();
    jQueryarr[index] = { content, author, rating, reviewed_at };
  });
  jQueryarr;
}
//color getter
if (jQuery('.ColorSwatchList').length > 0) {if (
    jQuery('.ColorSwatchList input:checked').length > 0) {
    [jQuery('.ColorSwatchList input:checked').val().trim(),
      jQuery.makeArray(jQuery('.ColorSwatchList input').map(function(i,e) {return jQuery(e).val().trim();}))];
    } else 
    ["Select Color", jQuery.makeArray(jQuery('.ColorSwatchList input').map(function(i,e) {return jQuery(e).val().trim();}))];
} else ["No Color", ["No Color"]];
//Length clicker
if (jQuery('.ColorSwatchList').length > 0 && $sarg != "Select Color" && $sarg != "No Color") {
  jQuery('.ColorSwatchList input').each(function() {
    if (jQuery(this).val().trim() == $sarg) jQuery(this)[0].click();
  });
}
wait_for(function() {return true;});
//Length stock ctatus
$val = false;
if (jQuery('.ColorSwatchList').length > 0 && $sarg != "No Color" && $sarg != "Select Color"
) {$val = true;
  jQuery('.ColorSwatchList input').each(function() {
    if (jQuery(this).val().trim() == $sarg && !jQuery(this).next().hasClass('soldout')) {
      $val = false;
    }
  });
}
return $val;
//for select and options
//color getter
if (jQuery('#va-size').length > 0) {
  [jQuery('#va-size option:selected').val() != ''
      ? jQuery('#va-size option:selected').text().trim() : "Select Size",
    jQuery.makeArray(jQuery('#va-size option').map(function(i,e) {if (jQuery(e).val() != '')
          return jQuery(e).text().trim();}))];
} else ["No Size", ["No Size"]];
//auswahl_groesse clicker
if (jQuery('#va-size').length > 0 && $sarg != "Select Size" && $sarg != "No Size") {
  jQuery('#va-size option').each(function() {
    if (jQuery(this).text().trim() == $sarg) {
      jQuery('#va-size').val(jQuery(this).val()).trigger("change");
    }
  });
}
wait_for(function() {return true;});
//auswahl_groesse stock status
$val = false;
if (jQuery('#va-size').length > 0 && $sarg != "No Size" && $sarg != "Select Size") {
  $val = true;
  jQuery('#va-size option').each(function(index) {
    if (jQuery(this).text().trim() == $sarg && !jQuery(this).attr("disabled")) {
      $val = false;
    }
  });
}
return $val;
//Style getter
if (jQuery(".Popover .Popover__Header:contains(Size)").length > 0) {
  [jQuery(".Popover .Popover__Header:contains(Size)").parent().find(".Popover__Value.is-selected").length > 0
      ? jQuery(".Popover .Popover__Header:contains(Size)").parent().find(".Popover__Value.is-selected").text().trim()
      : "Select Size",
    jQuery.makeArray(jQuery(".Popover .Popover__Header:contains(Size)").parent().find(".Popover__Value").map(function(i, e) {
          return jQuery(e).text().trim();
        }))];
} else ["No Size", ["No Size"]];
//Throws With clicker
if (jQuery(".Popover .Popover__Header:contains(Size)").length > 0 && $sarg != "Select Size" && $sarg != "No Size") {
  jQuery(".Popover .Popover__Header:contains(Size)").parent().find(".Popover__Value").each(function() {
      if (jQuery(this).text().trim() == $sarg) jQuery(this)[0].click();
    });
}
wait_for(function() {return true;});
//length length status
$val = false;
if (jQuery(".Popover .Popover__Header:contains(Size)").length > 0 && $sarg != "No Size" && $sarg != "Select Size") {
  $val = true;
  jQuery(".Popover .Popover__Header:contains(Size)").parent().find(".Popover__Value").each(function(index) {
      if (jQuery(this).text().trim() == $sarg && !jQuery(this).attr("disabled")) $val = false;
    });
}
return $val;
​
// .field__input-btn-wrapper .field__input-btn
// document.querySelector('.tag__wrapper .tag__button').click()
​
document.addEventListener("click", e => {console.log(e.target);});
​
document.querySelector(".view-grid .element:last-of-type");
​
if ($pr.indexOf("CA$") >= 0) $pr = $pr.replace("CA$", "CAD");
else if ($pr.indexOf("US$") >= 0) $pr = $pr.replace("US$", "USD");
else if ($pr.indexOf("AU$") >= 0) $pr = $pr.replace("AU$", "AUD");
​
$pr;
​
​
​
​
​
​
​
​
​
if (jQuery('[id*="product-template-color"]').length > 0) {if (
  jQuery('[id*="product-template-color"] .VariantSelector__Item.is-selected').length > 0) {
  [jQuery('[id*="product-template-color"] .VariantSelector__Item.is-selected').attr('data-option-value').trim(),
    jQuery.makeArray(jQuery('[id*="product-template-color"] .VariantSelector__Item').map(function(i,e) {return jQuery(e).attr('data-option-value').trim();}))];
  } else 
  ["Select color", jQuery.makeArray(jQuery('[id*="product-template-color"] .VariantSelector__Item').map(function(i,e) {return jQuery(e).attr('data-option-value').trim();}))];
} else ["No color", ["No color"]];
//Length clicker
if (jQuery('[id*="product-template-color"]').length > 0 && $sarg != "Select color" && $sarg != "No color") {
jQuery('[id*="product-template-color"] .VariantSelector__Item').each(function() {
  if (jQuery(this).attr('data-option-value').trim() == $sarg) jQuery('.VariantSelector__Button').click();
});
}
wait_for(function() {return true;});
//Length stock ctatus
$val = false;
if (jQuery('[id*="product-template-color"]').length > 0 && $sarg != "No color" && $sarg != "Select color"
) {$val = true;
jQuery('[id*="product-template-color"] .VariantSelector__Item').each(function() {
  if (jQuery(this).attr('data-option-value').trim() == $sarg && !jQuery(this).next().hasClass('soldout')) {
    $val = false;
  }
});
}
return $val;
Collapse


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// www.sportsdirect.com
//url
//    \/checkout\/usevoucher|\/checkout\/payment

// input
// .CheckInpBox input[id*="PromoCodeApplication"]

// button
//   .CheckStoreBut input[id*="PromoCodeApplication"]

// total price
//   #TotalValue

// event click
// if (jQuery('a.Voucher').length)
// jQuery('a.Voucher')[0].click()


// coupon pre applay
// 3000
