     
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



