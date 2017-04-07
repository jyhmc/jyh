Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'images/default/s.gif';
	Ext.override(Ext.tip.Tip, {
		minWidth : 0
	})
	Manager = Ext.create('Manager');/* 主控制器 */
	Helper = 'Homepage.controller.HomepageController';// 帮助类名，全局变量
	var paths = {
		'Ext' : '../ext',
		'yzzc' : __ctxPath+'/views/app'
	}
	var cpath = __ctxPath.split('/');
	var cpathfrnt = cpath[cpath.length - 1];
	var ManagerConfig = Ext.create('ManagerConfig');/* 主控制器 */
	for ( var ctl in ManagerConfig) {
		var path = ManagerConfig[ctl].path;
		if (ManagerConfig[ctl].controller && ManagerConfig[ctl].path) {
			var nm = "paths." + ManagerConfig[ctl].pathname + '="/' + cpathfrnt
					+ '/views/yzzcapp' + path.substring(1) + '"';
			eval(nm);
		}
	}
	
	var controllers = [ 'MainCtrl' ];
	Ext.application({
		name : 'yzzc',
		paths : paths,
		launch : function() {
			Application = this;
		},
		controllers : controllers,
		autoCreateViewport : true
	});
});
