Ext.define('System.view.SystemRoleEditWin', {
	extend : 'yzzc.core.CEWindow',
	alias : 'widget.SystemRoleEditWin',
	title : '角色修改',
	height : 250,
	width:600,
	autoSubmit : true,
	url : __ctxPath + "/sys/roleEdit",
	form : [ {
		fieldLabel : MustVal("角色id", true),
		name : "id",
		itemId : "RoleEditroleid",
		blankText : "不能为空",
		hidden:true,
		maxLengthText : "输入超过最大长度",
		allowBlank : false,
		maxLength : 20
	}, {
		fieldLabel : MustVal("角色名称", true),
		name : "rolename",
		itemId : "RoleEditrolename",
		blankText : "不能为空",
		allowBlank : false,
		maxLengthText : "输入超过最大长度",
		maxLength : 30
	}, {
		xtype : 'textarea',
		fieldLabel : MustVal("備註", false),
		name : "remark",
		maxLengthText : "输入超过最大长度",
		maxLength : 100
	} ]
})