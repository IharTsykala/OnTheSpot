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


  if (jQuery(".product-single__swatches:contains(Size)").length > 0) {
    [
      jQuery(".product-single__swatches:contains(Size) input:checked").attr('value') != (undefined && '')
        ? jQuery(".product-single__swatches:contains(Size) input:checked").attr('value')           
            .replace(/\s\s+/g, "")          
        : "Select item",
      jQuery.makeArray(
        jQuery(".product-single__swatches:contains(Size) input").map(function (i, e) {
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
    jQuery(".product-single__swatches:contains(Size) input").length > 0 &&    
    $sarg != "No Size"
  ) {
    jQuery(".product-single__swatches:contains(Size) input").each(function () {
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

  

  if (jQuery("ul.dropdown-menu li").length > 0) {
    [
      jQuery(
        "button.dropdown-toggle"
      ).length > 0
        ? jQuery("button.dropdown-toggle")
            .text()
            .trim()
            .replace(/\s\s+/g, "")          
        : "Select Size",
      jQuery.makeArray(
        jQuery("ul.dropdown-menu a").map(function (
          i,
          e
        ) {
          if (jQuery(e).text().trim().replace(/\s\s+/g, ""))
           return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else ["No Size", ["No Size"]];


  if (
    jQuery("ul.dropdown-menu li").length > 0 &&
    $sarg != "Select Size" &&
    $sarg != "No Size"
  ) {
    jQuery("ul.dropdown-menu a").each(function () {
      if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
    });
  }
  wait_for(function () {
    return true;
  });


  $text = false;
if (
  jQuery("ul.dropdown-menu li").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {  
  $text = true;
  jQuery("ul.dropdown-menu li").each(function (index) {  
    // console.log(jQuery(this),!jQuery(this).attr('class').indexOf("disabled") >= 0)
    if (
      jQuery(this).find('a').text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('class').indexOf("disabled") >= 0
    ) {
      $text = false;            
    }
  });
}
return $text;

$val = false;
  if (
    jQuery(".swatch:contains(Size)").length > 0 &&
    $sarg != "No size" &&
    $sarg != "Select size"
  ) {
    $val = true;
    jQuery(".swatch:contains(Size) input").each(function () {
      if (
        jQuery(this).attr("value").trim() == $sarg &&
        !jQuery(this).hasClass("unavailable").length > 0
      ) {
        $val = false;
      }
    });
  }
  return $val;

  // Select
  if (jQuery("select[id='main:lstSkuSize']").length > 0) {
    [
      jQuery("select[id='main:lstSkuSize'] option:selected").text() != ""
        ? jQuery("select[id='main:lstSkuSize'] option:selected")
            .text()
            .trim()
            .replace(/\s\s+/g, "")
        : "Select Size",
      jQuery.makeArray(
        jQuery("select[id='main:lstSkuSize'] option").map(function (i, e) {
          if (jQuery(e).text() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "");
        })
      ),
    ];
  } else {
    ["No Size", ["No Size"]];
  }

  //pa_sizes clicker
if (
  jQuery("select[id='main:lstSkuSize']").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("select[id='main:lstSkuSize'] option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery("select[id='main:lstSkuSize']")
        .text(jQuery(this).text())
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
  jQuery("select[id='main:lstSkuSize']").length > 0 &&
  $sarg != "No Size" &&
  $sarg != "Select Size"
) {
  $text = true;
  jQuery("select[id='main:lstSkuSize'] option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).parent().prev().text().trim().replace(/\s\s+/g, "").toLowerCase().indexOf("not available") >= 0
    ) {
      $text = false;
    }
  });
}
return $text;



if (jQuery("div.size-selector-container a[data-talos='buttonSize']").length > 0) {
  [
    jQuery(
      "div.size-selector-container a[data-talos='buttonSize'].selected"
    ).length > 0
      ? jQuery(
        "div.size-selector-container a[data-talos='buttonSize'].selected"
        ).text().trim().replace(/\s\s+/g, "")       
      : "Select Size",
    jQuery.makeArray(
      jQuery("div.size-selector-container a[data-talos='buttonSize']").map(function (
        i,
        e
      ) {
        if (jQuery(e).text() != '')
         return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ];
} else ["No Size", ["No Size"]];


if (
  jQuery("div.size-selector-container a[data-talos='buttonSize']").length > 0 &&
  $sarg != "Select Size" &&
  $sarg != "No Size"
) {
  jQuery("div.size-selector-container a[data-talos='buttonSize']").each(function () {
    if (jQuery(e).text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});