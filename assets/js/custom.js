/**
 * Custom JS
 * Use this file to add your custom scripts
 */
//Para animar ANCLAS
$('a.scroll').click(function(e){
	e.preventDefault();
	$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top - 80}, 1500);
});