Ext.define('Basedata.controller.BasedataYyclCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.BasedataYyclCtlr',
	views : [ 'BasedataYyclView' ],
	refs : [ {
		ref : 'YyclGridpanel',
		selector : 'BasedataYyclView gridpanel[itemId=YyclGridpanel]'
	}, {
		ref : 'Yyclcphm',
		selector : 'BasedataYyclView textfield[itemId=cphm]'
	}, {
		ref : 'Yyclyyzh',
		selector : 'BasedataYyclView textfield[itemId=yyzh]'
	} , {
		ref : 'Yycldlysz',
		selector : 'BasedataYyclView textfield[itemId=dlysz]'
	}  ],

	onDeptTreepanelItemClick : function(is, record, item, index, e, eOpts) {
		var me = this;
		var store = me.getYyclGridpanel().getStore();
		var node = record.data.id;
		store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				'node' : node
			});
		});
		store.loadPage(1);
	},

	
	onYyclSerchBtnClick : function() {
		var me = this;
		var store = me.getYyclGridpanel().getStore();
	    var	cphm= me.getYyclcphm().reset(); 
		var yyzh= me.getYyclyyzh().reset(); 
		var dlysz= me.getYycldlysz().reset(); 
		store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				cphm : cphm,
				yyzh : yyzh,
				dlysz : dlysz
			});
		});
		store.loadPage(1);
	},
	
	onYyclRestBtnClick : function() {
		 var me = this;
		 me.getYyclcphm().reset(); 
		 me.getYyclyyzh().reset(); 
		 me.getYycldlysz().reset(); 
	},
	
	
	init : function(application) {
		this.control({
			"BasedataYyclView  treepanel[itemId=DeptTreepanel]" : {
				itemclick : this.onDeptTreepanelItemClick
			},
		    "BasedataYyclView  button[itemId=YyclSerch]" : {
				click : this.onYyclSerchBtnClick
			},
			"BasedataYyclView  button[itemId=YyclRest]" : {
				click : this.onYyclRestBtnClick
			}
		});
	}
});