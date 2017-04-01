Ext.define('ManagerConfig', {

	/*
	 * 组织机构模块
	 */
	'System.controller.SystemDeptCtlr' : { 
		name : '组织机构',
		creater : 'jyh',
		path : './app/system/app',
		pathname : 'System', 
		controller : [ 'System.controller.SystemDeptCtlr' ],
		views : [ 'SystemDeptView' ]
	},

	/**
	 * 用户管理模块
	 */
	'System.controller.SystemUserCtlr' : { 
		name : '用户管理',
		creater : 'jyh',
		path : './app/system/app',
		pathname : 'System', 
		controller : [ 'System.controller.SystemUserCtlr' ],
		views : [ 'SystemUserView' ]
	},

	/**
	 * 角色管理模块
	 */
	'System.controller.SystemRoleCtlr' : { 
		name : '角色管理',
		creater : 'jyh',
		path : './app/system/app',
		pathname : 'System',
		controller : [ 'System.controller.SystemRoleCtlr' ],
		views : [ 'SystemRoleView' ]
	},

	/**
	 * 权限管理模块
	 */
	'System.controller.SystemMenuCtlr' : { 
		name : '权限管理',
		creater : 'jyh',
		path : './app/system/app',
		pathname : 'System',
		controller : [ 'System.controller.SystemMenuCtlr' ],
		views : [ 'SystemMenuView' ]
	}

});
