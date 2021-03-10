     
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

  /* QUESTIONS RADIO BOXES */
  $("form-check input:radio").change(function () {$("#button-patrimoine").prop("disabled", false);});


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

