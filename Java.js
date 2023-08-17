


function responsivemenu(){
	if (document.getElementById("colonnegauche").className=="left-column navmenu-hidden"){
		document.getElementById("colonnegauche").className="left-column navmenu-visible";
	}
	else{
		document.getElementById("colonnegauche").className="left-column navmenu-hidden";
	}	
	
}


function menuoff(){
	document.getElementById("colonnegauche").className="left-column navmenu-hidden";
}