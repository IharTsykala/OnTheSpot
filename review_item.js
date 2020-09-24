if (jQuery(".grid-wrap .box").length > 0) {
  $arr = [];
  jQuery(".grid-wrap .box").each(function (index) {
    content = jQuery(this).find(".main-text").text().trim();
    author = jQuery(this).find(".title").text().trim();
    rating = jQuery(this).find(".stars i").length;
    reviewed_at = jQuery(this).find(".value").text().trim();
    $arr[index] = { content, author, rating, reviewed_at };
  });
  $arr;
}