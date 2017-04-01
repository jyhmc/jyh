Ext.define('System.store.RoleMenuTreeStore', {
	extend : 'Ext.data.TreeStore',
	alias : 'store.RoleMenuTreeStore',
	requires : [ 'System.model.RoleMenuTreeModel', 'Ext.data.proxy.Ajax',
			'Ext.data.reader.Json' ],
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([ Ext.apply({
			model : 'System.model.RoleMenuTreeModel',
			proxy : {
				type : 'ajax',
				url : __ctxPath + '/sys/roleMenu'
			}
		}, cfg) ]);
	}
});