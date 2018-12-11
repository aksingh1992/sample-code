/* 
	GA Custom Extension v1.9j (plamen@insightrocket.com) 
	last modified 6/10/2015:
	+ offsite click on area elements for RightFit co-branded page
	+ cross-domain tracker UA fix for Welchol & HTN Consumer sites
	+ custom non- to branded page conversion
	+ voucher traffic source forwarding
	+ cross-domain autotracker extended recognition
	+ automatic HTML5 video tracking
	+ global HTN HCP profile
	+ GA Universal Analytics
		+ Non-Interactive Event fix
	for use on welcholhcp.com PROD & HCP registration brand=WEL PROD only
*/

function gaTrack() {
  this.site = 'Welchol HCP';
  this.account = "UA-22695570-3";
  this.accounts = {
		'none': 				'UA-22695570-15',
		'Welchol HCP': 			'UA-22695570-3',
		'HTN HCP Rollup': 		'UA-22695570-21',
		'Tribenzor HCP': 		'UA-22695570-26',
		'Azor HCP': 			'UA-22695570-25',
		'Benicar HCP': 			'UA-22695570-17',
		'Effient HCP':			'UA-22695570-32',
		'Welchol':				'UA-22695570-2',
		'Welchol Tracker':		'UA-22695570-29',
		'Welchol Addvantage':	'UA-22695570-30',
		'Azor':					'UA-22695570-22',
		'Benicar':				'UA-22695570-16',
		'Tribenzor':			'UA-22695570-23',
		'Effient':				'UA-22695570-35',
		'Edoxaban':				'UA-22695570-27',
		'Right Fit':			'UA-22695570-31',
		'DSMap':				'UA-22695570-24',
		'DSIMedInfo': 			'UA-22695570-28',
		'eDossier':				'UA-22695570-13',
		'DSI.com':				'UA-22695570-12',
		'My DSI':				'UA-22695570-4',
		'Lixiana.com':			'UA-22695570-19',
		'Lixiana Patient':		'UA-22695570-38'
  };
  
  this.fpcdom = document.domain;
  
  this.crossdoms = function(a) {
	  var cd = ['register.dsi.com','mail.dsicustomerservice.com','mprstest.mckesson.com','mprsetrial.mckesson.com'];
	  for (var c = 0; c < cd.length; c++)
		  if (cd[c] == a.fpcdom)
			  cd.splice(c, 1);
	  return cd.join(',');
  }(this);
  
  this.branded = {
	home: ['/', '/index.htm', '/index.html'],
	'Welchol': [
		'/benefits-of-welchol/index.htm',
		'/benefits-of-welchol/why-add-welchol.htm',
		'/benefits-of-welchol/welchol-for-type-2-diabetes.htm',
		'/benefits-of-welchol/welchol-for-bad-cholesterol.htm',
		'/how-welchol-works/index.htm',
		'/how-to-take-welchol/index.htm',
		'/how-to-take-welchol/welchol-tablets.htm',
		'/how-to-take-welchol/welchol-oral-suspension.htm',
		'/how-to-take-welchol/welchol-oral-suspension-video.htm',
		'/patient-resources/index.htm',
		'/pi.htm'
	],
	'Benicar': [
		'/about.html',
		'/how_work.html',
		'/safety_and_side_effects.html',
		'/setting_goals.html',
		'/starting_right.html',
		'/staying_on.html',
		'/taking.html',
		'/saving_money.html',
		'/working_with_your_doctor.html'
	],
	'Azor': [
		'/about.html',
		'/how_works.html',
		'/starting_right.html',
		'/safety_and_side_effects.html',
		'/working_with_your_doctor.html',
		'/questions_to_ask_doctor.html',
		'/staying_on.html',
		'/right_fit_program.html',
		'/saving_money.html'
	],
	'Tribenzor': [
		'/about.html',
		'/how_works.html',
		'/starting_right.html',
		'/safety_and_side_effects.html',
		'/working_with_your_doctor.html',
		'/questions_to_ask_doctor.html',
		'/staying_on.html',
		'/right_fit_program.html',
		'/saving_money.html'
	]
  }
  
  this.GA = {};
  this.secondary = function(a) {
	if (["Azor HCP","Benicar HCP","Tribenzor HCP","HTN"].has(a.site)) {
		a.crossdoms += ",www.benicarhcp.com,www.azorhcp.com,www.tribenzorhcp.com";
		return a.accounts["HTN HCP Rollup"];
	}
	else
		if (["Welchol Addvantage"].has(a.site))
			return a.accounts["Welchol"];
	else
		return null;
  }(this);

  this.onsitedoms = "";
  this.downloadtypes = "xls,doc,pdf,txt,csv,zip";
}

