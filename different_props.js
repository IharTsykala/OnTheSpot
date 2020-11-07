
div.radio-wrapper:contains(iPhone)


if (jQuery("div.radio-wrapper:contains(Design) option").length > 0) {
  [
    jQuery("div.radio-wrapper:contains(Design) option:selected").text() != ""
      ? jQuery("div.radio-wrapper:contains(Design) option:selected")
          .text()
          .trim()
          // .replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery("div.radio-wrapper:contains(Design) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}

if (
  jQuery("div.radio-wrapper:contains(Design) option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
  ) {
  jQuery("div.radio-wrapper:contains(Design) option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).trigger("change");
    }
  });
  }
  wait_for(function () {
  return true;
  });
  
  $text = false;
  if (
    jQuery("div.radio-wrapper:contains(Design) option").length > 0 &&
    $sarg != "No Size" &&
    $sarg != "Select Size"
  ) {
    $text = true;
    jQuery("div.radio-wrapper:contains(Design) option").each(function (index) {
      if (
        jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
        !jQuery(this).attr('disabled')
      ) {
        $text = false;
      }
    });
  }
  return $text;





