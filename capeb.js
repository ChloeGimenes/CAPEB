     
   /* NAVBAR ACTIVE LINKS /////////////////////////////////////////////////////////////////////////////////////////////*/

   $(document).ready(function(){
    $('.menu li').click(function(){
      $('li').removeClass("header-active");
      $(this).addClass("header-active");
  });
  });

  

/* CALENDAR */

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',

      dateClick: function(info) {
        alert('Date: ' + info.dateStr);
        alert('Resource ID: ' + info.resource.id);

        htmle = 'Date: ' + info.dateStr,
        document.getElementById('main-container').innerHTML= htmle;

      }
      
    });
    calendar.render();
  });


  
/* PAGE PARCOURS MATRIMOINE */

  /* QUIZZ */
  /* BORDER COLOR*/
  
    
  /* REMOVE DISABLED BUTTON*/

  //   let checkboxes = $("input[type='radio']"),
  //   submitButt = $("input[type='submit']");

  //   checkboxes.click(function() {
  //   submitButt.attr("disabled", !checkboxes.is(":checked"));
  // });

  $(".form-check-input").on("change", function() {
    checkedFunc("ilvadebloquer1", "ilvadebloquer2");
  });
  
  function checkedFunc(element1Id, element2Id) {
    var mybutton = document.getElementById("debloquemoi");
    var element1 = document.getElementById(element1Id);
    var element2 = document.getElementById(element2Id);
    if (element1.checked == true && element2.checked == true) {
      mybutton.class = "submit";
      mybutton.removeAttribute("disabled");
    } else {
      mybutton.class = "button:disabled";
      mybutton.setAttribute("disabled", "disabled");
    }
  }

 



  /* FORM CONTACT REMOVE DISABLE BUTTON*/
  $('#username, #userlastname, #usermail, #userphone, #userdept').bind('keyup', function() {
    if(allFilled()) $("#button-contact-form").removeAttr('disabled');
    });

    function allFilled() {
        var filled = true;
        $('body input').each(function() {
            if($(this).val() == '') filled = false;
        });
        return filled;
    }

