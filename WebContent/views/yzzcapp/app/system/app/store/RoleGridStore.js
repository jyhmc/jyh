Ext.define('System.store.RoleGridStore', {
	extend : 'Ext.data.Store',
	alias : 'store.RoleGridStore',
	requires : [ 'System.model.RoleGridModel', 'Ext.data.proxy.Ajax',
			'Ext.data.reader.Json' ],
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([ Ext.apply({
			model : 'System.model.RoleGridModel',
			autoLoad : true,
			proxy : {
				type : 'ajax',
				url : __ctxPath + '/sys/selectRole',
				reader : {
					type : 'json',
					root : 'result'
				}
			}
		}, cfg) ]);
	}
});