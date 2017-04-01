Ext.define('System.model.RoleGridModel', {
	extend : 'Ext.data.Model',
	alias : 'model.RoleGridModel',
	requires : [ 'Ext.data.Field' ],
	idProperty : 'id',
	fields : [ {
		name : 'rolename',
		type : 'string'
	}, {
		name : 'remark',
		type : 'string'
	}, {
		name : 'id',
		type : 'int'
	} ]
});