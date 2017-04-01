Ext.define('System.model.RoleMenuTreeModel', {
	extend : 'Ext.data.Model',
	alias : 'model.RoleMenuTreeModel',
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
		name : 'checked',
		type : 'boolean'
	}, {
		name : 'checked',
		type : 'boolean'
	}, {
		name : 'expanded',
		type : 'boolean'
	}, {
		name : 'children'
	}, {
		name : 'leaf',
		type : 'boolean'
	}

	]
});