$(document).ready(function(){
        $(document).off('click.bs.dropdown.data-api');
        dropdownOpen();
});
function dropdownOpen() {
    var $dropdownLi = $('li.dropdown');
    var $dropdownMenu = $('ul.dropdown-menu');
    var $navDesign = $('div.nav-offset-buttom');
	$dropdownLi.mouseover(function() {
		$($dropdownLi).removeClass('open');
		$(this).addClass('open');
		}).mouseout(function() {	
			$dropdownMenu.mouseover(function() {
				$(this).parent($dropdownLi).addClass('open');
			}).mouseout(function() {
				$(this).parent($dropdownLi).removeClass('open');
		});
	});
	$navDesign.mouseleave(function() {
		$dropdownLi.removeClass('open');
	});
	/*$dropdownMenu.mouseout(function() {
		$(this).parent($dropdownLi).removeClass('open');
	});*/
}