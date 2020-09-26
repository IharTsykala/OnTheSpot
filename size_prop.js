const jQuery = $d
if (jQuery(".ProductForm__Option option").length > 0) {
  [
    jQuery(".ProductForm__Option option[selected='selected']").text() != ""
      ? jQuery(".ProductForm__Option option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
          .split(' ')
          .slice(0,2)
          .join('')
      : "Select Size",
    jQuery.makeArray(
      jQuery(".ProductForm__Option option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e)
          .text()
          .trim()
          .replace(/\s\s+/g, "")
          .split(' ')
          .slice(0,2)
          .join('');
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}
//pa_sizes clicker
if (
  jQuery(".ProductForm__Option option").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".ProductForm__Option option").each(function () {
    if (jQuery(this).text()
    .trim()
    .replace(/\s\s+/g, "")
    .split(' ')
    .slice(0,2)
    .join('') == $sarg) {
      jQuery("#option-size")
        .text(jQuery(this).text()
        .trim()
        .replace(/\s\s+/g, "")
        .split(' ')
        .slice(0,2)
        .join(''))
        .trigger("change");
    }
  });
}
wait_for(function () {
  return true;
});
//pa_sizes stock status
$text = false;
if (
  jQuery("#option-size").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery("#option-size option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).text().trim().replace(/\s\s+/g, "").indexOf("out") >= 0
    ) {
      $text = false;
    }
  });
}
return $text;

const jQuery = $d

if (jQuery(".swatch:contains(Size) label").length > 0) {
  [
    jQuery(".swatch:contains(Size) label.active").text() != ""
      ? jQuery(".swatch:contains(Size) label.active")
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      : "Select Size",
    jQuery.makeArray(
      jQuery(".swatch:contains(Size) label").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e)
          .text()
          .trim()
          .replace(/\s\s+/g, "")          
      })
    ),
  ];
} else {
  ["No Size", ["No Size"]];
}
//pa_sizes clicker
if (
  jQuery(".swatch:contains(Size) label").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery(".swatch:contains(Size) label").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this)[0].click();
    }
  });
}
wait_for(function () {
  return true;
});

if ((jQuery('fieldset.single-option-radio label').length > 0) && ($sarg != "Select item") && ($sarg != "No item")){
  jQuery('fieldset.single-option-radio label').each(function(){
     if (jQuery(this).text().trim() == $sarg){
         jQuery(this)[0].click()
     }
  });
}
wait_for(function(){return true;})


// for input

if (jQuery('fieldset.single-option-radio').length > 0) {
  [
    jQuery('fieldset.single-option-radio label').length > 0
      ? jQuery('fieldset.single-option-radio input:checked').next().text().trim()         
          
      : "Select item",
    jQuery.makeArray(
      jQuery('fieldset.single-option-radio label').map(function (i, e) {
        if (jQuery(e).text().trim() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No item", ["No item"]];      }


  if (jQuery(".swatch:contains(Size)").length > 0) {
    [
      jQuery(".swatch:contains(Size) input:checked").attr('value') != (undefined && '')
        ? jQuery(".swatch:contains(Size) input:checked").attr('value')           
            .replace(/\s\s+/g, "")          
        : "Select item",
      jQuery.makeArray(
        jQuery(".swatch:contains(Size) input").map(function (i, e) {
          if (jQuery(e).attr('value') != "")
            return jQuery(e)
            .attr('value')
            .replace(/\s\s+/g, "")          
        })
      ),
    ];
  } else {
    ["No Size", ["No Size"]];
  }


  if (
    jQuery(".swatch:contains(Size) input").length > 0 &&    
    $sarg != "No Size"
  ) {
    jQuery(".swatch:contains(Size) input").each(function () {
      if (jQuery(this).attr('value').replace(/\s\s+/g, "") == $sarg) {
        jQuery(this).next()[0].click();
      }
    });
  }
  wait_for(function () {
    return true;
  });


  // for li a

  if (jQuery("ul.size li").length > 0) {
    [
      jQuery(
        "ul.size li.swatch__item--selected a"
      ).length > 0
        ? JSON.parse(jQuery(
            "ul.size li.swatch__item--selected a"
          )
          .attr('data-layer-click')).interaction.value
        : "Select Color",
      jQuery.makeArray(
        jQuery("ul.size a").map(function (
          i,
          e
        ) {
          if (JSON.parse(jQuery(e).attr('data-layer-click')).interaction.value)
           return JSON.parse(jQuery(e).attr('data-layer-click')).interaction.value;
        })
      ),
    ];
  } else ["No Color", ["No Color"]];


  if (
    jQuery("ul.size a").length > 0 &&
    $sarg != "Select Color" &&
    $sarg != "No Color"
  ) {
    jQuery("ul.size a").each(function () {
      if (JSON.parse(jQuery(e).attr('data-layer-click')).interaction.value == $sarg) jQuery(this).click();
    });
  }
  wait_for(function () {
    return true;
  });