if (jQuery('.detail-view__text:contains(Colors)').length > 0){
	if(jQuery('.detail-view__text:contains(Colors)').next().find('.detail-view__bullet--active').length > 0){
		[jQuery('.detail-view__text:contains(Colors)').next().find('.detail-view__bullet--active').next().text().trim(),
    jQuery.makeArray(jQuery('.detail-view__text:contains(Colors)').next().find('.detail-view__bullet').next().map(function(i,e){return jQuery(e).text().trim();}))]
    }else{
        ["Select Color",
        jQuery.makeArray(jQuery('.detail-view__text:contains(Colors)').next().find('.detail-view__bullet').map(function(i,e){return jQuery(e).text().trim();}))]
    }}
    else{
    ['No Color',['No Color']]
    }

    if ((jQuery('.detail-view__text:contains(Colors)').length > 0) && ($sarg != "Select Color") && ($sarg != "No Color")){
      jQuery('.detail-view__text:contains(Colors)').next().find('.detail-view__bullet').next().each(function(){
         if (jQuery(this).text().trim() == $sarg){
             jQuery(this).trigger('click')
         }
      });
    }
    wait_for(function(){return true;})

    jQuery('#shopping-cart input:first')
    input[id="checkout:btnUpdate"]

    if (jQuery('fieldset.single-option-radio').length > 0){
      if(jQuery('fieldset.single-option-radio label').length > 0){
        [jQuery('fieldset.single-option-radio input[checked="checked"]').next().text().trim(),
        jQuery.makeArray(jQuery('fieldset.single-option-radio label').map(function(i,e){return jQuery(e).text().trim();}))]
        }else{
            ["Select item",
            jQuery.makeArray(jQuery('fieldset.single-option-radio label').map(function(i,e){return jQuery(e).text().trim();}))]
        }}
        else{
        ['No item',['No item']]
        }

  
        if ((jQuery('fieldset.single-option-radio label').length > 0) && ($sarg != "Select item") && ($sarg != "No item")){
          jQuery('fieldset.single-option-radio label').each(function(){
             if (jQuery(this).text().trim() == $sarg){
                 jQuery(this).click()
             }
          });
        }
        wait_for(function(){return true;})



      if (jQuery('.ProductForm__Option--labelled:contains(Width)').length > 0) {
        [
          jQuery('.ProductForm__Option--labelled:contains(Width) input:checked').parent().text().trim()
            ? jQuery('.ProductForm__Option--labelled:contains(Width) input:checked').parent().text().trim()          
                
            : "Select Width",
          jQuery.makeArray(
            jQuery('.ProductForm__Option--labelled:contains(Width)').find('li').map(function (i, e) {
              if (jQuery(e).text().trim() != "")
                return jQuery(e).text().trim().replace(/\s\s+/g, "");
            })
          ),
        ];
      } else {
        ["No Width", ["No Width"]];      }
    
      
    
      if (
         jQuery('.ProductForm__Option--labelled:contains(Width) li').length > 0 &&
        $sarg != "Select Width" &&
        $sarg != "No Width"
      ) {
        jQuery('.ProductForm__Option--labelled:contains(Width) li').each(function () {
          if (jQuery(this).find('input').attr('value') == $sarg) jQuery(this).find('label').trigger('click');
        });
      }
    
      wait_for(function(){return true;})




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

        if ((jQuery('fieldset.single-option-radio label').length > 0) && ($sarg != "Select item") && ($sarg != "No item")){
          jQuery('fieldset.single-option-radio label').each(function(){
             if (jQuery(this).text().trim() == $sarg){
                 jQuery(this)[0].click()
             }
          });
        }
        wait_for(function(){return true;})