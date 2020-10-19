if (jQuery(".detail-view__text:contains(Colors)").length > 0) {
  if (
    jQuery(".detail-view__text:contains(Colors)")
      .next()
      .find(".detail-view__bullet--active").length > 0
  ) {
    ;[
      jQuery(".detail-view__text:contains(Colors)")
        .next()
        .find(".detail-view__bullet--active")
        .next()
        .text()
        .trim(),
      jQuery.makeArray(
        jQuery(".detail-view__text:contains(Colors)")
          .next()
          .find(".detail-view__bullet")
          .next()
          .map(function (i, e) {
            return jQuery(e).text().trim()
          })
      ),
    ]
  } else {
    ;[
      "Select Color",
      jQuery.makeArray(
        jQuery(".detail-view__text:contains(Colors)")
          .next()
          .find(".detail-view__bullet")
          .map(function (i, e) {
            return jQuery(e).text().trim()
          })
      ),
    ]
  }
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery(".detail-view__text:contains(Colors)").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".detail-view__text:contains(Colors)")
    .next()
    .find(".detail-view__bullet")
    .next()
    .each(function () {
      if (jQuery(this).text().trim() == $sarg) {
        jQuery(this).trigger("click")
      }
    })
}
wait_for(function () {
  return true
})

if (jQuery(".ProductForm__Option--labelled:contains(Width)").length > 0) {
  ;[
    jQuery(".ProductForm__Option--labelled:contains(Width) input:checked")
      .parent()
      .text()
      .trim()
      ? jQuery(".ProductForm__Option--labelled:contains(Width) input:checked")
          .parent()
          .text()
          .trim()
      : "Select Width",
    jQuery.makeArray(
      jQuery(".ProductForm__Option--labelled:contains(Width)")
        .find("li")
        .map(function (i, e) {
          if (jQuery(e).text().trim() != "")
            return jQuery(e).text().trim().replace(/\s\s+/g, "")
        })
    ),
  ]
} else {
  ;["No Width", ["No Width"]]
}

if (
  jQuery(".ProductForm__Option--labelled:contains(Width) li").length > 0 &&
  $sarg != "Select Width" &&
  $sarg != "No Width"
) {
  jQuery(".ProductForm__Option--labelled:contains(Width) li").each(function () {
    if (jQuery(this).find("input").attr("value") == $sarg)
      jQuery(this).find("label").trigger("click")
  })
}

wait_for(function () {
  return true
})

