Ext.define('System.model.DeptTreeModel', {
	extend : 'Ext.data.Model',
	alias : 'model.DeptTreeModel',
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
	}]
});