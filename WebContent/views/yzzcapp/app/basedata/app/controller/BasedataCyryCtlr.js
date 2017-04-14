Ext.define('Basedata.controller.BasedataCyryCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.BasedataCyryCtlr',
	views : [ 'BasedataCyryView' ],
	refs : [ {
		ref : 'CyryGridpanel',
		selector : 'BasedataCyryView gridpanel[itemId=CyryGridpanel]'
	}, {
		ref : 'Cyryjsyxm',
		selector : 'BasedataCyryView textfield[itemId=jsyxm]'
	}, {
		ref : 'Cyrysfzh',
		selector : 'BasedataCyryView textfield[itemId=sfzh]'
	} , {
		ref : 'Cyryjszh',
		selector : 'BasedataCyryView textfield[itemId=jszh]'
	}   ],

	onDeptTreepanelItemClick : function(is, record, item, index, e, eOpts) {
		var me = this;
		var store = me.getCyryGridpanel().getStore();
		var node = record.data.id;
		
	/*	store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				'node' : node
			});
		});*/
	//store.loadPage(1);
		store.load({
		    params: {
		    	'node' : node
		    }});
	},
	
	
	onCyrySerchBtnClick : function() {
		var me = this;
		var store = me.getCyryGridpanel().getStore();
		store.on("beforeload", function() {
			
			Ext.apply(store.proxy.extraParams, {
				'node' : '123'
			});
		});
		store.loadPage(1);
	},
	
	onCyryRestBtnClick : function() {
		 var me = this;
		 me.getCyryjsyxm().reset(); 
		 me.getCyrysfzh().reset(); 
		 me.getCyryjszh().reset(); 
	},
	

	init : function(application) {
		this.control({
			"BasedataCyryView  treepanel[itemId=DeptTreepanel]" : {
				itemclick : this.onDeptTreepanelItemClick
			},
			"BasedataCyryView  button[itemId=CyrySerch]" : {
				click : this.onCyrySerchBtnClick
			},
			"BasedataCyryView  button[itemId=CyryRest]" : {
				click : this.onCyryRestBtnClick
			}
		});
	}
});