Ext.define('Basedata.controller.BasedataYyclCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.BasedataYyclCtlr',
	views : [ 'BasedataYyclView' ],
	refs : [ {
		ref : 'DeptGridpanel',
		selector : 'BasedataYyclView gridpanel[itemId=DeptGridpanel]'
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
			"BasedataYyclView  treepanel[itemId=DeptTreepanel]" : {
				itemclick : this.onDeptTreepanelItemClick
			}
		});
	}
});