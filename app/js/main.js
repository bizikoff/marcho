$(function() {

  $('.product-tabs__top-item').on('click', function (e) {
    
    e.preventDefault();

    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });


  $('.product-slide__thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
    asNavFor: '.product-slide__big'
  });

  $('.product-slide__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.product-slide__thumb'
  });


  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list')
  });
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list')
  });

  $('.button-list').on('click', function () {
    $('.pagination').addClass('pagination--list')
  });
  $('.button-grid').on('click', function () {
    $('.pagination').removeClass('pagination--list')
  });

  $('.button-list').on('click', function () {
    $('.shop-content__inner').addClass('shop-content__inner--list')
  });
  $('.button-grid').on('click', function () {
    $('.shop-content__inner').removeClass('shop-content__inner--list')
  });

  $('.select-style').styler({

  });
  
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    step: 5,
    onStart: function (data) {
      $('.filter-price__from').text(data.from),
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from),
      $('.filter-price__to').text(data.to)
    },
  });

  $(".star").rateYo({ 
    starWidth: "18px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  $(document).on('click', '.input-number__minus', function () {
    let total = $(this).next();
    if (total.val() > 1) {
      total.val(+total.val() - 1);
    }
  });
  $(document).on('click', '.input-number__plus', function () {
    let total = $(this).prev();
    total.val(+total.val() + 1);
  });
  document.querySelectorAll('.input-number__input').forEach(function (el) {
    el.addEventListener('input', function () {
      this.value = this.value.replace(/[^\d]/g, '');
    });
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);

});

  