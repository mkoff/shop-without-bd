'use strict';
$(() => {
  
  let check = 1;

  for (var key in products) {
    $('.list-name').append('<li><input type="checkbox" name="' + key + '"> ' + key + '</li>');
    $('.products').append('<li><img src="' + products[key].image + '" alt="' + key + '"><h3>' + key + '</h3><p>' + products[key].description + '</p><p class="product-cost">$' + products[key].cost + ' USD</p></li>');
  }
  
  $('input[type="checkbox"]').click(function() {
    if(check){
      $('.products').empty();
      check--;
    }
    for (var key in products) {
      let keyName = $(this).attr('name');
      if(key === keyName){
        if($(this).is(':checked')){
          $('.products').append('<li class="'+ products[keyName].vendorCode +'"><img src="' + products[keyName].image + '" alt="' + keyName + '"><h3>' + keyName + '</h3><p>' + products[keyName].description + '</p><p class="product-cost">$' + products[keyName].cost + ' USD</p></li>');
        }else{
          $('.'+ products[keyName].vendorCode +'').remove();
        }
      }
    }

  });
  
});  