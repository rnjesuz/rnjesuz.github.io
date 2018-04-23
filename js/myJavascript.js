
var activeLink = "home";

function on_mouseover(social_media){
	$("#" + social_media +"-icon").on('mouseover', function() {
		$(this).attr('src', 'images/'+ social_media + '_hover.png');
	});
}

function on_mouseout(social_media){
	$("#" + social_media +"-icon").on('mouseout', function() {
		$(this).attr('src', 'images/'+ social_media + '_normal.png');
	});
}

on_mouseover("fb");		on_mouseout ("fb");
on_mouseover("gh");		on_mouseout ("gh");
on_mouseover("li");		on_mouseout ("li");

$("#home-link, #aboutme-link, #curriculum-link, #thesis-link, #contacts-link")
.click(function() {

	var name = $(this).attr("name");
	var page = name.split("-");

	if(activeLink == name){

		activeLink = "home";
		$("#" + name).removeClass("active")
		$("#home-link").addClass("active");
		return 0;
	}
	else
		activeLink = name;

	/*for horizontal acroll also change CSS*/
        /*if( $(document).scrollLeft() != $("#" + page[0]).offset().left ){
            $('html, body').animate({
                scrollLeft: $("#" + page[0]).offset().left
            }, 1500);
        }*/

        $('html,body').animate({
        	scrollTop: $("#" + page[0]).offset().top + 100},
        	1500);

        $("#nav-list li").each(function (){
        	$(this).removeClass("active");
        });

        $("#" + name).addClass("active");

    });

$(".redirect-to-thesis")
.click(function() {

	var name = $('#thesis-link').attr("name");
	activeLink = name;
	var page = name.split("-");

	$('html,body').animate({
		scrollTop: $("#" + page[0]).offset().top},
		1500);

	$("#nav-list li").each(function (){
		$(this).removeClass("active");
	});

	$("#" + name).addClass("active");

});

$(".redirect-to-research")
.click(function() {

	var name = $('#thesis-link').attr("name");
	activeLink = name;

	$('html,body').animate({
		scrollTop: $("#research").offset().top - 50},
		1500);

	$("#nav-list li").each(function (){
		$(this).removeClass("active");
	});

	$("#" + name).addClass("active");

});

$(".redirect-to-implementation")
.click(function() {

	var name = $('#thesis-link').attr("name");
	activeLink = name;

	$('html,body').animate({
		scrollTop: $("#implementation").offset().top - 50},
		1500);

	$("#nav-list li").each(function (){
		$(this).removeClass("active");
	});

	$("#" + name).addClass("active");

});