if (jQuery(".swatch:contains(Color)").length > 0) {
  ;[
    jQuery(".swatch:contains(Color) input:checked").attr("value") !=
    (undefined && "")
      ? jQuery(".swatch:contains(Color) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".swatch:contains(Color) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (jQuery(".swatch:contains(Color) input").length > 0 && $sarg != "No Color") {
  jQuery(".swatch:contains(Color) input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

if (jQuery("ul.swatch li.swatch__item--selectable-colorpattern ").length > 0) {
  ;[
    jQuery("ul.swatch li.swatch__item--selected-colorpattern a").length > 0
      ? JSON.parse(
          jQuery("ul.swatch li.swatch__item--selected-colorpattern a").attr(
            "data-layer-click"
          )
        ).interaction.value
      : "Select Color",
    jQuery.makeArray(
      jQuery("ul.swatch li a.swatch__item-inner-image").map(function (i, e) {
        if (JSON.parse(jQuery(e).attr("data-layer-click")).interaction.value)
          return JSON.parse(jQuery(e).attr("data-layer-click")).interaction
            .value
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery("ul.swatch li a.swatch__item-inner-image").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("ul.swatch li a.swatch__item-inner-image").each(function () {
    if (
      JSON.parse(jQuery(e).attr("data-layer-click")).interaction.value == $sarg
    )
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

// for label a

if (jQuery(".swatch_box:contains(Colour)").length > 0) {
  ;[
    jQuery(".swatch_box:contains(Colour) a.is-active").length > 0
      ? jQuery(".swatch_box:contains(Colour) a.is-active")
          .attr("href")
          .split("-")[
          jQuery(".swatch_box:contains(Colour) a.is-active")
            .attr("href")
            .split("-").length - 1
        ]
      : "Select Color",
    jQuery.makeArray(
      jQuery(".swatch_box:contains(Colour) a").map(function (i, e) {
        if (
          jQuery(e).attr("href").split("-")[
            jQuery(e).attr("href").split("-").length - 1
          ]
        )
          return jQuery(e).attr("href").split("-")[
            jQuery(e).attr("href").split("-").length - 1
          ]
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery(".swatch_box:contains(Colour) a").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".swatch_box:contains(Colour) a").each(function () {
    if (
      jQuery(e).attr("href").split("-")[
        jQuery(e).attr("href").split("-").length - 1
      ] == $sarg
    )
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

if (jQuery(".swatchable-attribute:contains(Color)").length > 0) {
  ;[
    jQuery(".swatchable-attribute:contains(Color) img.selected").attr(
      "data-attr-display-value"
    ) != (undefined && "")
      ? jQuery(".swatchable-attribute:contains(Color) img.selected")
          .attr("data-attr-display-value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".swatchable-attribute:contains(Color) img").map(function (i, e) {
        if (jQuery(e).attr("data-attr-display-value") != "")
          return jQuery(e).attr("data-attr-display-value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery(".swatchable-attribute:contains(Color) img").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".swatchable-attribute:contains(Color) img").each(function () {
    if (
      jQuery(this).attr("data-attr-display-value").replace(/\s\s+/g, "") ==
      $sarg
    ) {
      jQuery(this).click()
    }
  })
}
wait_for(function () {
  return true
})

// for li a

if (jQuery(".product-swatch:contains(Colour:) li").length > 0) {
  ;[
    jQuery(".product-swatch:contains(Colour:) li.current").length > 0
      ? jQuery(".product-swatch:contains(Colour:) li.current")
      .text().trim()
      : "Select Color",
    jQuery.makeArray(
      jQuery(".product-swatch:contains(Colour:) li").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim() != "") return jQuery(e).text().trim()
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery(".product-swatch:contains(Colour:) li").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".product-swatch:contains(Colour:) li").each(function () {
    if (jQuery(e).text().trim() == $sarg) jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery(".product-swatch:contains(Colour:) li").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery(".product-swatch:contains(Colour:) li").each(function (
    index
  ) {
    if (jQuery(this).text().trim() == $sarg && !jQuery(this).attr("class") === 'product-not-available') {
      $text = false
    }
  })
}
return $text

// for label input

if (jQuery(".swatch:contains(Color) input").length > 0) {
  ;[
    jQuery(".swatch:contains(Color) input:checked").length > 0
      ? jQuery(".swatch:contains(Color) input:checked")
          .attr("value")
          .replace(/\s\s+/g, "")
      : "Select item",
    jQuery.makeArray(
      jQuery(".swatch:contains(Color) input").map(function (i, e) {
        if (jQuery(e).attr("value") != "")
          return jQuery(e).attr("value").replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

if (
  jQuery(".swatch:contains(Color) input").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".swatch:contains(Color) input").each(function () {
    if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).next()[0].click()
    }
  })
}
wait_for(function () {
  return true
})

// Select
if (jQuery("select[data-beaver-id='selectCouleur'] option").length > 0) {
  ;[
    jQuery("select[data-beaver-id='selectCouleur'] option:selected").text() != ""
      ? jQuery("select[data-beaver-id='selectCouleur'] option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("select[data-beaver-id='selectCouleur'] option").map(function (
        i,
        e
      ) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else {
  ;["No Color", ["No Color"]]
}

//pa_Colors clicker
if (
  jQuery("select[data-beaver-id='selectCouleur'] option").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("select[data-beaver-id='selectCouleur'] option").each(function () {
    if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).text(jQuery(this).text()).trigger("change")
    }
  })
}
wait_for(function () {
  return true
})


$val = false
if (
  jQuery("select[data-beaver-id='selectCouleur'] option")
    .length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $val = true
  jQuery(
    "select[data-beaver-id='selectCouleur'] option"
  ).each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") ==  $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $val = false
    }
  })
}
return $val




// for li a

if (
  jQuery(".page-content--product:first .product-single__meta div.master-swatch")
    .length > 0
) {
  ;[
    jQuery(
      ".page-content--product:first .product-single__meta div.master-swatch.active"
    ).length > 0
      ? jQuery(
          ".page-content--product:first .product-single__meta div.master-swatch.active img"
        )
          .attr("data-id")
          .split("-")[5] +
        " " +
        jQuery(
          ".page-content--product:first .product-single__meta div.master-swatch.active img"
        )
          .attr("data-id")
          .split("-")[7]
      : "Select Color",
    jQuery.makeArray(
      jQuery(
        ".page-content--product:first .product-single__meta div.master-swatch img"
      ).map(function (i, e) {
        if (jQuery(e).attr("data-id").split("-")[5])
          return (
            jQuery(e).attr("data-id").split("-")[5] +
            " " +
            jQuery(e).attr("data-id").split("-")[7]
          )
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery(".page-content--product:first .product-single__meta div.master-swatch")
    .length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(
    ".page-content--product:first .product-single__meta div.master-swatch"
  ).each(function () {
    if (
      JSON.parse(jQuery(e).attr("data-id")).split("-")[5] +
        " " +
        jQuery(e).attr("data-id").split("-")[7] ==
      $sarg
    )
      jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$val = false
if (
  jQuery(".page-content--product:first .product-single__meta div.master-swatch")
    .length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $val = true
  jQuery(
    ".page-content--product:first .product-single__meta div.master-swatch"
  ).each(function (index) {
    if (
      jQuery(this).attr("data-id").split("-")[5] +
        " " +
        jQuery(e).attr("data-id").split("-")[7] ==
        $sarg &&
      !jQuery(this).attr("disabled")
    ) {
      $val = false
    }
  })
}
return $val

product - single__meta.product - single__meta.master - swatch

// for div a

// if (
//   jQuery(".template-product .form__options--color a")
//     .length > 0
// ) {
//   ;[
//     jQuery(
//       ".form__options--color a.active"
//     ).length > 0
//       ? jQuery(
//           ".form__options--color"
//         ).find('div:first')
//           .text().trim().replace(/\s\s+/g, "")
//       : "Select Color",
//     jQuery.makeArray(
//       jQuery(
//         ".form__options--color"
//       ).find('a:first').slice(4,2).map(function (i, e) {
//         if (jQuery(e).innerText)
//           return jQuery(e).innerText
//       })
//     ),
//   ]
// } else ["No Color", ["No Color"]]



// Select
if (jQuery(".selector-wrapper:contains(Color) option").length > 0) {
  [
    jQuery(".selector-wrapper:contains(Color) option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Color) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Color) option").map(function (i, e) {
        if (jQuery(e).text() != "")
          return jQuery(e).text().trim().replace(/\s\s+/g, "");
      })
    ),
  ];
} else {
  ["No Color", ["No Color"]];
}

//pa_Colors clicker
if (
jQuery(".selector-wrapper:contains(Color) option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery(".selector-wrapper:contains(Color) option").each(function () {
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
  jQuery(".selector-wrapper:contains(Color) option").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery(".selector-wrapper:contains(Color) option").each(function (index) {
    if (
      jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;



// div divi

if (jQuery("form.variant:target .form__selections .form__options--color a").length > 0) {
  [
    jQuery(
      "form.variant:target .form__selections .form__options--color a.active"
    ).length > 0
      ?jQuery(
        "form.variant:target .form__selections .form__options--color a.active"
        ).css('background-color')
        // .text().trim().replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("form.variant:target .form__selections .form__options--color a").map(function (
        i,
        e
      ) {
        if (jQuery(e).text() !== '')
         return jQuery(e).css('background-color')
        //  .text().trim().replace(/\s\s+/g, "")
      })
    ),
  ];
} else ["No Color", ["No Color"]];

jQuery('[data-switchable-wrapper-dim-2]:not(.h-tp-hidden) .c-tp-productdimensions')


if (
  jQuery("form.variant:target .form__selections .form__options--color a").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("form.variant:target .form__selections .form__options--color a").each(function () {
    if (jQuery(this).css('background-color') == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

//pa_Colors stock status
$text = false;
if (
  jQuery("form.variant:target .form__selections .form__options--color a").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery("form.variant:target .form__selections .form__options--color a").each(function (index) {
    if (
      jQuery(this).css('background-color') == $sarg &&
      !jQuery(this).attr('.unavailable')
    ) {
      $text = false;
    }
  });
}
return $text;



// for ul li span

if (jQuery("ul#select2-wn2o-results li").length > 0) {
  ;[
    jQuery("ul#select2-wn2o-results li.select2-results__option--highlighted").length > 0
      ? jQuery("ul#select2-wn2o-results li.select2-results__option--highlighted")      
          .find('span.text-color')
          .text().trim().replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("ul#select2-wn2o-results li").map(function (
        i,
        e
      ) {
        if (jQuery(e).find('span.text-color')
        .text().trim().replace(/\s\s+/g, "") != "") return jQuery(e).find('span.text-color')
        .text().trim().replace(/\s\s+/g, "")
      })
    ),
  ]
} else ["No Color", ["No Color"]]

if (
  jQuery("ul#select2-wn2o-results li").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("ul#select2-wn2o-results li").each(function () {
    if (jQuery(e).find('span.text-color')
    .text().trim().replace(/\s\s+/g, "") == $sarg) jQuery(this).click()
  })
}
wait_for(function () {
  return true
})

$text = false
if (
  jQuery("#configurable_swatch_color li a").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true
  jQuery("#configurable_swatch_color li a").each(function (
    index
  ) {
    if (jQuery(this).find('span.text-color')
    .text().trim().replace(/\s\s+/g, "") == $sarg && !jQuery(this).attr("aria-disabled")) {
      $text = false
    }
  })
}
return $text