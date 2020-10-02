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

jQuery("#shopping-cart input:first")
input[(id = "checkout:btnUpdate")]

if (jQuery("fieldset.single-option-radio").length > 0) {
  if (jQuery("fieldset.single-option-radio label").length > 0) {
    ;[
      jQuery('fieldset.single-option-radio input[checked="checked"]')
        .next()
        .text()
        .trim(),
      jQuery.makeArray(
        jQuery("fieldset.single-option-radio label").map(function (i, e) {
          return jQuery(e).text().trim()
        })
      ),
    ]
  } else {
    ;[
      "Select item",
      jQuery.makeArray(
        jQuery("fieldset.single-option-radio label").map(function (i, e) {
          return jQuery(e).text().trim()
        })
      ),
    ]
  }
} else {
  ;["No item", ["No item"]]
}

if (
  jQuery("fieldset.single-option-radio label").length > 0 &&
  $sarg != "Select item" &&
  $sarg != "No item"
) {
  jQuery("fieldset.single-option-radio label").each(function () {
    if (jQuery(this).text().trim() == $sarg) {
      jQuery(this).click()
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
    jQuery(".swatchable-attribute:contains(Color) img.selected").attr("data-attr-display-value") !=
    (undefined && "")
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

if (jQuery(".swatchable-attribute:contains(Color) img").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color") {
  jQuery(".swatchable-attribute:contains(Color) img").each(function () {
    if (jQuery(this).attr("data-attr-display-value").replace(/\s\s+/g, "") == $sarg) {
      jQuery(this).click()
    }
  })
}
wait_for(function () {
  return true
})


// for li a

if (jQuery("ul.swatch-view-image li").length > 0) {
  [
    jQuery(
      "ul.swatch-view-image li .swatch-selected"
    ).length > 0
      ?jQuery(
          "ul.swatch-view-image li .swatch-selected"
        )
        .attr('orig-value')
      : "Select Color",
    jQuery.makeArray(
      jQuery("ul.swatch-view-image li").map(function (
        i,
        e
      ) {
        if (jQuery(e).attr('orig-value'))
         return jQuery(e).attr('orig-value');
      })
    ),
  ];
} else ["No Color", ["No Color"]];


if (
  jQuery("ul.swatch-view-image li").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("ul.swatch-view-image li").each(function () {
    if (jQuery(e).attr('orig-value')) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});


// for label input

if (jQuery(".variant-wrapper--button:contains(Color) input").length > 0) {
  ;[
    jQuery(".variant-wrapper--button:contains(Color) input:checked").length > 0
      ? jQuery(".variant-wrapper--button:contains(Color) input:checked")
      .attr("value")
      .replace(/\s\s+/g, "")
  : "Select item",
jQuery.makeArray(
  jQuery(".variant-wrapper--button:contains(Color) input").map(function (i, e) {
    if (jQuery(e).attr("value") != "")
      return jQuery(e).attr("value").replace(/\s\s+/g, "")
  })
),
]
} else {
;["No Color", ["No Color"]]
}

if (jQuery(".variant-wrapper--button:contains(Color) input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
jQuery(".variant-wrapper--button:contains(Color) input").each(function () {
if (jQuery(this).attr("value").replace(/\s\s+/g, "") == $sarg) {
  jQuery(this).next()[0].click()
}
})
}
wait_for(function () {
return true
})

// Select
if (jQuery(".selector-wrapper:contains(Color) select").length > 0) {
  [
    jQuery(".selector-wrapper:contains(Color) select option:selected").text() != ""
      ? jQuery(".selector-wrapper:contains(Color) select option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery(".selector-wrapper:contains(Color) select option").map(function (i, e) {
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
jQuery(".selector-wrapper:contains(Color) select option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery(".selector-wrapper:contains(Color) select option").each(function () {
  if (jQuery(this).text().trim().replace(/\s\s+/g, "") == $sarg) {
    jQuery(this)
      .text(jQuery(this).text())
      .trigger("change");
  }
});
}
wait_for(function () {
return true;
});