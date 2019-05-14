'use strict';
$(() => {

  for (let key in products) {
    $('.list-name').append('<li><input type="checkbox" name="' + key + '"> ' + key + '</li>');
  }

  for(let a = 0; a < tags.length; a++){
    $('.list-tags').append('<li><input type="checkbox" name="' + tags[a] + '"> ' + tags[a] + '</li>');
  }
  
  $('.list-name input[type="checkbox"]').click(function() {
    let keyName = $(this).attr('name');
    for (let key in products) {
      if(key === keyName){
        if($(this).is(':checked')){
          $('.products').append('<li class="vc'+ products[keyName].vendorCode +' '+products[keyName].tags+'"><img src="' + products[keyName].image + '" alt="' + keyName + '"><h3>' + keyName + '</h3><p>' + products[keyName].description + '</p><p class="product-cost">$' + products[keyName].cost + ' USD</p></li>');
        }else{
          $('.vc'+ products[keyName].vendorCode +'').remove();
        }
      }
    }
  });

  $('.list-tags input[type="checkbox"]').click(function() {
    let keyTag = $(this).attr('name');
    if($(this).is(':checked')){
      $('.'+ keyTag +'').removeClass('display-none');
    }else{
      $('.'+ keyTag +'').addClass('display-none');
    }
  });
      
  $('.mnu input[type="checkbox"]').trigger('click');

});  