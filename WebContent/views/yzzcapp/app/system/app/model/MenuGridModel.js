Ext.define('System.model.MenuGridModel', {
	extend : 'Ext.data.Model',
	alias : 'model.MenuGridModel',
	requires : [ 'Ext.data.Field' ],
	idProperty : 'id',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'text',
		type : 'string'
	}, {
		name : 'type',
		type : 'string'
	}, {
		name : 'url',
		type : 'string'
	},{
		name : 'remark',
		type : 'string'
	}, {
		name : 'orders',
		type : 'int'
	}, {
		name : 'pid',
		type : 'int'
	}]
});