gaTrack.prototype.gaIsOnsite = function(host){
	if (host.length>0){
		host=host.toLowerCase();
		if (host==window.location.hostname.toLowerCase()){
			return true;
		}
		if (typeof(this.onsitedoms.test)=="function"){
			return this.onsitedoms.test(host);
		}
		else if (this.onsitedoms.length>0){
			var doms=this.gaSplit(this.onsitedoms);
			var len=doms.length;
			for (var i=0;i<len;i++){
				if (host==doms[i]){
					return true;
				}
			}
		}
	}
	return false;
}

gaTrack.prototype.gaTypeMatch = function(pth, qry, typelist){
  var type=pth.substring(pth.lastIndexOf(".")+1,pth.length);
  var types=this.gaSplit(typelist);
  var tlen=types.length;  
  for (var i=0;i<tlen;i++){
	if (type==types[i]){
	  return types[i];
	}
  }
  return false;
}

gaTrack.prototype.gaEvt = function(evt,tag) {
  var e=evt.target||evt.srcElement;
  while (e.tagName&&(e.tagName!=tag)) {
	e=e.parentElement||e.parentNode;
  }
  return e;
}

gaTrack.prototype.gaBind = function(event,func){
  if ((typeof(func)=="function")&&document.body) {
	if (document.body.addEventListener)
	  document.body.addEventListener(event, func.gabind(this), true);
	else if(document.body.attachEvent)
	  document.body.attachEvent("on"+event, func.gabind(this));
  }
}

gaTrack.prototype.gaET = function(){
	
	/* automatic link tagging */
	ga(function(tracker) { 
		if (_taq.secondary)
			_ga = ga.getByName('sec');
		else
			_ga = tracker;
		_taq.scanElement('a');
		_taq.scanElement('div');
		_taq.scanElement('span');
		_taq.scanElement('area');
	});
	  
	var e=(navigator.appVersion.indexOf("MSIE")!=-1)?"click":"mousedown";
	this.gaBind(e, this.gaDownload);
	this.gaBind(e, this.gaOffsite);
	
	/* HTML5 Video tagging */
	this.gaTrackVideo();
}

gaTrack.prototype.gaSplit = function(list){
  var items=list.toLowerCase().split(",");
  var len=items.length;
  for (var i=0;i<len;i++){
	items[i]=items[i].replace(/^\s*/,"").replace(/\s*$/,"");
  }
  return items;
}

//Track clicks to download links.
gaTrack.prototype.gaDownload = function(evt){
  
  evt=evt||(window.event||"");
  
  if (evt&&((typeof(evt.which)!="number")||(evt.which==1))){
	var e=this.gaEvt(evt,"A");
	if (e.href){
		var hn=e.hostname?(e.hostname.split(":")[0]):"";
		var qry=e.search?e.search.substring(e.search.indexOf("?")+1,e.search.length):"";
	 var dtype=this.gaTypeMatch(e.pathname,qry,this.downloadtypes);
		if (this.gaIsOnsite(hn)&&dtype){
			var pth=e.pathname?((e.pathname.indexOf("/")!=0)?"/"+e.pathname:e.pathname):"/";
			var ttl="";
			var text=document.all?e.innerText:e.text;
			var img=this.gaEvt(evt,"IMG");
			if (img.alt){
			  ttl=img.alt;
			}
			else if (text){
			  ttl=text;
			}
			else if (e.innerHTML){
			  ttl=e.innerHTML;
			}
				this.gaTrackEvent("Downloads", e.pathname, "Auto-Tracked Events");
		}
	}
  }
}

