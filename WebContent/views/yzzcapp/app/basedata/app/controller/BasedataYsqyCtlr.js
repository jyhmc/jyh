Ext.define('Basedata.controller.BasedataYsqyCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.BasedataYsqyCtlr',
	views : [ 'BasedataYsqyView' ],
	refs : [ {
		ref : 'YsqyGridpanel',
		selector : 'BasedataYsqyView gridpanel[itemId=YsqyGridpanel]'
	}, {
		ref : 'Ysqyyhbh',
		selector : 'BasedataYsqyView textfield[itemId=yhbh]'
	}, {
		ref : 'Ysqyyyzh',
		selector : 'BasedataYsqyView textfield[itemId=yyzh]'
	} , {
		ref : 'Ysqyyhmc',
		selector : 'BasedataYsqyView textfield[itemId=yhmc]'
	}    ],

	onDeptTreepanelItemClick : function(is, record, item, index, e, eOpts) {
		var me = this;
		var store = me.getYsqyGridpanel().getStore();
		var node = record.data.id;
		store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				'node' : node
			});
		});
		store.loadPage(1);
	},
	
	onYsqySerchBtnClick : function() {
		var me = this;
		var store = me.getYsqyGridpanel().getStore();
		store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				'node' : '123'
			});
		});
		store.loadPage(1);
	},
	
	onYsqyRestBtnClick : function() {
		 var me = this;
		 me.getYsqyyhbh().reset(); 
		 me.getYsqyyyzh().reset(); 
		 me.getYsqyyhmc().reset(); 
	},
	

	init : function(application) {
		this.control({
			"BasedataYsqyView  treepanel[itemId=DeptTreepanel]" : {
				itemclick : this.onDeptTreepanelItemClick
			},
		    "BasedataYsqyView  button[itemId=YsqySerch]" : {
				click : this.onYsqySerchBtnClick
			},
			"BasedataYsqyView  button[itemId=YsqyRest]" : {
				click : this.onYsqyRestBtnClick
			}
		});
	}
});