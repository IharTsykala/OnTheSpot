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

////////////////////////////////////////////////////////////////
///////////////////////////////////////////
////////////////////////////////////////////////////////

// ul li

if (jQuery('ul[id="model-dropdown"] li').length > 0) {
  [
    jQuery(
      'ul[id="model-dropdown"] li.active'
    ).length > 0
      ?jQuery(
          'ul[id="model-dropdown"] li.active'
        )       
          .text().trim().replace(/\s\s+/g, "")
      : "Select Size",
    jQuery.makeArray(
      jQuery('ul[id="model-dropdown"] li').map(function (
        i,
        e
      ) {
        if (jQuery(e)
        .text().trim().replace(/\s\s+/g, ""))
         return jQuery(e)
         .text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else ["No Size", ["No Size"]];


if (
  jQuery('ul[id="model-dropdown"] li').length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery('ul[id="model-dropdown"] li').each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "")) jQuery(this).cbuttonck();
  });
}
wait_for(function () {
  return true;
});

//pa_sizes stock status
$text = false;
if (
  jQuery('ul[id="model-dropdown"] li').length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery('ul[id="model-dropdown"] li').each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr("data-available")
    ) {
      $text = false;
    }
  });
}
return $text;
