AUI().ready(

	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {
	}
);

Liferay.Portlet.ready(

	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(portletId, node) {
	}
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {
	}
);

	AUI().ready(
		'liferay-hudcrumbs', 'liferay-navigation-interaction', 'liferay-sign-in-modal',
		function(A) {
			var navigation = A.one('#navigation');
			if (navigation) {
				navigation.plug(Liferay.NavigationInteraction);
			}
	
			var siteBreadcrumbs = A.one('#breadcrumbs');
			if (siteBreadcrumbs) {
				siteBreadcrumbs.plug(A.Hudcrumbs);
			}
	
			var signIn = A.one('li.sign-in a');
			if (signIn && signIn.getData('redirect') !== 'true') {
				signIn.plug(Liferay.SignInModal);
			}
		}
	);	
	
	$(".nav-collapse").hover(function() {
		$(".welchol-dropdown-menu").show();
		$(".navBackTransparent").css('display','block');
		$('.innerHeading h1').addClass('bgBlur');
	}, function() {
		$(".welchol-dropdown-menu").hide();
		$(".navBackTransparent").css('display','none');
		$('.innerHeading h1').removeClass('bgBlur');
	});
	
	$(".navBackTransparent").hover(function() {
		$(".welchol-dropdown-menu").show();
		$(".navBackTransparent").css('display','block');
		$('.innerHeading h1').addClass('bgBlur');
	}, function() {
		$(".welchol-dropdown-menu").hide();
		$(".navBackTransparent").css('display','none');
		$('.innerHeading h1').removeClass('bgBlur');
	});
	
	$(".MobileNav .container a.btn-navbar").click(function() {
		$('.MobileNav .mobilenav').addClass('open');
	/* $(".btn-navbar .icon-reorder").click(function(event){
		$('.MobileNav nav').addClass('open'); */
		$('#_145_navSiteNavigationNavbarBtn').css('display','none');
		$(".CloseMoveRight").addClass('CloseMoveRightOpen');
		$(".mobile-header").addClass('PageMoveRight');
		$(".herotextcontainer").addClass('PageMoveRight');
		$("#content").addClass('PageMoveRight');
		$("#heading").addClass('PageMoveRight');
		$(".ctaMobileLink").addClass('PageMoveRight');
		$(".footerMaster").addClass('PageMoveRight');
		$("#isi-container").addClass('PageMoveRight');
		$("#menuUpImg").addClass('PageMoveRight');
		
		event.stopPropagation();
		$('#wrapper').bind('click', function (e) {
			var target = $( e.target )
			 if($('.MobileNav .navbar').hasClass('open')){
				 if($(target).parents('.MobileNav').length == 0) {
					CloseSidebarNav();
				 }
			 }
		});	
	});
	
	function CloseSidebarNav(){
		$('.MobileNav nav').removeClass('open');
		$('#_145_navSiteNavigationNavbarBtn').css('display','block');
		$('.CloseMoveRight').removeClass('CloseMoveRightOpen');
		$('.herotextcontainer').removeClass('PageMoveRight');
		$(".mobile-header").removeClass('PageMoveRight');
		$("#content").removeClass('PageMoveRight');
		$("#heading").removeClass('PageMoveRight');
		$(".ctaMobileLink").removeClass('PageMoveRight');
		$(".footerMaster").removeClass('PageMoveRight');
		$("#isi-container").removeClass('PageMoveRight');
		$("#menuUpImg").removeClass('PageMoveRight');
		$('#wrapper').unbind('click');
	}
	
	$(".CloseMoveRight").click(function(){
		CloseSidebarNav();
	});
	$(".InnerLink").click(function(){
		CloseSidebarNav();
	});
	
	$( document ).ready(function() {
		function updatePageTitle(){
			var pageTitle=document.title;
		    if (pageTitle.indexOf('&amp;') >= 0) {
		          document.title = pageTitle.replace("&amp;", "&");
		    }
		}
		updatePageTitle();
		$(".j-unmodal-close").click(function(){
			$('.sharelinks').css('position','relative');
		});
		
		$("#evokeModalDialogGrayout").click(function(){
			$('.sharelinks').css('position','relative');
		});
		
		$('#sharePanel').each(function(){
			if ( $(this).css('display') == 'none')
			{
			   $('.sharelinks').css('position','relative');
			}
		});
		
		$(".mobilenav ul > li > a").click(function(){
			CloseSidebarNav();
		});
		
		$(".mobilenav ul > li.dropdown").hover(
			function() {
			  $(this).addClass("icon-chevron-up");
			  $(this).addClass("open");
			  $(this).removeClass("icon-chevron-down");
			},
			function() {
			  $(this).removeClass("icon-chevron-up");
			  $(this).removeClass("open");
			  $(this).addClass("icon-chevron-down");
			}
		);
			
		$(".sharethispage").click(function(){
			$('.sharelinks').css('position','initial');
		});
		// below function related to iPad double tab Issue
		$('.MobileNav .doubleTab a').on('touchstart touchend', function() {
			var linkToAffect = $(this);
			var linkToAffectHref = linkToAffect.attr('href');
			window.location = linkToAffectHref;
		});
/*Tabbing JS start here*/		
		
		
		$(".tabs .block_2:first-child()").addClass("selected");
		$(".tabs .block_3:first-child()").addClass("selected");
		$('.tabcontents #view2').css('display', 'none');	
		$('.tabcontents #view3').css('display', 'none');

		$(".tabs .block_2:nth-child(1) a").on('click',function(){

		  $(".tabcontents #view2").hide();
		  $(".tabcontents #view1").show();
		  $(".tabs .block_2:nth-child(1)").addClass("selected");
		  $(".tabs .block_2:nth-child(2)").removeClass("selected");
		});
		$(".tabs .block_2:nth-child(2) a").on('click',function(){

		  $(".tabcontents #view1").hide();
		  $(".tabcontents #view2").show();
		  $(".tabs .block_2:nth-child(2)").addClass("selected");
		  $(".tabs .block_2:nth-child(1)").removeClass("selected");
		});
		
		$(".tabs .block_3:nth-child(1) a").on('click',function(){
		  $(".tabcontents #view1").show();
		  $(".tabcontents #view3").hide();
		  $(".tabcontents #view2").hide();
		  $(".tabs .block_3:nth-child(1)").addClass("selected");
		  $(".tabs .block_3:nth-child(2)").removeClass("selected");
		  $(".tabs .block_3:nth-child(3)").removeClass("selected");
		});
		$(".tabs .block_3:nth-child(2) a").on('click',function(){
		  $(".tabcontents #view1").hide();
		  $(".tabcontents #view2").show();
		  $(".tabcontents #view3").hide();
		  $(".tabs .block_3:nth-child(2)").addClass("selected");
		  $(".tabs .block_3:nth-child(1)").removeClass("selected");
		  $(".tabs .block_3:nth-child(3)").removeClass("selected");
		});
		$(".tabs .block_3:nth-child(3) a").on('click',function(){
		  $(".tabcontents #view1").hide();
		  $(".tabcontents #view2").hide();
		  $(".tabcontents #view3").show();
		  $(".tabs .block_3:nth-child(3)").addClass("selected");
		  $(".tabs .block_3:nth-child(1)").removeClass("selected");
		  $(".tabs .block_3:nth-child(2)").removeClass("selected");
		});
		
	/*Tabbing JS End here*/		

		$(".isiLink").on('click',function() {
			$('html, body').animate({
				scrollTop: $("#isi-container").offset().top
			}, 10);
		});
		/* 
		 * ga track event code start from here
		 */
		function isBlank(obj){
		    return(!obj || $.trim(obj) === "");
		}
		
		
		/*
		* Tracking Call-Out Clicks (prominent clickable elements such as buttons throughout the site)
		* The most important clickables to tag are the ones driving users to registration.
		* First parameter is always "Call-Out Clicks".
		* Second parameter is the visible text of the clickable element.
		* Third parameter is a descriptive location of the element on the page.
		*/
		
		//NEXT (Story Navigation buttons click)
		$('.storyNavButton').click(function() {
			var category = "Next-Up Clicks";
			
			var action = $.trim($('.storyNavButton .storyNav').text());
			
			fireGaTrackEvent(category, action)			
			console.log("Category---"+category+"Action----"+action);
		});
		
		//Call-Out buttons click (Like "Learn More")
		$('.ctaButtons').click(function() {
			var category = "Call-Out Clicks";
			var action = $(this).text();
			fireGaTrackEvent(category, action);			
			console.log("Category---"+category+"Action----"+action);
		});

		function fireGaTrackEvent(category, action) {
			
			var rootPageTitle = $.trim($("#banner .navbar .nav > li.selected>a span").first().text())
			var subPageTitle = $.trim($("#banner .navbar .nav > li.selected>ul li.selected a").first().text())
			
			var description = isBlank(subPageTitle)? rootPageTitle : subPageTitle;
			_taq.gaTrackEvent(category, action, description);
		}
		/*
		 * ga track event code end here
		 */
	});
	
// $(document).ready(function(){
// $(".MobileNav .nav.nav-collapse li:nth-child(2) a").attr("href","javascript:void(0);");
// $(document).on('focus', '.MobileNav .nav.nav-collapse li:nth-child(2) a', function(event){
	// alert('hi');
	// window.open("http://dsi.com/prescribing-information-portlet/getDocument?product=WC&inline=true");
	// return false;
// });
// });
/*
window.onload = function() {
$(".MobileNav .nav.nav-collapse li:nth-child(2) a").attr("href","javascript:window.open('http://dsi.com/prescribing-information-portlet/getDocument?product\x3dWC\x26inline\x3dtrue');CloseSidebarNav();");
};*/
/*
$(document).ready(function(){
  $(".MobileNav .nav.nav-collapse li:nth-child(2) a").click(function(){
     CloseSidebarNav();
    $(this).attr("href","javascript:void(0)");
    window.open("http://dsi.com/prescribing-information-portlet/getDocument?product=WC&inline=true");
	return false;
});  
});*/