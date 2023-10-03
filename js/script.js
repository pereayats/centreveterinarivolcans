/* HIDE AND SHOW MENU */

$('section').click(function() {
	if ($('#menu').find('span').hasClass('glyphicon-minus')) {
		$('#menu').find('span').removeClass('glyphicon-minus').addClass('glyphicon-th-large');
		$('#navigation').slideUp('slow');
	} 
});

$('#menu').on('click', function() {
	if ($(this).find('span').hasClass('glyphicon-th-large')) {
		$(this).find('span').removeClass('glyphicon-th-large').addClass('glyphicon-minus');
		$('#navigation').slideDown('slow');
	}
	else {
		$(this).find('span').removeClass('glyphicon-minus').addClass('glyphicon-th-large');
		$('#navigation').slideUp('slow');
	}
});

/* END HIDE AND SHOW MENU*/



/* SMOOTH LINKS */

$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	
	    $('html, body').animate({
        	scrollTop: $($(this).attr("href")).offset().top - 115
    	}, 700);
});

/* END SMOOTH LINKS */



/* SOCIAL ICONS ANIMATION */

$('.icon').mouseenter(function() {
	$(this).fadeTo("slow", 0.33).delay(200).fadeTo("slow", 1);
});

/* END SOCIAL ICONS ANIMATION */



/* NEWS DISPLAYER */

/*feednami.load("http://blog.centreveterinarivolcans.com/feed/", function(result) {
    if (result.error) {
        $('#newscontent').find('.container').append('<div class="row"><div class="col-md-12"><h1>Encara no hi ha notícies</h1></div></div>');
        $('#morenews').hide();
    }
    else {
        var entries = result.feed.entries;
        if (entries.length > 0) {
        	var content;
        	var i;
        	for (i = 0; (i < entries.length) && (i < 4); ++i) {
        		if (i%2 == 0) content = '<div class="row">';
        		content += '<div class="col-md-6">'+'<a href="'+entries[i].link+'" target="_blank">';
        		content += '<h4>'+entries[i].title+'</h4><br><p>'+entries[i].summary+'</p></a></div>';
        		if (i%2 == 1) {
        			content += '</div><br>'
        			$('#newscontent').find('.container').append(content);
        			if (i == entries.length - 1) $('#morenews').hide();
        		}
        	}
        
        	if (i%2 != 0) {
        		content += '</div><br>'
        		$('#newscontent').find('.container').append(content);
        		$('#morenews').hide();
        	}
        }
        else {
        	$('#newscontent').find('.container').append('<div class="row"><div class="col-md-12"><h1>Encara no hi ha notícies</h1></div></div>');
        }
    }
});

$('#morenews').on('click', function(event) {
	event.preventDefault();
	feednami.load("http://www.pereayats.com/centreveterinarivolcans/", function(result) {
    	if (result.error) {
        	$('#morenews').hide();	
    	}
    	else {
        	var entries = result.feed.entries;
        	var content;
        	var i;
        	var j = 0;
        	for (i = $('#newscontent .container .row .col-md-6').length; (i < entries.length) && (j < 2); ++i) {
        		if (i%2 == 0) content = '<div class="row">';
        		content += '<div class="col-md-6">'+'<a href="'+entries[i].link+'" target="_blank">';
        		content += '<h4>'+entries[i].title+'</h4><br>'+entries[i].summary+'</a></div>';
        		if (i%2 == 1) {
        			content += '</div><br>'
        			$('#newscontent').find('.container').append(content);
        			if (i == entries.length - 1) $('#morenews').hide();
        		}
        		++j;
        	}
        
        	if (i%2 != 0) {
        		content += '</div><br>'
        		$('#newscontent').find('.container').append(content);
        		$('#morenews').hide();
        	}	
    	}
	});
});*/

/* END NEWS DISPLAYER */



/* MAP POINTER EVENTS */

$('#my-map-display').on('click',function (e) {
	    $('#my-map-display iframe').css("pointer-events", "auto");
});

/* END MAP POINTER EVENTS */



/* FORM VALIDATION */

/*$("#contactform").validate({
	rules: {
	    name: "required",
	    email: {
	        required: true,
	        email: true
	    },
	    message: "required"
	},
	messages: {
	    name: "Aquest camp no es pot deixar buit",
	    email: {
	        required: "Aquest camp no es pot deixar buit",
	        email: "El correu electrònic no és correcte"
	    },
	    message: "Aquest camp no es pot deixar buit"
	},
	highlight: function(element) {
	    $(element).parent().addClass("has-error").removeClass("has-success");
        $(element).parent().find("span").addClass("glyphicon-remove").removeClass("glyphicon-ok toggleHidden");
	},
	unhighlight: function(element) {
	    $(element).parent().addClass("has-success").removeClass("has-error");
        $(element).parent().find("span").addClass("glyphicon-ok").removeClass("glyphicon-remove toggleHidden");
	},
	submitHandler: function(form) {
		var dataForm = $(form).serialize();
	    $.ajax({
            type: "POST",
            url: "contacthandler.php",
            data: dataForm,
            success: function(data) {
                if (data == "success") {
                	$('#contact .container .row .col-md-12').html("<h1>S'ha enviat correctament</h1");
                }
                else {
                	$('#contact .container .row .col-md-12').html("<h1>No s'ha pogut enviar.<br>Intenteu-ho més tard</h1");
                }
            }
        });
	}
});*/

/* END FORM VALIDATION */



/* GALLERY */

var i = 1;
var lasti;
var setNewImg = function() {
	$('#img'+lasti).fadeOut('slow');
	$('#img'+i).delay(700).fadeIn('slow');
}

$('#right').on('click', function() {
	lasti = i;
	++i;
	if (i > 10) i = 1;
	
	setNewImg();
});

$('#left').on('click', function() {
	lasti = i;
	--i;
	if (i < 1) i = 3;
	
	setNewImg();
});

/* END GALLERY */
