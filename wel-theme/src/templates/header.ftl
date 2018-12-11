<header id="banner" role="banner">
	<div id="heading" class="logoMarginTop">
		<a class="${logo_css_class}" href="${site_default_url}">
			<img alt="Welchol® (colesevelam HCI) Logo" src="${images_folder}/logo.png" class="logosize">
		</a>
	</div>
	<div  class="toplinks">
		<ul>
			<li class="small"><a class="isiLink">Important Safety Information</a></li>
			<li class="last small">	<a href="https://www.google.co.in/" target="_blank">Google Site</a></li>
			
		</ul>
	</div>
	<div class="desktopNav">	
		<#if has_navigation || is_signed_in>
			<#include "${full_templates_path}/navigation.ftl" />
		</#if>
	</div>
	<div class="MobileNav">
		<div class="container">
			<span id="_145_dockbarResponsiveButton">
			<a tabindex="0" data-navid="_145_navSiteNavigation" id="_145_navSiteNavigationNavbarBtn" class="btn btn-navbar open"><i class="icon-reorder"></i></a><a tabindex="0" data-navid="_145_navAccountControls" id="_145_navAccountControlsNavbarBtn" class="btn btn-navbar"><i class="icon-user"></i></a>
		   </span>

		   <span id="_145_dockbarbodyContent">
	   </div>
		<#include "${full_templates_path}/navigation2.ftl" /></div>
	
	<div class="CloseMoveRight"><a href="javascript:void(0)" class="icon-reorder"></a></div>	
	<div class="siteIntend">This site is intended for US Healthcare professionals.</div>
</header>