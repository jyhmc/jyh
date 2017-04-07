Ext.define('Basedata.model.BasedataYtqyModel', {
	extend : 'Ext.data.Model',
	alias : 'model.BasedataYtqyModel',
	requires : [ 'Ext.data.Field' ],
	idProperty : 'userid',
	fields : [ {
		name : 'userid',
		type : 'int'
	}, {
		name : 'username',
		type : 'string'
	}, {
		name : 'password',
		type : 'string'
	}, {
		name : 'deptid',
		type : 'string'
	},{
		name : 'dogid',
		type : 'string'
	}, {
		name : 'picture',
		type : 'string'
	}, {
		name : 'name',
		type : 'string'
	},{
		name : 'age',
		type : 'string'
	}, {
		name : 'sex',
		type : 'string'
	}, {
		name : 'position',
		type : 'string'
	},{
		name : 'phone',
		type : 'string'
	}, {
		name : 'education',
		type : 'string'
	}, {
		name : 'workyears',
		type : 'string'
	}, {
		name : 'certificates',
		type : 'string'
	}]
});