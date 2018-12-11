<nav class="${nav_css_class} navbar site-navigation mobilenav" id="navigation" role="navigation" style="display:none">
	<div class="navbar-inner">
		<div class="collapse nav-collapse">
		<ul class="nav nav-collapse"  aria-label="<@liferay.language key="site-pages" />" role="menubar">
		
			<#if the_title == 'Home'>
						<li class="selected active doubleTab" id="#" role="presentation">
					<#else>
						<li class="doubleTab" id="#" role="presentation">
				</#if>
				
					<a data-toggle="modal" href="${site_default_url}">HOME</a>
				</li>
				
				<li class="doubleTab" id="#" role="presentation">
					<a data-toggle="modal" target="_blank" href="http://dsi.com/prescribing-information-portlet/getDocument?product=WC&inline=true">Prescribing Information</a>
				</li>
				<li class="InnerLink" id="#" role="presentation">
					<a class="isiLink">Important Safety Information</a>
				</li>
		
		<#list nav_items as nav_item>
			<#if nav_item.getName() != 'Home'>
				<#assign
					nav_item_attr_has_popup = ""
					nav_item_attr_selected = ""
					nav_item_caret =""
					nav_item_css_class="lfr-nav-item"
					nav_item_link_css_class=""
					nav_item_layout = nav_item.getLayout()
				/>

			<#if nav_item.isSelected()>
				<#assign
					nav_item_attr_has_popup = "aria-haspopup='true'"
					nav_item_attr_selected = "aria-selected='true'"
					nav_item_css_class = "${nav_item_css_class} selected active"
					
				/>
			</#if>
			
			<#if nav_item.hasChildren()>
					<#assign
						nav_item_attr_has_popup="aria-haspopup='true'"
						nav_item_caret='<span class="lfr-nav-child-toggle"><i class="icon-caret-down"></i></span>'
						nav_item_css_class="${nav_item_css_class} dropdown icon-chevron-down"
						nav_item_link_css_class="dropdown-toggle"
						
					/>
			</#if>	
				<#assign nav_item_css_class="${nav_item_css_class} doubleTab" />
		</#if>	
		
			<li ${nav_item_attr_selected} class="${nav_item_css_class}" id="layout_${nav_item.getLayoutId()}" role="presentation">
				<a aria-labelledby="layout_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} class="${nav_item_link_css_class}" href="${nav_item.getURL()}" ${nav_item.getTarget()} role="menuitem"><span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</span></a>

				<#if nav_item.hasChildren()>
					<ul class="dropdown-menu child-menu" role="menu">
						<#list nav_item.getChildren() as nav_child>
							<#assign
								nav_child_attr_selected = ""
								nav_child_css_class = "lfr-nav-item"
							/>

							<#if nav_item.isSelected()>
								<#assign
									nav_child_attr_selected = "aria-selected='true'"
									nav_child_css_class = "selected"
								/>
							</#if>

							<li ${nav_child_attr_selected} class="${nav_child_css_class}" id="layout_${nav_child.getLayoutId()}" role="presentation">
								<a aria-labelledby="layout_${nav_child.getLayoutId()}" href="${nav_child.getURL()}" ${nav_child.getTarget()} role="menuitem">${nav_child.getName()}</a>
							</li>
						</#list>
					</ul>
				</#if>
			</li>
			
		</#list>
	</ul>
		</div>
			<ul aria-label="#language ("site-pages")" class="nav external-menu" role="menubar">
			<li class="mobile-consumer-top-menu doubleTab" id="#" role="presentation">
			
				<a href="${consumerSiteUrl}" target="_blank">Go to Patient Site</a>
			</li>
		</ul>
		
	</div>
</nav>
<script>
	Liferay.Data.NAV_LIST_SELECTOR = '.navbar-inner .nav-collapse > ul';
</script>