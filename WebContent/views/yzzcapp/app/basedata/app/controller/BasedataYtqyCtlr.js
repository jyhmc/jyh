Ext.define('Basedata.controller.BasedataYtqyCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.BasedataYtqyCtlr',
	views : [ 'BasedataYtqyView' ],
	refs : [ {
		ref : 'DeptGridpanel',
		selector : 'BasedataYtqyView gridpanel[itemId=DeptGridpanel]'
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
			"BasedataYtqyView  treepanel[itemId=DeptTreepanel]" : {
				itemclick : this.onDeptTreepanelItemClick
			}
		});
	}
});