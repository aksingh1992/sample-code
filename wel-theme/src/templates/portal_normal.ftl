<!DOCTYPE html>

<#include init />

<html class="${root_css_class} welchol-hcp" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">	
		<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" /> 
		<title>${the_title}</title>
		<!--<script type="text/javascript" src="${javascript_folder}/v1.9j_Welchol_HCP_PROD_gaTrack.js"></script>-->
		
		<@liferay_util["include"] page=top_head_include />
	
		
</head>

<body class="${css_class}">
<@liferay_util["include"] page=body_top_include />		
<#if is_signed_in && permissionChecker.isOmniadmin()>
	<@liferay.control_menu />
</#if>

	<div class="mobile-header"></div>	
	<div id="bannerImg">
			<div class="navBackTransparent"></div>
		<div class="headerbg"> 
			<div class="container-fluid" id="wrapper"> 
								
				<#include "${full_templates_path}/header.ftl" />
		
				
				 <!-- Banner content -->
						 
				<div id="content">
										
				<#if selectable>
					<@liferay_util["include"] page=content_include />
				<#else>
					${portletDisplay.recycle()}

					${portletDisplay.setTitle(the_title)}

					<@liferay_theme["wrap-portlet"] page="portlet.ftl">
						<@liferay_util["include"] page=content_include />
					</@>
				</#if>
					
				</div>
				
				<#include "${full_templates_path}/footer.ftl" />
			</div>
		</div>
	</div>
	
<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />

<#include "${full_templates_path}/double_click_tags.ftl" />
		
</body>

</html>