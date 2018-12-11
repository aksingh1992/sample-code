<nav class="${nav_css_class} navbar site-navigation" id="navigation" role="navigation">
	<div class="navbar-inner">
		<div class="collapse nav-collapse">
			<ul aria-label="#language ("site-pages")" class="nav nav-collapse full" role="menubar">
				<#list nav_items as nav_item>
					<#assign
						nav_item_attr_selected=""
						nav_item_attr_has_popup=""
						nav_item_caret=""
						nav_item_css_class="lfr-nav-item"
						nav_item_link_css_class=""
						nav_item_layout = nav_item.getLayout()
					/>
					<#if nav_item.isSelected()>
						<#assign
							nav_item_attr_selected="aria-selected='true'"
							nav_item_css_class="${nav_item_css_class} selected active"
						/>
					</#if>
					<#if nav_item.hasChildren()>
						<#assign
							nav_item_attr_has_popup="aria-haspopup='true'"
							nav_item_caret='<span class="lfr-nav-child-toggle"><i class="icon-caret-down"></i></span>'
							nav_item_css_class="${nav_item_css_class} dropdown"
							nav_item_link_css_class="dropdown-toggle"
						/>
					</#if>
				
					<li class="${nav_item_css_class}" id="layout_${nav_item.getLayoutId()}" ${nav_item_attr_selected} role="presentation">
						<a aria-labelledby="layout_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} class="${nav_item_link_css_class}" href="${nav_item.getURL()}" ${nav_item.getTarget()} role="menuitem">
							<span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()} ${nav_item_caret}</span>
						</a>

						<#if nav_item.hasChildren()>
							<ul class="welchol-dropdown-menu dropdown-menu child-menu" role="menu">
								<#list nav_item.getChildren() as nav_child>
									<#assign
										nav_child_attr_selected=""
										nav_child_css_class="lfr-nav-item"
									/>
									<#if nav_item.isSelected()>
										<#assign
											nav_child_attr_selected = "aria-selected='true'"
											nav_child_css_class = "selected"
										/>
									</#if>

									<li class="${nav_child_css_class}" id="layout_$nav_child.getLayoutId()" ${nav_child_attr_selected} role="presentation">
										<a aria-labelledby="layout_${nav_child.getLayoutId()}" href="${nav_child.getURL()}" ${nav_child.getTarget()} role="menuitem">${nav_child.getName()}</a>
									</li>
								</#list>
							</ul>
						</#if>
					</li>
				</#list>
			</ul>
		</div>
	</div>
</nav>

<script>
	Liferay.Data.NAV_LIST_SELECTOR = '.navbar-inner .nav-collapse > ul';
</script>

