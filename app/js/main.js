$(function() {

  $('.blog-item__slide').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="8px" height="16px" viewBox="0 0 8 16" version="1.1"><g><path d="M 6 14 C 5.742188 14 5.488281 13.902344 5.292969 13.707031 L 0.292969 8.707031 C -0.0976562 8.316406 -0.0976562 7.683594 0.292969 7.292969 L 5.292969 2.292969 C 5.683594 1.902344 6.316406 1.902344 6.707031 2.292969 C 7.097656 2.683594 7.097656 3.316406 6.707031 3.707031 L 2.414062 8 L 6.707031 12.292969 C 7.097656 12.683594 7.097656 13.316406 6.707031 13.707031 C 6.511719 13.902344 6.257812 14 6 14 Z M 6 14 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="8px" height="16px" viewBox="0 0 8 16" version="1.1"><g><path d="M 2 14 C 1.742188 14 1.488281 13.902344 1.292969 13.707031 C 0.902344 13.316406 0.902344 12.683594 1.292969 12.292969 L 5.585938 8 L 1.292969 3.707031 C 0.902344 3.316406 0.902344 2.683594 1.292969 2.292969 C 1.683594 1.902344 2.316406 1.902344 2.707031 2.292969 L 7.707031 7.292969 C 8.097656 7.683594 8.097656 8.316406 7.707031 8.707031 L 2.707031 13.707031 C 2.511719 13.902344 2.257812 14 2 14 Z M 2 14 "/></g></svg></button>'
  });

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
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="17px" height="15px" viewBox="0 0 16 15" version="1.1"><g><path d="M 10.589844 4.402344 L 14.582031 5.023438 C 14.910156 5.074219 15.1875 5.320312 15.292969 5.65625 C 15.398438 5.996094 15.3125 6.367188 15.074219 6.617188 L 12.179688 9.613281 L 12.863281 13.90625 C 12.917969 14.257812 12.785156 14.617188 12.503906 14.824219 C 12.230469 15.03125 11.867188 15.058594 11.570312 14.890625 L 8.003906 12.882812 L 4.4375 14.890625 C 4.140625 15.058594 3.773438 15.03125 3.5 14.824219 C 3.226562 14.617188 3.085938 14.257812 3.144531 13.90625 L 3.828125 9.613281 L 0.933594 6.617188 C 0.695312 6.367188 0.609375 5.996094 0.714844 5.65625 C 0.816406 5.320312 1.09375 5.074219 1.429688 5.023438 L 5.417969 4.402344 L 7.207031 0.527344 C 7.351562 0.203125 7.664062 0 8.003906 0 C 8.34375 0 8.65625 0.203125 8.804688 0.527344 Z M 10.589844 4.402344 "/></g></svg>'
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

  