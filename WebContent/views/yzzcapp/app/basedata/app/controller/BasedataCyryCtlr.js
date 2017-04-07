Ext.define('Basedata.controller.BasedataCyryCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.BasedataCyryCtlr',
	views : [ 'BasedataCyryView' ],
	refs : [ {
		ref : 'DeptGridpanel',
		selector : 'BasedataCyryView gridpanel[itemId=DeptGridpanel]'
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
			"BasedataCyryView  treepanel[itemId=DeptTreepanel]" : {
				itemclick : this.onDeptTreepanelItemClick
			}
		});
	}
});