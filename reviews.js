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

if (jQuery(".stamped-reviews .stamped-review").length > 0) {
  $arr = [];
  jQuery(".stamped-reviews .stamped-review").each(function (index) {
    content = jQuery(this).find(".stamped-review-content-body").text().trim();
    author = jQuery(this).find(".author").text().trim();
    rating = jQuery(this).find(".stamped-fa-star ").length;
    reviewed_at = jQuery(this).find(".created").text().trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}

if ($(".yotpo-reviews:eq(0) .yotpo-review:not(.yotpo-hidden)").length > 0) {
  $arr = [];
  $(".yotpo-reviews:eq(0) .yotpo-review:not(.yotpo-hidden)").each(function (
    index
  ) {
    content = $(this).find(".content-review").text().trim();
    author = $(this).find(".yotpo-user-name").text().trim();
    rating = $(this).find(".yotpo-icon-star").length + "";
    reviewed_at = $(this).find(".yotpo-review-date:eq(0)").text().trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}