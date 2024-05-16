$(document).ready(function () {

  // dark/light-mode 
  function getTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  const colorScheme = document.querySelector('meta[name="color-scheme"]');

  function applyTheme(theme) {
    document.body.className = theme;
    colorScheme.content = theme;
  }

  function rotateTheme(theme) {
    if (theme === 'light') {
      return 'dark'
    }
    return 'light';
  }

  const themeToggler = document.getElementById('theme-toggle');
  const themeTogglerRes = document.getElementById('theme-toggle-res');

  setTimeout(() => {
    let theme = getTheme();
    applyTheme(theme);

    themeTogglerRes.onclick = () => {
        const newTheme = rotateTheme(theme);
        applyTheme(newTheme);

        saveTheme(newTheme);

        theme = newTheme;
      },
      themeToggler.onclick = () => {
        const newTheme = rotateTheme(theme);
        applyTheme(newTheme);

        saveTheme(newTheme);

        theme = newTheme;
      }
  }, 1000);


  setTimeout(() => {
    let theme = getTheme();
    applyTheme(theme);

    themeTogglerRes.onclick = () => {
      const newTheme = rotateTheme(theme);
      applyTheme(newTheme);

      saveTheme(newTheme);

      theme = newTheme;
    }

  }, 1000);

  // /dark/light-mode 

  $(".btn-toggle").click(function () {
    if ($('.light-div').css('display') == 'block') {
      $('.light-div').css('display', 'none')
      $('.moon-div').css('display', 'block')
    } else {
      $('.light-div').css('display', 'block')
      $('.moon-div').css('display', 'none')

    }
  });

  //search-of-table-price

  $("#input-table").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#Tableprice tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // /search-of-table-price

  $(".acc-btn-1").click(function () {
    $("parrow-acc-webmoney").toggleClass("arrow-acc-webmoney-2");
  });


});

$(document).ready(function () {
  // header-slider 
  $('.home-slider').slick({
    rtl: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      }

    ]

  });

  // /header-slider 
  // header-cool-mouse  


  $('#cool-mouse').on('click', (e) => {
    window.scrollTo({
      top: 1500,

      behavior: 'smooth'
    });
  })
  // /header-cool-mouse  
  // user-comment-slider
  $('.user-comment-slider').slick({
    rtl: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          infinite: true,
        },

        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      }

    ]
  });
});


// gift-card 




$(document).ready(function () {
  // blog-slider 
  $('.big-div-blog-cards').slick({
    rtl: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          infinite: true,
        },

        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      }

    ]
    // /blog-slider
  });

  $('.gift-choose-cards').slick({
    rtl: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          infinite: true,
        },

      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        }
      }

    ]
    // /blog-slider
  });
});


$(document).ready(function () {

  $('.sandwich-menu').click(function () {
    // $('.navbar-mobile').fadeOut();
    $('.res-menu-phone').slideDown();

  });

  $('.close-res-menu').click(function () {
    // $('.navbar-mobile').fadeOut();
    $('.res-menu-phone').slideUp();

  });


  //back-to-top
  $(".back-to-top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    });
    return false;
  });
  // /back-to-top

  //read-more-about-crypto
  $('.btn-read-more').click(function () {

    $('.pars-d-none').slideDown();
    $('.big-div-read-more-about-crypto').css({
      'height': 'auto'
    })
    $(this).slideUp();
    $('.first-p-read-more').css({
      'opacity': '1'
    })
    $('.second-p-read-more').css({
      'opacity': '1'
    })
    $('.third-p-read-more').css({
      'opacity': '1'
    })
    $('.btn-read-more-2').css({
      'display': 'flex'
    });
  });

  $('.btn-read-more-2').click(function () {

    $('.pars-d-none').slideUp();
    $('.big-div-read-more-about-crypto').css({
      'height': 'auto'
    })
    $(this).slideUp();
    $('.first-p-read-more').css({
      'opacity': '.8'
    })
    $('.second-p-read-more').css({
      'opacity': '.5'
    })
    $('.third-p-read-more').css({
      'opacity': '.3'
    })
    $('.btn-read-more').css({
      'display': 'flex'
    });
  });
  // /read-more-about-crypto

});

