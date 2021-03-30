/* RESLOVE BUG FLICKETY */

    // with jQuery
    // $('.main.gallery').flickity({
    // imagesLoaded: true
    // });

    // $(window).load(function () {
    // $('.main-gallery').flickity({
    //   wrapAround: true,
    //   freeScroll: true,
    //   lazyLoad: 3
    // });
    // });

    //onload pictures position ok
    var flkty = new Flickity( '#carousel', {
        // re-position cells when images load
        imagesLoaded: true
      })


   

  /* NAVBAR ACTIVE LINKS /////////////////////////////////////////////////////////////////////////////////////////////*/
 $(document).ready(function () {​
     $('.menu li').click(function () {​
         $('li').removeClass("header-active");
         $(this).addClass("header-active");
     }​);
 }​);

 /* PAGE PARCOURS MATRIMOINE */
    /* FORM CONTACT REMOVE DISABLE BUTTON*/
    $('#username, #userlastname, #usermail, #userphone, #userdept').bind('keyup', function () {​
        if (allFilled()) $("#button-contact-form").removeAttr('disabled');
    }​);
    function allFilled() {​
        var filled = true;
        $('#mon-parcours-form input').each(function () {​
            if ($(this).val() == '') filled = false;
        }​);
        return filled;
    }​
    $('#form').validate({​
        errorPlacement: function (error, element) {​
            return true;
        }​
    }​);
    $('input').on('blur keyup click', function () {​
        if ($("#form").valid()) {​
            $('.btn').prop('disabled', false);
        }​ else {​
            $('.btn').prop('disabled', 'disabled');
        }​
    }​);
 /* PAGE LES MARCHES */
    /* MAP FRANCE INTERRACTIVE*/
    /* OPACITY MAP ON CLICK*/
    $(document).ready(function () {​
        $('.remove-opacity div').click(function () {​
            $('div').removeClass("opacity");
            $(this).addClass("opacity");
        }​);
    }​);
    /* ON LOAD - display 1st child bloc IMAGE MAP */
    $('#marches-bloc-image div').first().addClass('opacity');
    /* ON LOAD - display 1st child bloc TEXT */
    $('#marche-map-bloc-text div').first().show();
    /* ON CLICK SHOW REGIONS*/
    $('#picto-ileDeFrance').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.ileDeFrance').show();
    }​);
    $('#picto-centre').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.centre').show();
    }​);
    $('#picto-bourgogne').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.bourgogne').show();
    }​);
    $('#picto-bretagne').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.bretagne').show();
    }​);
    $('#picto-nord').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.nord').show();
    }​);
    $('#picto-normandie').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.normandie').show();
    }​);
    $('#picto-occitanie').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.occitanie').show();
    }​);
    $('#picto-loire').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.loire').show();
    }​);
    $('#picto-grand-est').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.ileDeFrance').show();
    }​);
    $('#picto-auvergne').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.auvergne').show();
    }​);
    $('#picto-cote-dazure').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.cote-dazure').show();
    }​);
    $('#picto-aquitaine').click(function (e) {​
        $(this).addClass("opacity");
        $('.show-region').hide();
        $('.aquitaine').show();
    }​);


     








