if (
  jQuery(".product-reviews-page .product-review-list .product-review-item")
    .length > 0
) {
  $arr = [];
  jQuery(
    ".product-reviews-page .product-review-list .product-review-item"
  ).each(function () {
    content = jQuery(this).find(".review-text").text().trim();
    author = jQuery(this).find(".user").text().split(":")[1].trim();
    rating = jQuery(this).find(".rating").attr("rating") || "5";
    reviewed_at = jQuery(this).find(".date").text().split(":")[1].trim();
    $arr.push({ content, author, rating, reviewed_at });
  });
  $arr;
}

if (jQuery(".bv-content-list-reviews .bv-content-review").length > 0) {
  $arr = [];
  jQuery(".bv-content-list-reviews .bv-content-review").each(function (index) {
    content = jQuery(this).find(".bv-content-summary-body-text").text().trim();
    author = jQuery(this).find(".bv-author").text().trim();
    rating = jQuery(this).find('[itemprop="ratingValue"]').attr("content");
    reviewed_at = jQuery(this)
      .find('[itemprop="datePublished"]')
      .attr("content");
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

if (jQuery(".jdgm-rev-widg__reviews .jdgm-rev").length > 0) {
  $arr = [];
  jQuery(".jdgm-rev-widg__reviews .jdgm-rev").each(function (index) {
    content = jQuery(this).find(".jdgm-rev__body").text().trim();
    author = jQuery(this).find(".jdgm-rev__author").text().trim();
    rating = jQuery(this).find(".jdgm-rev__rating").attr("data-score");
    reviewed_at = jQuery(this).find(".jdgm-rev__timestamp").text().trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

if (jQuery("#pr-review-display .pr-review").length > 0) {
  $arr = [];
  jQuery("#pr-review-display .pr-review").each(function (index) {
    content = jQuery(this).find(".pr-rd-description-text").text().trim();
    author = jQuery(this)
      .find(".pr-rd-author-nickname span span:last")
      .text()
      .trim();
    rating = jQuery(this).find(".pr-star-v4.pr-star-v4-100-filled").length;
    reviewed_at = jQuery(this)
      .find(".pr-rd-author-submission-date time")
      .text();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

if (jQuery(".pr-contents-wrapper .pr-review-wrap").length > 0) {
  $arr = [];
  jQuery(".pr-contents-wrapper .pr-review-wrap").each(function (index) {
    content = jQuery(this).find('[itemprop="reviewBody"]').text().trim();
    author = jQuery(this).find('[itemprop="author"]').text().trim();
    rating = jQuery(this).find('[itemprop="ratingValue"]').attr("content");
    reviewed_at = jQuery(this).find('[itemprop="dateCreated"]').attr("content");
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

if (jQuery(".spr-reviews .spr-review").length > 0) {
  $arr = [];
  jQuery(".spr-reviews .spr-review").each(function (index) {
    content = jQuery(this).find(".spr-review-content-body").text().trim();
    author = jQuery(this)
      .find(".spr-review-header-byline strong:eq(0)")
      .text()
      .trim();
    rating = jQuery(this).find(".spr-icon.spr-icon-star").length;
    reviewed_at = jQuery(this)
      .find(".spr-review-header-byline strong:eq(1)")
      .text()
      .trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

if (jQuery("#BVRRDisplayContentID").length > 0) {
  $arr = [];
  jQuery("#BVRRDisplayContentID div.BVRRContentReview").each(function (index) {
    content = jQuery(this).find(".BVRRReviewText").text().trim();
    author = jQuery(this).find(".BVRRNickname").text().trim();
    rating = jQuery(this).find('span[itemprop="ratingValue"]').text().trim();
    reviewed_at = jQuery(this).find(".BVRRValue.BVRRReviewDate").text().trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

if (jQuery(".okeReviews-reviews-main article").length > 0) {
  $arr = [];
  jQuery(".okeReviews-reviews-main article").each(function (index) {
    content = jQuery(this).find(".okeReviews-review-main-content-body p").text().trim();
    author = jQuery(this).find(".okeReviews-review-reviewer-profile-name").text().trim();
    rating = jQuery(this).find(".okeReviews-starRating span:first").text().trim().split(' ')[1];
    reviewed_at = jQuery(this).find("h2.okeReviews-review-main-heading").text().trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

if (jQuery("ol.bv-content-list-reviews li.bv-content-item").length > 0) {
  $arr = [];
  jQuery("ol.bv-content-list-reviews li.bv-content-item").each(function (
    index
  ) {
    content = jQuery(this).find('.bv-content-summary-body-text p').text().trim();
    author = jQuery(this).find(".bv-author-avatar-nickname span.bv-author").text().trim();
    rating = jQuery(this).find("meta[itemprop='ratingValue']").attr('content');
    reviewed_at = jQuery(this).find("h3.bv-content-title").text().trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}
bv-content-list bv-content-list-reviews
bv-content-item bv-content-top-review bv-content-review bv-content-loaded
spr-review-header-byline
bv-content-item bv-content-top-review bv-content-review

if (jQuery("._3cycCZ .QPvkn6").length > 0) {
  $arr = [];
  jQuery("._3cycCZ .QPvkn6").each(function (
    index
  ) {
    content = jQuery(this).find('._2t8wE0').text().trim();
    author = jQuery(this).find("._3mmiIt p._2675cp").text().trim();
    rating = jQuery(this).find("span._1EWQTj").text().trim()[0];
    reviewed_at = '';
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}
_3LYOAd _3sxSiS _2675cp


let arrayReviews = Array.from(Array.from(
  document.querySelectorAll("div")
).filter(
  e => e.textContent.includes("Ratings and Reviews")
)[11].parentNode.nextSibling.nextSibling.nextSibling.childNodes);

let arrayReviews = Array.from(Array.from(
  document.querySelectorAll("div")
).filter(  
  e => e.textContent.includes("Ratings and Reviews") 
).filter(item=> item.outerText === 'Ratings and Reviews')[0].parentNode)

arrayReviews.map(review => {
let issue = []
let content = review.querySelectorAll('div div div div div')[7].innerText
// .innerText.trim();
let author
if(review.querySelectorAll('div div div div div')[9].querySelector('p'))
author = review.querySelectorAll('div div div div div')[9].querySelector('p').innerText.trim()
else author = review.querySelectorAll('div div div div div')[11].querySelector('p').innerText.trim()
// .nextSibling.querySelector('p').innerText.trim()
// .nextSibling.querySelector('p')
// .innerText.trim()
let rating = review.querySelectorAll('div div div div div div div')[6].nextSibling.innerText[0];
let reviewed_at = review.querySelectorAll('div div div div div')[7].innerText
// .innerText.trim();
issue = [content, author, rating, reviewed_at]
return issue
})