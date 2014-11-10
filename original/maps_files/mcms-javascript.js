
var mcms_baseurl = 'http://www.wettropics.gov.au';
var mcms_basepath = '/home/e-web/e7/ce/wettropics.gov.au/public/www/';


//This javascript can be used for any javascript required globally (within both front end and admin pages).


//Submit confirm function
function confirmSubmit(objtype){
	var agree=confirm("Are you sure you want to delete this "+objtype+"?");
	if (agree)
		return true ;
	else
		return false ;
}