//Track clicks to links leading offsite.
gaTrack.prototype.gaOffsite = function(evt) {

  evt=evt||(window.event||"");
  
  if (evt&&((typeof(evt.which)!="number")||(evt.which==1))) {
	
		var e=this.gaEvt(evt,"A");
		
		if (!e.href) {
			e = evt.target || evt.srcElement;
			if (!e || !e.href)
				return;
		}
		
		var hn = e.hostname?(e.hostname.split(":")[0]):"";
		var cs = (this.crossdoms && this.crossdoms.indexOf(hn) != -1);
  
		if (!cs && !this.gaIsOnsite(hn)) {
		
			var qry=e.search?e.search.substring(e.search.indexOf("?")+1,e.search.length):"";
			var pth=e.pathname?((e.pathname.indexOf("/")!=0)?"/"+e.pathname:e.pathname):"/";
		  	
			if (e.href.match(/.*(sankyo|daiichi|welcol|welchol|benicar|tribenzor|azor|dsi|lixiana|livingwithdryness|evoxac|rightfitforme|bpunderpressure|center4consumerism|2reasons1|tworeasonsone|savingsthatlast|eresources4health|hypertensioncareforyou|coagulationcenter|thelistenmission).*/))
				this.gaTrackEvent("Cross-DSI Clicks", e.href, "Auto-Tracked Events");
			else 
			if (e.href.indexOf("javascript")!=0)
				this.gaTrackEvent("Offsite Clicks", e.href, "Auto-Tracked Events", null, 1);
		}
  }
}

gaTrack.prototype.gaAdv = function() {
	if (typeof(this.gaET) == "function") {
		if (window.addEventListener)
		  window.addEventListener("load", this.gaET.gabind(this), false);
		else if (window.attachEvent)
		  window.attachEvent("onload", this.gaET.gabind(this));
	}
}

gaTrack.prototype.scanElement = function(tag) {

	var els = document.getElementsByTagName(tag);
	var cd = this.gaSplit(this.crossdoms);
	var cookie = this.readCookie('__utmz');
	
	for (var i = 0; i < els.length; i++) {
		
		var a = els[i], url = '', onc = 0;
		
		for (var s = 0; s < cd.length; s++) {
		
			if (a.onclick && (""+a.onclick).indexOf(cd[s]) != -1) {
				var r = new RegExp("['\"](.+?" + cd[s] + ".+?)['\"]");
				url = (""+a.onclick).match(r)[1];
				onc = 1;
			}
			else 
			if (a.href && a.href.indexOf(cd[s]) != -1)
				url = a.href;
			else
				continue;
			
			var linker = new window.gaplugins.Linker(_ga);
			var new_url = linker.decorate(url);
			
			if (cookie && cookie.has('utmcct=')) {
				new_url += '&moc=' + cookie.match(/utmcct=([^&]+)/)[1];
				new_url += '&src=' + cookie.match(/utmcct=([^&]+)/)[1];
			}
			
			if (onc) {
				var onclick = (""+a.onclick).replace(url, new_url);
				onclick = onclick.split('{')[1].split('}')[0];
				
				if (navigator.appName.indexOf("Internet Explorer") != -1) 
					a.onclick = function() { eval(onclick) };
				else
					a.setAttribute('onclick', onclick);
			}
			else
				a.href = new_url;
		}
	}		
}

gaTrack.prototype.writeCookie = function (name, value, exp) {
	var today = new Date();
	exp = exp * 1000 * 60;
	var expires = new Date( today.getTime() + (exp) );
	document.cookie = name + "=" +encodeURIComponent(value) + (exp?";expires="+expires.toGMTString(): "") + ";path=/;domain=" + this.fpcdom;
}

gaTrack.prototype.readCookie = function(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length,c.length));
	}
	return null;
}

Function.prototype.gabind = function(obj){
  var method=this;
  var temp=function(){
	return method.apply(obj,arguments);
  };
  return temp;
}

gaTrack.prototype.gaShimCookie = function() {
	
	if (param('utm_source')) {
		
		var params = ['utmcsr='+param('utm_source')];
		
		if (param('utm_campaign'))
			params.push('utmccn='+param('utm_campaign'));
		
		if (param('utm_medium'))
			params.push('utmcmd='+param('utm_medium'));
		
		if (param('utm_term'))
			params.push('utmctr='+param('utm_term'));
		
		if (param('utm_content'))
			params.push('utmcct='+param('utm_content'));
		
		this.writeCookie('__utmz', params.join('|'), 60 * 24 * 183);
	}
}

