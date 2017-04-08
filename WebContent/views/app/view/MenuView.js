Ext.define('yzzc.view.MenuView', {
	extend : 'Ext.panel.Panel',
	//alias : 'widget.MenuView',
	initComponent : function() {
		Ext.apply(this, {
			id : 'mainMenutop',
			region : 'west',
			collapsible : true,
			title : '功能菜单',
			split : true,
			width : 230,
			layout : {
				  titleCollapse : true, 
				  animate : true,
				  activeOnTop : true,
				  type : 'accordion'
			},
			items : []

		});
		this.callParent(arguments);
	}
});
