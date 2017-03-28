Ext.define('ManagerConfig', {
	

	'System.controller.SystemDeptCtlr' : { /*format: 应用name.controller.控制器name*/
		name : '系统管理',
		creater : 'jyh',
		path : './app/system/app',
		pathname : 'System', /*format: 应用name*/
		controller : ['System.controller.SystemDeptCtlr'],
		views : ['SystemDeptView']
	}
	
	
});
