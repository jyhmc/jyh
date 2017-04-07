Ext.define('Basedata.controller.BasedataYsqyCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.BasedataYsqyCtlr',
	views : [ 'BasedataYsqyView' ],
	refs : [ {
		ref : 'DeptGridpanel',
		selector : 'SystemDeptView gridpanel[itemId=DeptGridpanel]'
	} ],

	onDeptTreepanelItemClick : function(is, record, item, index, e, eOpts) {
		var me = this;
		var store = me.getDeptGridpanel().getStore();
		var node = record.data.id;
		store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				'node' : node
			});
		});
		store.loadPage(1);
	},

	init : function(application) {
		this.control({
			"SystemDeptView  treepanel[itemId=DeptTreepanel]" : {
				itemclick : this.onDeptTreepanelItemClick
			}
		});
	}
});