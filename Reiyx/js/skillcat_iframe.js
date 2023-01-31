function onclick_iframesrc(link)
{
	var change_link = link;
	document.getElementById("iframe_skillset").src = change_link;
	
}

function onclick_showiframe(id)
{
	
	console.log("click");
	
	const all_iframe = document.getElementsByClassName("iframe_skill");
	
	for(var i = 0; i < all_iframe.length; i++)
	{
		all_iframe[i].style.display = "none";
		console.log("reset");
	}
	
	document.getElementById(id).style.display = "inline";
	console.log("show");
}