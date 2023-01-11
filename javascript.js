
 var shop1_amount = 0;
 var shop2_amount = 0;
 var shop3_amount = 0;
 var shop4_amount = 0;

 $(document).ready(function(){

  if(shop_car_amount==0){
    console.log("我有等於0");
    $(".cashier-list").hide();
    $(".payment-switch_block").show();
  }
  $(".cashier-btn").addClass("btn_glad_mode");
  $(".cashier-btn p").html("NO SELL");
});
  // 刪除商品
  $('.cashier-shop-itemsGP').on('click', '.remove-item', function(){
    $('#overlay').fadeOut(100);
    $('.shop-item-panel').fadeOut(100);
    $(this).parents('.cashier-shop-item').remove();
  });
  $('.cashier-shop-itemsGP').on('click', '.shop1-list .remove-item', function(){
    shop1_amount = 0;
    console.log("D商品1"+ shop1_amount);
  });
  $('.cashier-shop-itemsGP').on('click', '.shop2-list .remove-item', function(){
    shop2_amount = 0;
    console.log("D商品2"+ shop2_amount);
  });
  $('.cashier-shop-itemsGP').on('click', '.shop3-list .remove-item', function(){
    shop3_amount = 0;
    console.log("D商品3"+ shop3_amount);
  });
  $('.cashier-shop-itemsGP').on('click', '.shop4-list .remove-item', function(){
    shop4_amount = 0;
    console.log("D商品4"+ shop4_amount);
  });

 // 商品界面开启
 $('body:not(.cashier-shop-item-gp-right').on('click', '.cashier-shop-item', function(){
  //開啟popup條件是沒有點到垃圾桶
  // the clicked element doesn't have the foo class 
$('#overlay').fadeIn(100);
$('.shop-item-panel').fadeIn(100);
});
//開啟購物車POPUP
$('.menu-header-allitem').click(function(){
  console.log(shop_car_amount);
  $('#overlay').fadeIn(100);
  $('.shop-car-GP').css("display", "flex").fadeIn(100);
});


  // 关闭视窗
$(document).mouseup(function(e)
  { 
  var pop = $('.shop-item-panel,.shop-car-GP,.add-shop-car');  
  if(!pop.is(e.target) && pop.has(e.target).length === 0) { 
    $('#overlay').fadeOut(100);
    $('.shop-item-panel,.shop-car-GP').fadeOut(100);
  }}
  );
  // $(document).mouseup(function(e)
  // { 
  // var  pop = $('.shop-car-GP');  
  // if(!pop.is(e.target) && pop.has(e.target).length === 0) { 
  //   $('#overlay').fadeOut(100);
  //   $('.shop-car-GP').fadeOut(100);
  // }}
  // );


// if(documen.getElementsByClassName("frm1").length);


