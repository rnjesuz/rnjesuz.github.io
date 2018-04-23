
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

$("#home-link, #aboutme-link, #curriculum-link, #thesis-link, #contacts-link, #home-link_mobile, #aboutme-link_mobile, #curriculum-link_mobile, #thesis-link_mobile, #contacts-link_mobile")
.click(function() {

	var name = $(this).attr("name");
	var page = name.split("-");

	//check what is the active link
	if(activeLink == page[0]){ //if current
		activeLink = "home"; //reset to home
		//remove current active class from portrait and lanscape/desktop menu
		$("#" + page[0] + "-link").removeClass("active");
		$("#" + page[0] + "-link_mobile").removeClass("active")
		//add home as active to portrait and lanscape/desktop menu
		$("#home-link").addClass("active");
		$("#home-link_mobile").addClass("active");
		return 0; //exit function
	}
	else //else make current as active
		activeLink = page[0];

	/*for horizontal scroll animation also change CSS*/
  /*if( $(document).scrollLeft() != $("#" + page[0]).offset().left ){
  		$('html, body').animate({
    		scrollLeft: $("#" + page[0]).offset().left
			}, 1500);
    }*/

	//scroll animation to desired part of webpage
  $('html,body').animate({ scrollTop: $("#" + page[0]).offset().top}, 1500);

	//remove active class from portrait and lanscape/desktop menu
  $("#nav-list li").each(function (){
    	$(this).removeClass("active");
  });
	$("#nav-list_mobile li").each(function (){
    	$(this).removeClass("active");
  });

	//add current as active class to portrait and lanscape/desktop menu
  $("#" + page[0] + "-link").addClass("active");
	$("#" + page[0] + "-link_mobile").addClass("active");

});

$(".redirect-to-research")
.click(function() {

	//make thesis the active class
	activeLink = "thesis";

	//scroll animation to desired part of webpage
	$('html,body').animate({
		scrollTop: $("#research").offset().top - 50},
		1500);

	//remove active class from portrait and lanscape/desktop menu
	$("#nav-list li").each(function (){
		$(this).removeClass("active");
	});
	$("#nav-list_mobile li").each(function (){
			$(this).removeClass("active");
	});

	//add thesis as active class to portrait and lanscape/desktop menu
	$("#" + "thesis-link").addClass("active");
	$("#" + "thesis-link_mobile").addClass("active");
});

$(".redirect-to-implementation")
.click(function() {

	//make thesis the active class
	activeLink = "thesis";

	$('html,body').animate({
		scrollTop: $("#implementation").offset().top - 50},
		1500);

	//remove active class from portrait and lanscape/desktop menu
	$("#nav-list li").each(function (){
		$(this).removeClass("active");
	});
	$("#nav-list_mobile li").each(function (){
			$(this).removeClass("active");
	});

	//add thesis as active class to portrait and lanscape/desktop menu
	$("#" + "thesis-link").addClass("active");
	$("#" + "thesis-link_mobile").addClass("active");
});
