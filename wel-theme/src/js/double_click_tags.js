  function callFloodlight(type, cat) {
		var tag_url="https://4838418.fls.doubleclick.net/activityi;src=4838418;type=" + type + ";cat=" + cat + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+Math.floor(Math.random()*10000000000000)+"?";
		if(document.getElementById("DSI_FLDiv"))
		{
			var flDiv=document.getElementById("DSI_FLDiv");
		}
		else
		{
			var flDiv=document.body.appendChild(document.createElement("div"));
			flDiv.id="DSI_FLDiv";
			flDiv.style.display="none";
		}
		var DSI_FLIframe=document.createElement("iframe");
		DSI_FLIframe.id="DSI_FLIframe_"+Math.floor(Math.random()*999999);
		DSI_FLIframe.src=tag_url;
		DSI_FLIframe.width=1;
		DSI_FLIframe.height=1;
		DSI_FLIframe.frameborder=0;
		flDiv.appendChild(DSI_FLIframe);
		console.log("Called floodlight tag Type-"+type+" | Cat-"+cat);
	}