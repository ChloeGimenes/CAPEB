     
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
        $('#mon-parcours-form input').each(function() {
            if($(this).val() == '') filled = false;
        });
        return filled;
    }

  
/* PAGE LES MARCHES */

  /* MAP FRANCE INTERRACTIVE*/
    /* OPACITY MAP ON CLICK*/
    $(document).ready(function(){
      $('.remove-opacity div').click(function(){
        $('div').removeClass("opacity");
        $(this).addClass("opacity");
    });
    });


    /* ON LOAD - display 1st child bloc IMAGE MAP */
    $('#marches-bloc-image:first').css('display', 'block');

    /* ON LOAD - display 1st child bloc TEXT */
   


    /* ON CLICK SHOW REGIONS*/
      function showIleDeFrance() {
      document.getElementsByClassName('ileDeFrance')[0].style.display = "block";
      document.getElementsByClassName('ileDeFrance')[1].style.display = "block";

      document.getElementsByClassName('normandie')[0].style.display = "none";
      document.getElementsByClassName('normandie')[1].style.display = "none";
      document.getElementsByClassName('bretagne')[0].style.display = "none";
      document.getElementsByClassName('bretagne')[1].style.display = "none";
      document.getElementsByClassName('nord')[0].style.display = "none";
      document.getElementsByClassName('nord')[1].style.display = "none";
      document.getElementsByClassName('occitanie')[0].style.display = "none";
      document.getElementsByClassName('occitanie')[1].style.display = "none";
      document.getElementsByClassName('loire')[0].style.display = "none";
      document.getElementsByClassName('loire')[1].style.display = "none";
      document.getElementsByClassName('grand-est')[0].style.display = "none";
      document.getElementsByClassName('grand-est')[1].style.display = "none";
      document.getElementsByClassName('bourgogne')[0].style.display = "none";
      document.getElementsByClassName('bourgogne')[1].style.display = "none";
      document.getElementsByClassName('auvergne')[0].style.display = "none";
      document.getElementsByClassName('auvergne')[1].style.display = "none";
      document.getElementsByClassName('cote-dazure')[0].style.display = "none";
      document.getElementsByClassName('cote-dazure')[1].style.display = "none";
      document.getElementsByClassName('centre')[0].style.display = "none";
      document.getElementsByClassName('centre')[1].style.display = "none";
      document.getElementsByClassName('aquitaine')[0].style.display = "none";
      document.getElementsByClassName('aquitaine')[1].style.display = "none";
      }  

      function showCentre() {
        document.getElementsByClassName('centre')[0].style.display = "block";
        document.getElementsByClassName('centre')[1].style.display = "block";

        document.getElementsByClassName('normandie')[0].style.display = "none";
        document.getElementsByClassName('normandie')[1].style.display = "none";
        document.getElementsByClassName('bretagne')[0].style.display = "none";
        document.getElementsByClassName('bretagne')[1].style.display = "none";
        document.getElementsByClassName('nord')[0].style.display = "none";
        document.getElementsByClassName('nord')[1].style.display = "none";
        document.getElementsByClassName('occitanie')[0].style.display = "none";
        document.getElementsByClassName('occitanie')[1].style.display = "none";
        document.getElementsByClassName('loire')[0].style.display = "none";
        document.getElementsByClassName('loire')[1].style.display = "none";
        document.getElementsByClassName('grand-est')[0].style.display = "none";
        document.getElementsByClassName('grand-est')[1].style.display = "none";
        document.getElementsByClassName('bourgogne')[0].style.display = "none";
        document.getElementsByClassName('bourgogne')[1].style.display = "none";
        document.getElementsByClassName('auvergne')[0].style.display = "none";
        document.getElementsByClassName('auvergne')[1].style.display = "none";
        document.getElementsByClassName('cote-dazure')[0].style.display = "none";
        document.getElementsByClassName('cote-dazure')[1].style.display = "none";
        document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
        document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
        document.getElementsByClassName('aquitaine')[0].style.display = "none";
        document.getElementsByClassName('aquitaine')[1].style.display = "none";
        }  


        function showBourgogne() {
          document.getElementsByClassName('bourgogne')[0].style.display = "block";
          document.getElementsByClassName('bourgogne')[1].style.display = "block";
      
          document.getElementsByClassName('normandie')[0].style.display = "none";
          document.getElementsByClassName('normandie')[1].style.display = "none";
          document.getElementsByClassName('bretagne')[0].style.display = "none";
          document.getElementsByClassName('bretagne')[1].style.display = "none";
          document.getElementsByClassName('nord')[0].style.display = "none";
          document.getElementsByClassName('nord')[1].style.display = "none";
          document.getElementsByClassName('occitanie')[0].style.display = "none";
          document.getElementsByClassName('occitanie')[1].style.display = "none";
          document.getElementsByClassName('loire')[0].style.display = "none";
          document.getElementsByClassName('loire')[1].style.display = "none";
          document.getElementsByClassName('grand-est')[0].style.display = "none";
          document.getElementsByClassName('grand-est')[1].style.display = "none";
          document.getElementsByClassName('centre')[0].style.display = "none";
          document.getElementsByClassName('centre')[1].style.display = "none";
          document.getElementsByClassName('auvergne')[0].style.display = "none";
          document.getElementsByClassName('auvergne')[1].style.display = "none";
          document.getElementsByClassName('cote-dazure')[0].style.display = "none";
          document.getElementsByClassName('cote-dazure')[1].style.display = "none";
          document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
          document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
          document.getElementsByClassName('aquitaine')[0].style.display = "none";
          document.getElementsByClassName('aquitaine')[1].style.display = "none";
          }  

        
        function showBretagne() {
          document.getElementsByClassName('bretagne')[0].style.display = "block";
          document.getElementsByClassName('bretagne')[1].style.display = "block";

          document.getElementsByClassName('normandie')[0].style.display = "none";
          document.getElementsByClassName('normandie')[1].style.display = "none";
          document.getElementsByClassName('occitanie')[0].style.display = "none";
          document.getElementsByClassName('occitanie')[1].style.display = "none";
          document.getElementsByClassName('nord')[0].style.display = "none";
          document.getElementsByClassName('nord')[1].style.display = "none";
          document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
          document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
          document.getElementsByClassName('loire')[0].style.display = "none";
          document.getElementsByClassName('loire')[1].style.display = "none";
          document.getElementsByClassName('grand-est')[0].style.display = "none";
          document.getElementsByClassName('grand-est')[1].style.display = "none";
          document.getElementsByClassName('bourgogne')[0].style.display = "none";
          document.getElementsByClassName('bourgogne')[1].style.display = "none";
          document.getElementsByClassName('auvergne')[0].style.display = "none";
          document.getElementsByClassName('auvergne')[1].style.display = "none";
          document.getElementsByClassName('cote-dazure')[0].style.display = "none";
          document.getElementsByClassName('cote-dazure')[1].style.display = "none";
          document.getElementsByClassName('centre')[0].style.display = "none";
          document.getElementsByClassName('centre')[1].style.display = "none";
          document.getElementsByClassName('aquitaine')[0].style.display = "none";
          document.getElementsByClassName('aquitaine')[1].style.display = "none";
          } 

        function showNord() {
          document.getElementsByClassName('nord')[0].style.display = "block";
          document.getElementsByClassName('nord')[1].style.display = "block";

          document.getElementsByClassName('normandie')[0].style.display = "none";
          document.getElementsByClassName('normandie')[1].style.display = "none";
          document.getElementsByClassName('bretagne')[0].style.display = "none";
          document.getElementsByClassName('bretagne')[1].style.display = "none";
          document.getElementsByClassName('occitanie')[0].style.display = "none";
          document.getElementsByClassName('occitanie')[1].style.display = "none";
          document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
          document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
          document.getElementsByClassName('loire')[0].style.display = "none";
          document.getElementsByClassName('loire')[1].style.display = "none";
          document.getElementsByClassName('grand-est')[0].style.display = "none";
          document.getElementsByClassName('grand-est')[1].style.display = "none";
          document.getElementsByClassName('bourgogne')[0].style.display = "none";
          document.getElementsByClassName('bourgogne')[1].style.display = "none";
          document.getElementsByClassName('auvergne')[0].style.display = "none";
          document.getElementsByClassName('auvergne')[1].style.display = "none";
          document.getElementsByClassName('cote-dazure')[0].style.display = "none";
          document.getElementsByClassName('cote-dazure')[1].style.display = "none";
          document.getElementsByClassName('centre')[0].style.display = "none";
          document.getElementsByClassName('centre')[1].style.display = "none";
          document.getElementsByClassName('aquitaine')[0].style.display = "none";
          document.getElementsByClassName('aquitaine')[1].style.display = "none";

      } 

      function showNormandie() {
        document.getElementsByClassName('normandie')[0].style.display = "block";
        document.getElementsByClassName('normandie')[1].style.display = "block";

        document.getElementsByClassName('occitanie')[0].style.display = "none";
        document.getElementsByClassName('occitanie')[1].style.display = "none";
        document.getElementsByClassName('bretagne')[0].style.display = "none";
        document.getElementsByClassName('bretagne')[1].style.display = "none";
        document.getElementsByClassName('nord')[0].style.display = "none";
        document.getElementsByClassName('nord')[1].style.display = "none";
        document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
        document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
        document.getElementsByClassName('loire')[0].style.display = "none";
        document.getElementsByClassName('loire')[1].style.display = "none";
        document.getElementsByClassName('grand-est')[0].style.display = "none";
        document.getElementsByClassName('grand-est')[1].style.display = "none";
        document.getElementsByClassName('bourgogne')[0].style.display = "none";
        document.getElementsByClassName('bourgogne')[1].style.display = "none";
        document.getElementsByClassName('auvergne')[0].style.display = "none";
        document.getElementsByClassName('auvergne')[1].style.display = "none";
        document.getElementsByClassName('cote-dazure')[0].style.display = "none";
        document.getElementsByClassName('cote-dazure')[1].style.display = "none";
        document.getElementsByClassName('centre')[0].style.display = "none";
        document.getElementsByClassName('centre')[1].style.display = "none";
        document.getElementsByClassName('aquitaine')[0].style.display = "none";
        document.getElementsByClassName('aquitaine')[1].style.display = "none";
    }  

    function showOccitanie() {
        document.getElementsByClassName('occitanie')[0].style.display = "block";
        document.getElementsByClassName('occitanie')[1].style.display = "block";

        document.getElementsByClassName('normandie')[0].style.display = "none";
        document.getElementsByClassName('normandie')[1].style.display = "none";
        document.getElementsByClassName('bretagne')[0].style.display = "none";
        document.getElementsByClassName('bretagne')[1].style.display = "none";
        document.getElementsByClassName('nord')[0].style.display = "none";
        document.getElementsByClassName('nord')[1].style.display = "none";
        document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
        document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
        document.getElementsByClassName('loire')[0].style.display = "none";
        document.getElementsByClassName('loire')[1].style.display = "none";
        document.getElementsByClassName('grand-est')[0].style.display = "none";
        document.getElementsByClassName('grand-est')[1].style.display = "none";
        document.getElementsByClassName('bourgogne')[0].style.display = "none";
        document.getElementsByClassName('bourgogne')[1].style.display = "none";
        document.getElementsByClassName('auvergne')[0].style.display = "none";
        document.getElementsByClassName('auvergne')[1].style.display = "none";
        document.getElementsByClassName('cote-dazure')[0].style.display = "none";
        document.getElementsByClassName('cote-dazure')[1].style.display = "none";
        document.getElementsByClassName('centre')[0].style.display = "none";
        document.getElementsByClassName('centre')[1].style.display = "none";
        document.getElementsByClassName('aquitaine')[0].style.display = "none";
        document.getElementsByClassName('aquitaine')[1].style.display = "none";
      
      
    }  

    function showLoire() {
      document.getElementsByClassName('loire')[0].style.display = "block";
      document.getElementsByClassName('loire')[1].style.display = "block";

      document.getElementsByClassName('normandie')[0].style.display = "none";
      document.getElementsByClassName('normandie')[1].style.display = "none";
      document.getElementsByClassName('bretagne')[0].style.display = "none";
      document.getElementsByClassName('bretagne')[1].style.display = "none";
      document.getElementsByClassName('nord')[0].style.display = "none";
      document.getElementsByClassName('nord')[1].style.display = "none";
      document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
      document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
      document.getElementsByClassName('occitanie')[0].style.display = "none";
      document.getElementsByClassName('occitanie')[1].style.display = "none";
      document.getElementsByClassName('grand-est')[0].style.display = "none";
      document.getElementsByClassName('grand-est')[1].style.display = "none";
      document.getElementsByClassName('bourgogne')[0].style.display = "none";
      document.getElementsByClassName('bourgogne')[1].style.display = "none";
      document.getElementsByClassName('auvergne')[0].style.display = "none";
      document.getElementsByClassName('auvergne')[1].style.display = "none";
      document.getElementsByClassName('cote-dazure')[0].style.display = "none";
      document.getElementsByClassName('cote-dazure')[1].style.display = "none";
      document.getElementsByClassName('centre')[0].style.display = "none";
      document.getElementsByClassName('centre')[1].style.display = "none";
      document.getElementsByClassName('aquitaine')[0].style.display = "none";
      document.getElementsByClassName('aquitaine')[1].style.display = "none";
    }  

    function showGrandEst() {
      document.getElementsByClassName('grand-est')[0].style.display = "block";
      document.getElementsByClassName('grand-est')[1].style.display = "block";

      document.getElementsByClassName('normandie')[0].style.display = "none";
      document.getElementsByClassName('normandie')[1].style.display = "none";
      document.getElementsByClassName('bretagne')[0].style.display = "none";
      document.getElementsByClassName('bretagne')[1].style.display = "none";
      document.getElementsByClassName('nord')[0].style.display = "none";
      document.getElementsByClassName('nord')[1].style.display = "none";
      document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
      document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
      document.getElementsByClassName('loire')[0].style.display = "none";
      document.getElementsByClassName('loire')[1].style.display = "none";
      document.getElementsByClassName('occitanie')[0].style.display = "none";
      document.getElementsByClassName('occitanie')[1].style.display = "none";
      document.getElementsByClassName('bourgogne')[0].style.display = "none";
      document.getElementsByClassName('bourgogne')[1].style.display = "none";
      document.getElementsByClassName('cote-dazure')[0].style.display = "none";
      document.getElementsByClassName('cote-dazure')[1].style.display = "none";
      document.getElementsByClassName('centre')[0].style.display = "none";
      document.getElementsByClassName('centre')[1].style.display = "none";
      document.getElementsByClassName('auvergne')[0].style.display = "none";
      document.getElementsByClassName('auvergne')[1].style.display = "none";
      document.getElementsByClassName('aquitaine')[0].style.display = "none";
      document.getElementsByClassName('aquitaine')[1].style.display = "none";

    }

    function showAuvergne() {
      document.getElementsByClassName('auvergne')[0].style.display = "block";
      document.getElementsByClassName('auvergne')[1].style.display = "block";

      document.getElementsByClassName('normandie')[0].style.display = "none";
      document.getElementsByClassName('normandie')[1].style.display = "none";
      document.getElementsByClassName('bretagne')[0].style.display = "none";
      document.getElementsByClassName('bretagne')[1].style.display = "none";
      document.getElementsByClassName('nord')[0].style.display = "none";
      document.getElementsByClassName('nord')[1].style.display = "none";
      document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
      document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
      document.getElementsByClassName('loire')[0].style.display = "none";
      document.getElementsByClassName('loire')[1].style.display = "none";
      document.getElementsByClassName('grand-est')[0].style.display = "none";
      document.getElementsByClassName('grand-est')[1].style.display = "none";
      document.getElementsByClassName('bourgogne')[0].style.display = "none";
      document.getElementsByClassName('bourgogne')[1].style.display = "none";
      document.getElementsByClassName('occitanie')[0].style.display = "none";
      document.getElementsByClassName('occitanie')[1].style.display = "none";
      document.getElementsByClassName('cote-dazure')[0].style.display = "none";
      document.getElementsByClassName('cote-dazure')[1].style.display = "none";
      document.getElementsByClassName('centre')[0].style.display = "none";
      document.getElementsByClassName('centre')[1].style.display = "none";
      
      document.getElementsByClassName('aquitaine')[0].style.display = "none";
      document.getElementsByClassName('aquitaine')[1].style.display = "none";


    }

    function showCotedAzure() {
      document.getElementsByClassName('cote-dazure')[0].style.display = "block";
      document.getElementsByClassName('cote-dazure')[1].style.display = "block";
      document.getElementsByClassName('normandie')[0].style.display = "none";
      document.getElementsByClassName('normandie')[1].style.display = "none";
      document.getElementsByClassName('bretagne')[0].style.display = "none";
      document.getElementsByClassName('bretagne')[1].style.display = "none";
      document.getElementsByClassName('nord')[0].style.display = "none";
      document.getElementsByClassName('nord')[1].style.display = "none";
      document.getElementsByClassName('occitanie')[0].style.display = "none";
      document.getElementsByClassName('occitanie')[1].style.display = "none";
      document.getElementsByClassName('loire')[0].style.display = "none";
      document.getElementsByClassName('loire')[1].style.display = "none";
      document.getElementsByClassName('grand-est')[0].style.display = "none";
      document.getElementsByClassName('grand-est')[1].style.display = "none";
      document.getElementsByClassName('bourgogne')[0].style.display = "none";
      document.getElementsByClassName('bourgogne')[1].style.display = "none";
      document.getElementsByClassName('auvergne')[0].style.display = "none";
      document.getElementsByClassName('auvergne')[1].style.display = "none";
      document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
      document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
      document.getElementsByClassName('centre')[0].style.display = "none";
      document.getElementsByClassName('centre')[1].style.display = "none";
      document.getElementsByClassName('aquitaine')[0].style.display = "none";
      document.getElementsByClassName('aquitaine')[1].style.display = "none";
      }  

      function showAquitaine() {
        document.getElementsByClassName('aquitaine')[0].style.display = "block";
        document.getElementsByClassName('aquitaine')[1].style.display = "block";
        document.getElementsByClassName('normandie')[0].style.display = "none";
        document.getElementsByClassName('normandie')[1].style.display = "none";
        document.getElementsByClassName('bretagne')[0].style.display = "none";
        document.getElementsByClassName('bretagne')[1].style.display = "none";
        document.getElementsByClassName('nord')[0].style.display = "none";
        document.getElementsByClassName('nord')[1].style.display = "none";
        document.getElementsByClassName('occitanie')[0].style.display = "none";
        document.getElementsByClassName('occitanie')[1].style.display = "none";
        document.getElementsByClassName('loire')[0].style.display = "none";
        document.getElementsByClassName('loire')[1].style.display = "none";
        document.getElementsByClassName('grand-est')[0].style.display = "none";
        document.getElementsByClassName('grand-est')[1].style.display = "none";
        document.getElementsByClassName('bourgogne')[0].style.display = "none";
        document.getElementsByClassName('bourgogne')[1].style.display = "none";
        document.getElementsByClassName('auvergne')[0].style.display = "none";
        document.getElementsByClassName('auvergne')[1].style.display = "none";
        document.getElementsByClassName('ileDeFrance')[0].style.display = "none";
        document.getElementsByClassName('ileDeFrance')[1].style.display = "none";
        document.getElementsByClassName('centre')[0].style.display = "none";
        document.getElementsByClassName('centre')[1].style.display = "none";
        document.getElementsByClassName('cote-dazure')[0].style.display = "none";
        document.getElementsByClassName('cote-dazure')[1].style.display = "none";
        }  