//custom tracking of non-branded to branded page conversion
gaTrack.prototype.gaTrackBranded = function() {

	if (!['Azor','Benicar','Tribenzor','Welchol'].has(this.site))
		return;
	
	var c = this.readCookie('ir_tb')||''; 
	var p = window.location.pathname;
	var h = [], tracked = 0;
	var bp = this.branded[this.site];
	var branded = bp.has(p);
	var home = this.branded.home.has(p);
	
	if (c.length)
		try { h = decodeURIComponent(c).split('::') } 
			catch(ex) { h = [] };

	if (!h.length && branded) /* landed on branded */
		h = ['1'];
	
	if (h.length == 1 && h[0] == '1') { /* visit already converted */
		this.writeCookie('ir_tb', '1', 30);
		return;
	}
		
	if (h.length && (branded || home)) { /* attribute conversions */
		
		if (!home || !h.has(this.branded.home))
			this.gaTrackEvent("Conversions", "Branded", "Any", null, 1);

		if (!home && h.has(this.branded.home))
			this.gaTrackEvent("Conversions", "Branded", "Home", null, 1);
		
		var z = this.readCookie('__utmz')||'';
			if (z.has('=cp') || z.has('=CP'))
				this.gaTrackEvent("Conversions", "Branded", "Paid Search", null, 1);
					
		if (this.site == 'Welchol') {
		
			if (c.has('about-cholesterol'))
				this.gaTrackEvent("Conversions", "Branded", "Any Cholesterol Page", null, 1);
				
			if (c.has('about-type-2-diabetes'))
				this.gaTrackEvent("Conversions", "Branded", "Any Diabetes Page", null, 1);
		}
		else {
			/* HTN Consumer */
			if (c.has('about_high_blood_pressure.html'))
				this.gaTrackEvent("Conversions", "Branded", "About HBP", null, 1);
				
			if (c.search(/about_high|\/understanding|\/know_the_risk/) > -1)
				this.gaTrackEvent("Conversions", "Branded", "Any BP Page", null, 1);
			
		}
		h = ['1'];
		//alert('attribution');
	}
	else
	if (!branded) { /* start appropriate goals */
	
		if (!h.length) {
			this.gaTrackEvent("Conversions", "Non-Branded", "Any", null, 1);
			var z = this.readCookie('__utmz')||'';
				if (z.has('=cp') || z.has('=CP'))
					this.gaTrackEvent("Conversions", "Non-Branded", "Paid Search", null, 1);
		}
		
		if (home && !h.has(this.branded.home))
			this.gaTrackEvent("Conversions", "Non-Branded", "Home", null, 1);
			
		if (this.site == 'Welchol') {
			
			if (p.has('/about-cholesterol'))
				this.gaTrackEvent("Conversions", "Non-Branded", "Any Cholesterol Page", null, 1);
			
			if (p.has('/about-type-2-diabetes'))
				this.gaTrackEvent("Conversions", "Non-Branded", "Any Diabetes Page", null, 1);
		}
		else {
			/* HTN Consumer */
			if (p.has('about_high_blood_pressure.html'))
				this.gaTrackEvent("Conversions", "Non-Branded", "About HBP", null, 1);
				
			if (p.search(/about_high|\/understanding|\/know_the_risk/) > -1)
				this.gaTrackEvent("Conversions", "Non-Branded", "Any BP Page", null, 1);
			
		}
		//alert('init');
	}
	
	/* store non-branded page if not newly converted */
	if (!branded && !h.has(p) && (h.length != 1 || h[0] != '1'))
		h.push(p);
	
	this.writeCookie('ir_tb', h.join('::'), 30);
}