$('.menu-grid-item.shop1').click(function(){
  // 商品牛排"
  // 更換POPUP名稱
  $('.shop-item-panel-title').html( $('.menu-grid-item.shop1 p').html());
  shop1_amount++;
  if(shop1_amount > 1) {
    return false;
  }
  console.log("商品1"+ shop1_amount);
 
  $('.cashier-shop-itemsGP').prepend(
    $('<div/>')
    .addClass('cashier-shop-item shop1-list')
    .append(
      $("<div/>")
      .addClass("cashier-shop-item-gp")
      .append(
        $('<div/>')
        .addClass('cashier-shop-item-gp-left')
        .append(
          $('<img/>')
          .addClass("cashier-shop-item-img")
          // 圖片位址
          .attr('src',"image/shop-item/stake.jpg")
          ,
          $('<div/>')
          .addClass("cashier-shop-item-fontGP")
          .append(
            $('<p/>')
            .addClass('body1')
             // 商品名稱
            .html('丁骨牛排')
            ,
            $('<p/>')
            .addClass('body2 color-dark5')
            // 庫存數量
            .html('庫存13')
          )
        )
        ,
        $('<div/>')
        .addClass('cashier-shop-item-gp-right')
        .append(
          $('<div/>')
          .addClass('cashier-shop-price-group')
          .append(
            $('<p/>')
            .addClass('discount-original-price')
             // 商品折扣價格
            .html('$480')
            ,
            $('<p/>')
            .addClass('body1')
            // 商品價格
            .html("$430")
          )
          ,
          $('<img/>')
          .addClass("remove-item")
          .attr('src','image/small_trashcan.svg')
        )
      )
    )
  );
  });
  $(".btn-full-screen").click(function(){
    screenfull.toggle();
  });

 
 

  $('.menu-grid-item.shop2').click(function(){
      // 更換POPUP名稱
  $('.shop-item-panel-title').html( $('.menu-grid-item.shop2 p').html());
    shop2_amount++;
    if(shop2_amount > 1) {
      return false;
    }
    console.log("商品2"+ shop2_amount);
 
   
    $('.cashier-shop-itemsGP').prepend(
      $('<div/>')
      .addClass('cashier-shop-item shop2-list')
      .append(
        $("<div/>")
        .addClass("cashier-shop-item-gp")
        .append(
          $('<div/>')
          .addClass('cashier-shop-item-gp-left')
          .append(
            $('<img/>')
            .addClass("cashier-shop-item-img")
            // 圖片位址
            .attr('src',"image/shop-item/salmon.jpg")
            ,
            $('<div/>')
            .addClass("cashier-shop-item-fontGP")
            .append(
              $('<p/>')
              .addClass('body1')
               // 商品名稱
              .html('主廚鮭魚')
              ,
              $('<p/>')
              .addClass('body2 color-dark5')
              // 庫存數量
              .html('庫存13')
            )
          )
          ,
          $('<div/>')
          .addClass('cashier-shop-item-gp-right')
          .append(
            $('<div/>')
            .addClass('cashier-shop-price-group')
            .append(
              $('<p/>')
              .addClass('discount-original-price')
               // 商品折扣價格
              .html('$480')
              ,
              $('<p/>')
              .addClass('body1')
              // 商品價格
              .html("$430")
            )
            ,
            $('<img/>')
            .addClass("remove-item")
            .attr('src','image/small_trashcan.svg')
            )
            )
          )
        );
  });
  $('.menu-grid-item.shop3').click(function(){
        // 更換POPUP名稱
  $('.shop-item-panel-title').html( $('.menu-grid-item.shop3 p').html());
    shop3_amount++;
    if(shop3_amount > 1) {
      return false;
    }
    console.log("商品3"+ shop3_amount);
 
   
    // 商品拉麵
      $('.cashier-shop-itemsGP').prepend(
        $('<div/>')
        .addClass('cashier-shop-item shop3-list')
        .append(
          $("<div/>")
          .addClass("cashier-shop-item-gp")
          .append(
            $('<div/>')
            .addClass('cashier-shop-item-gp-left')
            .append(
              $('<img/>')
              .addClass("cashier-shop-item-img")
              // 圖片位址
              .attr('src',"image/shop-item/ramen.jpg")
              ,
              $('<div/>')
              .addClass("cashier-shop-item-fontGP")
              .append(
                $('<p/>')
                .addClass('body1')
                 // 商品名稱
                .html('味噌拉麵')
                ,
                $('<p/>')
                .addClass('body2 color-dark5')
                // 庫存數量
                .html('庫存13')
              )
            )
            ,
            $('<div/>')
            .addClass('cashier-shop-item-gp-right')
            .append(
              $('<div/>')
              .addClass('cashier-shop-price-group')
              .append(
                $('<p/>')
                .addClass('discount-original-price')
                 // 商品折扣價格
                .html('$480')
                ,
                $('<p/>')
                .addClass('body1')
                // 商品價格
                .html("$430")
              )
              ,
              $('<img/>')
              .addClass("remove-item")
              .attr('src','image/small_trashcan.svg')
              )
              )
            )
          );
    });
    $('.menu-grid-item.shop4').click(function(){
          // 更換POPUP名稱
  $('.shop-item-panel-title').html( $('.menu-grid-item.shop4 p').html());
      shop4_amount++;
      if(shop4_amount > 1) {
        return false;
      }
      console.log("商品4"+ shop4_amount);
     
      $('.cashier-shop-itemsGP').prepend(
        $('<div/>')
        .addClass('cashier-shop-item shop4-list')
        .append(
          $("<div/>")
          .addClass("cashier-shop-item-gp")
          .append(
            $('<div/>')
            .addClass('cashier-shop-item-gp-left')
            .append(
              $('<img/>')
              .addClass("cashier-shop-item-img")
              // 圖片位址
              .attr('src',"image/shop-item/soup.jpg")
              ,
              $('<div/>')
              .addClass("cashier-shop-item-fontGP")
              .append(
                $('<p/>')
                .addClass('body1')
                 // 商品名稱
                .html('每日例湯')
                ,
                $('<p/>')
                .addClass('body2 color-dark5')
                // 庫存數量
                .html('庫存13')
              )
            )
            ,
            $('<div/>')
            .addClass('cashier-shop-item-gp-right')
            .append(
              $('<div/>')
              .addClass('cashier-shop-price-group')
              .append(
                $('<p/>')
                .addClass('discount-original-price')
                 // 商品折扣價格
                .html('$480')
                ,
                $('<p/>')
                .addClass('body1')
                // 商品價格
                .html("$430")
              )
              ,
              $('<img/>')
              .addClass("remove-item")
              .attr('src','image/small_trashcan.svg')
              )
              )
            )
          );
    });
    $(".shop-item-penel-credit-labelGP").click(function(){
      if($('#percentage').prop("checked")){
        console.log("現在是百分比");
      $(".shop-item-penel-credit-window > *").hide();
        $('.percentage-window').css('display', 'flex');
      }
      if($('#price').prop("checked")){
        console.log("現在是金額");
        $(".shop-item-penel-credit-window > *").hide();
          $('.price-window').css('display', 'flex');
      }
      if($('#customize').prop("checked")){
        console.log("現在是自訂");
        $(".shop-item-penel-credit-window > *").hide();
          $('.customize-window').css('display', 'flex');
      }
    })
    var shop_car_amount =0;
    // document.querySelectorAll('.Shop-car-label').length+1;
    // shop_car_amount =$('body').find($('.Shop-car-label')).length-1;
    // shop_car_amount =$('body .Shop-car-label').length+1;
    $(".add-shop-car").click(function(){

      shop_car_amount++;

      $(".cashier-btn").removeClass("btn_glad_mode");
      $(".cashier-btn p").html("結帳");

      if(shop_car_amount > 0){
        console.log("我有等於1");
        $(".cashier-list").show();
        $(".payment-switch_block").hide();
      }

      console.log(shop_car_amount);
      if(shop_car_amount==1){
        $('.shop-car-list-GP').prepend(
          )
            .append(
              $('<input>').prop({
                type: 'radio',
                id: 'shop-car'+shop_car_amount,
                name: 'shop-car-list-panel',
                  "checked":"checked"
              }),
              $('<label>').prop({
                for: 'shop-car'+shop_car_amount
              }).html('購物車'+shop_car_amount)
              .addClass('Shop-car-label subtitle1')
              .addClass('car'+shop_car_amount)
            )
      }
      else
      $('.shop-car-list-GP').prepend(
        )
          .append(
            $('<input>').prop({
              type: 'radio',
              id: 'shop-car'+shop_car_amount,
              name: 'shop-car-list-panel',
            }),
            $('<label>').prop({
              for: 'shop-car'+shop_car_amount
            }).html('購物車'+shop_car_amount)
            .addClass('Shop-car-label subtitle1')
            .addClass('car'+shop_car_amount)
          )
      
    });

  