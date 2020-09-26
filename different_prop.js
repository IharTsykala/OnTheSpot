CalaviekBiezMaski, [17.09.20 10:42]
//=================Property getter================

if (jQuery("#configurable_swatch_size li ").length > 0) {
  [
    jQuery(
      "#configurable_swatch_size li.selected"
    ).length > 0
      ? jQuery(
          "#configurable_swatch_size li.selected"
        )
        .find('.swatch-label')
          .text()
          .trim()
      : "Select Color",
    jQuery.makeArray(
      jQuery("#configurable_swatch_size li").map(function (
        i,
        e
      ) {
        if (jQuery(e).find('.swatch-label').text().trim()) return jQuery(e).find('.swatch-label').text().trim();
      })
    ),
  ];
} else ["No Color", ["No Color"]];

//=================Property clicker==================

if (
  jQuery("#configurable_swatch_size li").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("#configurable_swatch_size li").each(function () {
    if (jQuery(this).find('.swatch-label').text().trim() == $sarg) jQuery(this).find('.swatch-label').click();
  });
}
wait_for(function () {
  return true;
});

//=================Property stock ctatus===============

$val = false;
if (
  jQuery("#configurable_swatch_size li").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $val = true;
  jQuery("#configurable_swatch_size li").each(function () {
    if (
      jQuery(this).find('.swatch-label').text().trim() == $sarg &&
      !jQuery(this).hasClass(".not-available")
    ) {
      $val = false;
    }
  });
}
return $val;