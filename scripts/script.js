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
    let counter = 0;
    for (let key in products) {
      counter++;
      if(key === keyName){
        if($(this).is(':checked')){
          $('.products').append('<li class="vc'+ products[keyName].vendorCode +' '+products[keyName].tags+'"><img src="' + products[keyName].image + '" alt="' + keyName + '"><h3>' + keyName + '</h3><p class="product-description">' + products[keyName].description + '</p><p class="product-cost">$' + products[keyName].cost + ' USD</p></li>');
        }else{
          $('.vc'+ products[keyName].vendorCode +'').remove();
        }
      }
    }
    console.log('product = '+counter);
  });



  $('.list-tags input[type="checkbox"]').click(function() {
    let keyTag = $(this).attr('name');
    if($(this).is(':checked')){
      $('.products li').addClass('display-none');
      $('.'+ keyTag +'').removeClass('display-none');
    }else{
      $('.products li').removeClass('display-none');
    }
  });

  $('#removeAll').click(function(){
    $('.mnu input:checkbox:checked').each(function(){
        $(this).trigger('click');
    });
  });
 
  $('.list-name input[type="checkbox"]').trigger('click');

  $('.products li').click(function(){
    if($(this).hasClass('product-description-all')){
      $(this).find('p:first').addClass('product-description');
      $(this).removeClass('product-description-all');
    }else{
      $(this).addClass('product-description-all');
      $(this).find('.product-description').removeClass('product-description');
  }
  });

});  