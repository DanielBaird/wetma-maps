function modalDialogShow_Moz(url,width,height) //Moz
{
var left = screen.availWidth/2 - width/2;
var top = screen.availHeight/2 - height/2;
activeModalWin = window.open(url, "", "width="+width+"px,height="+height+",left="+left+",top="+top);
window.onfocus = function(){if (activeModalWin.closed == false){activeModalWin.focus();};};
}
function openAssetStandaloneMode()
{
	var dummy;
	var siteURL = mcms_baseurl;
	var siteServerDir = mcms_basepath;
	var modalWindowWidth = 980;
	var modalWindowHeight = 670;
	
	if(navigator.appName.indexOf('Microsoft')!=-1)
	/* document.getElementById(sActiveAssetInput).value=modalDialogShow_IE("/cms/Editor/assetmanager/assetmanager.php?site_url="+siteURL+"&site_server_dir="+siteServerDir,640,465); //IE	*/
	dummy = modalDialogShow_IE(siteURL+"/core/modules/assetmanager/assetmanager.php?standalone=Y&opened_from=button&site_url="+siteURL+"&site_server_dir="+siteServerDir,modalWindowWidth,modalWindowHeight); //IE
else
	modalDialogShow_Moz(siteURL+"/core/modules/assetmanager/assetmanager.php?standalone=Y&opened_from=button&site_url="+siteURL+"&site_server_dir="+siteServerDir,modalWindowWidth,modalWindowHeight); //Moz	
}