$(document).ready(function () {
  // digi-currency 
  // start-of-converter

  function custom_template(obj, params) {
    var data = $(obj.element).data();
    var text = $(obj.element).text();
    if (data && data['img_src']) {
      img_src = data['img_src'];
      template = $("<div style=\"display:inline-block;margin-left:8px;width:30px;text-align:right;\"><img src=\"" + img_src + "\" style=\"width:100%;\"/></div><p style=\"display:inline-block;color:white;font-size: 14px;font-weight: 600;text-align:center;margin-bottom:0;\">" + text + "</p>");
      return template;
    }

  }
  var options = {
    'templateSelection': custom_template,
    'templateResult': custom_template,
  }
  $('.currency-list').select2(options);


  //start-of-table
  $(".alaghe-mandi-section").click(function () {
    if ($('.table-container').css('display') == 'block') {
      $('.table-container').css('display', 'none')
      $('.table-container-2').css('display', 'block')
    } else {
      $('.table-container').css('display', 'block')
      $('.table-container-2').css('display', 'none')

    }
  });

  $(".star-in-table-for-select-btc").click(function () {

    if ($('.btc-in-table-2').css('display') == 'none') {
      $('.btc-in-table-2').css('display', 'table-row')
    } else {
      $('.btc-in-table-2').css('display', 'none')

    }

  });

  $('.star-in-table-for-select-btc').click(function () {
    $(this).toggleClass("color-yellow-star");

  })


  $(".star-in-table-for-select-avax").click(function () {

    if ($('.avax-in-table-2').css('display') == 'none') {
      $('.avax-in-table-2').css('display', 'table-row')
    } else {
      $('.avax-in-table-2').css('display', 'none')

    }
  });


  $('.star-in-table-for-select-avax').click(function () {
    $(this).toggleClass("color-yellow-star");

  })


  $(".star-in-table-for-select-usdc").click(function () {

    if ($('.usdc-in-table-2').css('display') == 'none') {
      $('.usdc-in-table-2').css('display', 'table-row')
    } else {
      $('.usdc-in-table-2').css('display', 'none')

    }
  });


  $('.star-in-table-for-select-usdc').click(function () {
    $(this).toggleClass("color-yellow-star");

  })


  $(".star-in-table-for-select-usdt").click(function () {

    if ($('.usdt-in-table-2').css('display') == 'none') {
      $('.usdt-in-table-2').css('display', 'table-row')
    } else {
      $('.usdt-in-table-2').css('display', 'none')

    }
  });


  $('.star-in-table-for-select-usdt').click(function () {
    $(this).toggleClass("color-yellow-star");

  })

  $(".star-in-table-for-select-eth").click(function () {

    if ($('.eth-in-table-2').css('display') == 'none') {
      $('.eth-in-table-2').css('display', 'table-row')
    } else {
      $('.eth-in-table-2').css('display', 'none')

    }
  });

  $('.star-in-table-for-select-eth').click(function () {
    $(this).toggleClass("color-yellow-star");

  })

  $('.alaghe-mandi-section').click(function () {
    $('.p-intersted-table').toggleClass('color-yellow-star');
  })

  // $(".xrp-in-table-1").click(function () {

  //   if ($('.xrp-in-table-2').css('display') == 'none') {
  //     $('.xrp-in-table-2').css('display', 'table-row')
  //   } else {
  //     $('.xrp-in-table-2').css('display', 'none')

  //   }




  $(".star-in-table-for-select-bnb").click(function () {

    if ($('.bnb-in-table-2').css('display') == 'none') {
      $('.bnb-in-table-2').css('display', 'table-row')
    } else {
      $('.bnb-in-table-2').css('display', 'none')

    }
  });


  $('.star-in-table-for-select-bnb').click(function () {
    $(this).toggleClass("color-yellow-star");

  })


  $(".star-in-table-for-select-luna").click(function () {

    if ($('.luna-in-table-2').css('display') == 'none') {
      $('.luna-in-table-2').css('display', 'table-row')
    } else {
      $('.luna-in-table-2').css('display', 'none')

    }
  });


  $('.star-in-table-for-select-luna').click(function () {
    $(this).toggleClass("color-yellow-star");

  })


  $(".star-in-table-for-select-sol").click(function () {

    if ($('.sol-in-table-2').css('display') == 'none') {
      $('.sol-in-table-2').css('display', 'table-row')
    } else {
      $('.sol-in-table-2').css('display', 'none')

    }
  });


  $('.star-in-table-for-select-sol').click(function () {
    $(this).toggleClass("color-yellow-star");

  })


  $(".star-in-table-for-select-ada").click(function () {
    if ($('.ada-in-table-2').css('display') == 'none') {
      $('.ada-in-table-2').css('display', 'table-row')
    } else {
      $('.ada-in-table-2').css('display', 'none')

    }
  });


  $('.star-in-table-for-select-ada').click(function () {
    $(this).toggleClass("color-yellow-star");

  })


  $(".star-in-table-for-select-xrp").click(function () {

    if ($('.xrp-in-table-2').css('display') == 'none') {
      $('.xrp-in-table-2').css('display', 'table-row')
    } else {
      $('.xrp-in-table-2').css('display', 'none')

    }
  });


  $('.star-in-table-for-select-xrp').click(function () {
    $(this).toggleClass("color-yellow-star");

  })


  // /end-of-table
  // end-of-converter
  // /digi-currency 

});

// converter--buy 

const currencyData = document.querySelector('#currency-select1');
var currencyValue = currencyData.options[currencyData.selectedIndex].value;
document.querySelector('.currency-name-converter').innerHTML = currencyValue;

var currencyText = currencyData.options[currencyData.selectedIndex].text;
// change-price 
var unitPrice = $('.unit-price');
unitPrice.attr('placeholder', 'مقدار(' + currencyText + ')');
// change-price 

// /converter--buy 

// converter--sell 

