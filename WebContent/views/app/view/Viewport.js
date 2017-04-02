/**
 * 主界面，由四塊組成
 */
Ext.define('yzzc.view.Viewport', {
	extend : 'Ext.container.Viewport',
	layout : 'fit',
	hideBorders : true,
	requires : [ 'Ext.layout.container.Border',
			'Ext.layout.container.Absolute', 'yzzc.view.MenuView',
			'yzzc.view.CenterView', 'yzzc.view.SouthView',
			'yzzc.view.NorthView' ],
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
			renderTo : Ext.getBody(),
			items : [ {
				id : 'desk',
				layout : 'border',
				items : [ Ext.create('yzzc.view.MenuView'),
						Ext.create('yzzc.view.CenterView'),
						Ext.create('yzzc.view.NorthView'),
						Ext.create('yzzc.view.SouthView') ]
			} ]
		});
		me.callParent(arguments);
	}
})
