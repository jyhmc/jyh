Ext.define('System.model.DemoModel', {
	extend : 'Ext.data.Model',
	alias : 'model.DemoModel',
	requires : [ 'Ext.data.Field' ],
	idProperty : 'taskId',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'age',
		type : 'int'
	} ]
});