const currencyDataSell = document.querySelector('#currency-select2');
var currencyTextSell = currencyDataSell.options[currencyDataSell.selectedIndex].text;
document.querySelector('#all-amount').placeholder = 'مقدار(' + currencyTextSell + ')';

// /converter--sell 


// converter-buy-price 
var allPriceBuy = document.querySelector('#all-price').value;
var unitPriceBuyValue = document.querySelector('.unit-price-buy').innerHTML;
var unitPriceBuyValueFinal = parseFloat(unitPriceBuyValue.replace(/,/g, ''));
var amountValueBuy = document.querySelector('.unit-price');
var priceResultBuy = parseFloat(allPriceBuy) / parseFloat(unitPriceBuyValueFinal);
amountValueBuy.value = priceResultBuy;

function changePriceBuy() {
  var allPriceBuy = document.querySelector('#all-price').value;
  var unitPriceBuyValue = document.querySelector('.unit-price-buy').innerHTML;
  var unitPriceBuyValueFinal = parseFloat(unitPriceBuyValue.replace(/,/g, ''));
  var amountValueBuy = document.querySelector('.unit-price');
  var priceResultBuy = parseFloat(allPriceBuy) / parseFloat(unitPriceBuyValueFinal);
  amountValueBuy.value = priceResultBuy;

}
// converter-buy-price 


// converter-buy-amount
function changeAmountBuy() {
  var amountValueBuy = document.querySelector('.unit-price').value;
  var unitAmountBuyValue = document.querySelector('.unit-price-buy').innerHTML;
  var unitAmounteBuyValueFinal = parseFloat(unitAmountBuyValue.replace(/,/g, ''));
  var allPriceBuy = document.querySelector('#all-price');

  var amountResultBuy = parseFloat(amountValueBuy) * parseFloat(unitAmounteBuyValueFinal);
  allPriceBuy.value = amountResultBuy;
}

// converter-buy-amount

// converter-sell-price 

function changePriceSell() {
  var allAmountSell = document.querySelector('#all-amount').value;
  var unitPriceSellValue = document.querySelector('.unit-price-sell').innerHTML;
  var unitPriceSellValueFinal = parseFloat(unitPriceSellValue.replace(/,/g, ''));
  var allPriceSell = document.querySelector('.all-price-sell');

  var priceResultSell = parseFloat(allAmountSell) * (unitPriceSellValueFinal);
  allPriceSell.value = priceResultSell;

}
// converter-sell-price 



function changeAmountSell() {
  var allPriceSell = document.querySelector('.all-price-sell').value;
  var unitPriceSellValue = document.querySelector('.unit-price-sell').innerHTML;
  var unitPriceSellValueFinal = parseFloat(unitPriceSellValue.replace(/,/g, ''));
  var amountValueSell = document.querySelector('#all-amount');
  var amountResultSell = parseFloat(allPriceSell) / parseFloat(unitPriceSellValueFinal);
  amountValueSell.value = amountResultSell;
}
// converter-sell-aomount 



// erase-prices 
function erasePriceBuy() {
  var eraseBuy = document.getElementsByClassName(
    'erase-price-buy');
  for (let i = 0; i < eraseBuy.length; i++) {
    eraseBuy[i].value = ' ';

  }
}

function erasePriceSell() {
  var eraseSell = document.getElementsByClassName('erase-price-sell');
  for (let i = 0; i < eraseSell.length; i++) {
    eraseSell[i].value = ' ';

  }
}
// /erase-prices 


// /converter


//start-of-tab-login-page

$(document).ready(function () {
  var pTabItem = $(".prodNav .ptItem");
  $(pTabItem).click(function () {
    // Tab nav active functionality
    $(pTabItem).removeClass("active");
    $(this).addClass("active");

    // Tab container active functionality
    var tabid = $(this).attr("id");
    $(".prodMain").removeClass("active");
    $("#" + tabid + "C").addClass("active");

    return false;
  });
});


// /start-of-tab-login-page

// register-page 


// $(document).ready(function () {
//   const validateEmail = (email) => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
//   };

//   const validateEmailContent = () => {
//     const emailResult = $('#reg-email-result');
//     const email = $('#reg-mail').val();
//     emailResult.text('');

//     if (validateEmail(email)) {
//       emailResult.text(email + ' is valid :)');
//       emailResult.css('color', 'green');
//     } else {
//       emailResult.text(email + ' is not valid :(');
//       emailResult.css('color', 'red');
//     }
//     return false;
//   }

//   $('#reg-mail').on('input', validateEmailContent);


//   const validatePassword = (pass) => {
//     return pass.match(
//       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
//     );
//   };

//   const validatePassContent = () => {
//     const passResult = $('#reg-pass-em-result');
//     const pass = $('#reg-password-email').val();
//     passResult.text('');

//     if (validatePassword(pass)) {
//       passResult.text(pass + ' is valid :)');
//       passResult.css('color', 'green');
//     } else {
//       passResult.text(pass + ' is not valid :(');
//       passResult.css('color', 'red');
//     }
//     return false;
//   }

//   $('#reg-password-email').on('input', validatePassContent);



// })