gaTrack.prototype.gaTrackVideo = function() {
	
	this.videoplays = [];
	this.videoends = [];
	
	var video = document.getElementsByTagName("video");
	
	for (var v = 0; v < video.length; v++) {
	
		if (!exists(video[v].canPlayType))
			continue;
		
		var poster = video[v].getAttribute("poster");
		poster = video[v].getAttribute("name")?video[v].getAttribute("name"):poster;
		
		var url = '';
		
		for (var ch = 0; ch < video[v].childNodes.length; ch++)
			if (
			exists(video[v].childNodes[ch].getAttribute)
			&& exists(video[v].childNodes[ch].getAttribute("src")))
				url = video[v].childNodes[ch].getAttribute("src");
		
		var videoStart = (function(url, poster) {
					return function() { 
						if (!_taq.videoplays.has(url)) {
							_taq.gaTrackEvent("Video Plays", poster, url);
							_taq.videoplays.push(url);
						}
					}
				})(url, poster);
		
		var videoEnd = (function(url, poster) {
					return function() { 
						if (!_taq.videoends.has(url)) {
							_taq.gaTrackEvent("Video Completed", poster, url);
							_taq.videoends.push(url);
						}
					}
				})(url, poster);
		
		video[v].addEventListener("play", videoStart, false);
		video[v].addEventListener("ended", videoEnd, false);
	}
}

/* call this function directly to track any conversion events */
gaTrack.prototype.gaTrackGoal = function(goalname, goalstep) { 
	this.gaTrackEvent("Conversions", goalname, goalstep)
}

gaTrack.prototype.gaTrackEvent = function(category, action, label, value, nonint) {
	
	ga('send', {
	  'hitType': 'event',
	  'eventCategory': category,
	  'eventAction': action,
	  'eventLabel': label,
	  'eventValue': value,
	  'nonInteraction': 1
	});
	
	if (this.secondary)
		ga('sec.send', {
		  'hitType': 'event',
		  'eventCategory': category,
		  'eventAction': action,
		  'eventLabel': label,
		  'eventValue': value,
		  'nonInteraction': 1
		});
}

/* the page load call */
gaTrack.prototype.gaTrackPage = function() {

	this.gaShimCookie();
	
	ga('create', this.account, 'auto', { 'allowLinker': true });
	ga('require', 'linker');
	ga('send', 'pageview');

	if (this.secondary) {
		ga('create', this.secondary, 'auto', { 'name': 'sec', 'allowLinker': true });
		ga('require', 'linker');
		ga('sec.send', 'pageview');
	}

	this.gaTrackBranded();
	this.GA = {};
}

/* utility functions */
function param(A) {
  A = A.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + A + "=([^&# ]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  return (results == null)?"":decodeURIComponent(results[1].replace(/\+/g, " "));
}

function exists(A) { return (typeof A != 'undefined') }

String.prototype.has = function(A) { return (this.indexOf(A) != -1) }

Array.prototype.has = function(A) {
	if (A instanceof Array) {
		for (var i = 0; i < this.length; i++) {
			for (var I = 0; I < A.length; I++) {
				if (this[i] == A[I])
					return 1;
			}
		}
	}
	else {
		for (var i = 0; i < this.length; i++)
			if (this[i] == A)
				return 1;
	}
	return 0;
}

var JSON = JSON || {};
JSON.stringify = JSON.stringify || function (obj) {
	var t = typeof (obj);
	if (t != "object" || obj === null) {
		if (t == "string") obj = '"'+obj+'"';
		return String(obj);
	}
	else {
		var n, v, json = [], arr = (obj && obj.constructor == Array);
		for (n in obj) {
			v = obj[n]; t = typeof(v);
			if (t == "string") v = '"'+v+'"';
			else if (t == "object" && v !== null) v = JSON.stringify(v);
			json.push((arr ? "" : '"' + n + '":') + String(v));
		}
		return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
	}
};

stringify = function(A) {
	var cache = [];
	var val = JSON.stringify(A, function(k, v) {
	    if (typeof v === 'object' && v !== null) {
	        if (cache.indexOf(v) !== -1)
	            return;
	        cache.push(v);
	    }
	    return v;
    });
    return val;
}

var tag = "<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');</script>";

if (typeof $ != 'undefined' && $.fn && $.fn.append)
	$('head').append(tag);
else
	document.write(tag);

var _taq = new gaTrack();
_taq.gaTrackPage();
_taq.gaAdv(); /* activate listeners */
