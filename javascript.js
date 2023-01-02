
$('.menu-grid-item.shop1').click(function(){
  // 商品牛排"
  $('.cashier-shop-itemsGP').prepend(
    $('<div/>')
    .addClass('cashier-shop-item')
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
  $('.menu-grid-item.shop2').click(function(){
    $('.cashier-shop-itemsGP').prepend(
      $('<div/>')
      .addClass('cashier-shop-item')
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
    // 商品拉麵
      $('.cashier-shop-itemsGP').prepend(
        $('<div/>')
        .addClass('cashier-shop-item')
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
      $('.cashier-shop-itemsGP').prepend(
        $('<div/>')
        .addClass('cashier-shop-item')
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

  $('.cashier-shop-itemsGP').on('click', '.remove-item', function(){
    // alert("12345");
    $(this).parents('.cashier-shop-item').remove();
  });
  