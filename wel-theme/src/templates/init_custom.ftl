<#assign css_class = "${css_class} dockbar-split"  />
<#assign pageGroupUrl  = page_group.getFriendlyURL() />
<#assign pageURL = themeDisplay.getURLCurrent() />
<#assign themeRootPath = themeDisplay.getPathThemeRoot() />
<#assign consumerSiteUrl  = "wel.com" /> 
<#if the_title ?has_content && company_name != site_name && !page_group.isLayoutPrototype()>
	<#assign the_title = layout.getHTMLTitle(locale) />
</#if>