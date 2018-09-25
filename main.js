$(document).ready(function() {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        900,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function() {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });



  //Functionality for the read  button doctor
  $("#toggle1").click(function () {
    var elem1 = $("#toggle1").text();
    if (elem1 == "Citește mai mult") {
      //Stuff to do when btn is in the read more state
      $("#toggle1").text("Citește mai puțin");
      $("#text1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle1").text("Citește mai mult");
      $("#text1").slideUp();
    }
  });

  // functionality for read more button doctorita
  
  $("#toggle").click(function () {
    var elem = $("#toggle").text();
    if (elem == "Citește mai mult") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Citește mai puțin");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Citește mai mult");
      $("#text").slideUp();
    }
  });
});




