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

if (jQuery("._2a2WU_:contains(Color) ul.fUBI-_ li").length > 0) {
  [
    jQuery(
      "._2a2WU_:contains(Color) ul.fUBI-_ li a._3c2Xi9"
    ).length > 0
      ?jQuery(
          "._2a2WU_:contains(Color) ul.fUBI-_ li a._3c2Xi9"
        )
        .parent()
        .find('div:last')
        .text()
        .trim()
      : "Select Color",
    jQuery.makeArray(
      jQuery("._2a2WU_:contains(Color) ul.fUBI-_ li ._3xOS0O").map(function (
        i,
        e
      ) {
        if (jQuery(e).text().trim() != "")
         return jQuery(e).text().trim();
      })
    ),
  ];
} else ["No Color", ["No Color"]];


if (
  jQuery("._2a2WU_:contains(Color) ul.fUBI-_ li ._3xOS0O").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery("._2a2WU_:contains(Color) ul.fUBI-_ li ._3xOS0O").each(function () {
    if (jQuery(e).text().trim() == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$text = false;
if (
  jQuery("._2a2WU_:contains(Color) ul.fUBI-_ li ._3xOS0O").length > 0 &&
  $sarg != "No Color" &&
  $sarg != "Select Color"
) {
  $text = true;
  jQuery("._2a2WU_:contains(Color) ul.fUBI-_ li ._3xOS0O").each(function (index) {
    if (
      jQuery(this).text().trim() == $sarg &&
      !jQuery(this).attr('disabled')
    ) {
      $text = false;
    }
  });
}
return $text;


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

if (jQuery(".swatch:contains(Color) input").length > 0  &&
$sarg != "Select Color" &&
$sarg != "No Color") {
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
if (jQuery("select.form-control:contains(Colour)").length > 0) {
  [
    jQuery("select.form-control:contains(Colour) option:selected").text() != ""
      ? jQuery("select.form-control:contains(Colour) option:selected")
          .text()
          .trim()
          .replace(/\s\s+/g, "")
      : "Select Color",
    jQuery.makeArray(
      jQuery("select.form-control:contains(Colour) option").map(function (i, e) {
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
jQuery("select.form-control:contains(Colour) option").length > 0 &&
$sarg != "Select Color" &&
$sarg != "No Color"
) {
jQuery("select.form-control:contains(Colour) option").each(function () {
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


// for li a

if (jQuery(".page-content--product:first .product-single__meta div.master-swatch").length > 0) {
  [
    jQuery(
      ".page-content--product:first .product-single__meta div.master-swatch.active"
    ).length > 0
      ? jQuery(
          ".page-content--product:first .product-single__meta div.master-swatch.active img"
        )
        .attr('data-id').split('-')[5] + ' ' +
        jQuery(
          ".page-content--product:first .product-single__meta div.master-swatch.active img"
        )
        .attr('data-id').split('-')[7]
      : "Select Color",
    jQuery.makeArray(
      jQuery(".page-content--product:first .product-single__meta div.master-swatch img").map(function (
        i,
        e
      ) {
        if (jQuery(e).attr('data-id').split('-')[5])
         return jQuery(e).attr('data-id').split('-')[5] + ' ' + jQuery(e).attr('data-id').split('-')[7];
      })
    ),
  ];
} else ["No Color", ["No Color"]];


if (
  jQuery(".page-content--product:first .product-single__meta div.master-swatch").length > 0 &&
  $sarg != "Select Color" &&
  $sarg != "No Color"
) {
  jQuery(".page-content--product:first .product-single__meta div.master-swatch").each(function () {
    if ((JSON.parse(jQuery(e).attr('data-id')).split('-')[5] + ' ' + jQuery(e).attr('data-id').split('-')[7]) == $sarg) jQuery(this).click();
  });
}
wait_for(function () {
  return true;
});

$val = false;
if ((jQuery('.page-content--product:first .product-single__meta div.master-swatch').length > 0) && ($sarg != "No Color") && ($sarg != "Select Color")){
 $val = true;
  jQuery('.page-content--product:first .product-single__meta div.master-swatch').each(function(index){
     if ((jQuery(this).attr('data-id').split('-')[5] + ' ' + jQuery(e).attr('data-id').split('-')[7]) == $sarg && !jQuery(this).attr('disabled')){
       $val = false;
     }
  });
} return $val

product-single__meta
.product-single__meta .master-swatch

