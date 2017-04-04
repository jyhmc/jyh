Ext.ns("App");
// Ext.require("Ext.JSON");
var PortalItem = function(a, b, c) {
	this.panelId = a;
	this.column = b;
	this.row = c;
};
var UserInfo = function( n, a, c, f, e) {

	this.userId = n;
	this.fullname = a;
	this.deptId = c;
	this.depName = f;
	this.rights = e||[];

};
var curUserInfo = null;
function isGranted(a) {
	/*if (curUserInfo.rights[0] == "__ALL") {
		return true;
	}*/
	for(var i = 0; i < curUserInfo.rights.length; i++){
		var right = curUserInfo.rights[i];
		if(right === a){
			return true;
		}
	}
	return false;
}
App.init = function() {
//	Ext.QuickTips.init();
//	Ext.BLANK_IMAGE_URL = __ctxPath + "/images/default/s.gif";
//	setTimeout(function() {
//				Ext.get("loading").remove();
//				Ext.get("loading-mask").fadeOut({
//							remove : true
//						});
//			}, 1000);
};

App.Logout = function() {
	Ext.Ajax.request({
				url : __ctxPath + "/logout.do",
				success : function() {
					window.location.href = __ctxPath + "/login.jsp";
				}
			});
};
App.OnLogout = function() {
	var n = window.event.screenX - window.screenLeft;
	var b = n > document.documentElement.scrollWidth - 20;
	if (b && window.event.clientY < 0 || window.event.altKey) {
		App.Logout();
	}
};
Ext.onReady(function() {
//	if(!!debug){
//		alert('增加请求过滤');
//	}
//	Ext.require(['Ext.util.Observable', 'Ext.data.Connection'], function() {
//			Ext.data.Connection.on("requestcomplete", function(c, d, b) {
//						if (d && d.getResponseHeader) {
//							var reg = new RegExp(
//									"Messages[\\s\\S]*?<li>([\\s\\S]*?)</li>",
//									"gi");
//							var array = reg.exec(d.responseText);
//							if (array && array.length > 1) {
//								Ext.Msg.alert("提示", array[1])
//							}
//							if (d.getResponseHeader("__forbidden")) {
//								Ext.ux.Toast.msg("系统访问权限提示：", "你目前没有权限访问：{0}",
//										b.url);
//							}
//						}
//					});
//		});
			App.init();
		});