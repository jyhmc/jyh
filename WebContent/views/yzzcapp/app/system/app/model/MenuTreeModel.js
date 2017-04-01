Ext.define('System.model.MenuTreeModel', {
	extend : 'Ext.data.Model',
	alias : 'model.MenuTreeModel',
	requires : [ 'Ext.data.Field' ],
	idProperty : 'id',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'text',
		type : 'string'
	}, {
		name : 'pid',
		type : 'int'
	}, {
		name : 'number',
		type : 'string'
	}
	]
});