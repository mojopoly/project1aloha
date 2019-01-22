
$(function() {
  $(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 'slow', function(){
          window.location.hash = hash;
        });
      } 
    });
  });  
    
  $('.mostLovedProds-below').flickity({
      cellAlign: 'left',
      wrapAround: true
    });

  $('#btnValidate').click(function(e) {
      var sEmail = $('#txtEmail').val();
      var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
      if (filter.test(sEmail)) {
        alert('Thanks for subscribing!');
      }
      else {
        alert('Invalid Email Address');
        e.preventDefault();
      }
  });
  $('#addToCart').on('click' , function(event){
    event.preventDefault()
    $('.cart-number').html(function(i, val) { return val*1+1 });
  });

  });


  //no need to setup width for mobile-first
  //commit at least 5 times
  //include slider as plugin in your Read more
  //use smooth scrolling function in css
  //field isnt empty and value is an email for alert boxx
  //stretch goals: use jQuery for sticky menu
  //make code more readable, add sections
  //go thru all generic reqs

    