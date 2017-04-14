Ext.define('yzzc.view.NorthView', {
	extend : 'Ext.Container',
	alias : 'widget.NorthView',
	initComponent : function() {
		Ext.apply(this, {
			id : "mainNorth",
			region : 'north',
			title : '陝西省運政治超信息管理平台',
			// html : '<h1 align="center" style=" ">陝西省運政治超信息管理平台</h1>',
			// border : false,
			/*
			 * collapsible : true, collapsed : true,
			 */
			height : 60,
			layout : 'border',
			items : [ 
				/*{
				xtype : 'image',
				region : 'west',
				src : __ctxPath + '/images/topImage.png'

			}, {
				xtype : 'textfield',
				region : 'center'

			}, {
				xtype : 'button',
				width:100,
				height:30,
				text : '退出系统',
				region : 'east'

			}*/
			]
		});
		this.callParent(arguments);
	}
})
