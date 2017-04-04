Ext.define('System.store.MenuTreeByRoleStore', {
	extend : 'Ext.data.TreeStore',
	alias : 'store.MenuTreeByRoleStore',
	requires : [ 'System.model.MenuTreeModel', 'Ext.data.proxy.Ajax',
			'Ext.data.reader.Json' ],
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([ Ext.apply({
			autoLoad : false,
			model : 'System.model.MenuTreeModel',
			defaultRootId : 0,
		    root : {
				text : '功能权限',
			    expanded : false
			},
			proxy : {
				type : 'ajax',
				url : __ctxPath + '/sys/selectMenuByRole',
				reader : {
					type : 'json',
					root : 'result'
				}
			}
		}, cfg) ]);
	}
});