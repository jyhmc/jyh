Ext.define('System.view.SystemRoleAddWin', {
			extend : 'yzzc.core.CEWindow',
			alias : 'widget.SystemRoleAddWin',
			title : '角色新增',
			height:250,
			width:600,
      		autoSubmit:true,
			url : __ctxPath + "/sys/roleAdd",
			form : [{
						fieldLabel : MustVal("角色名称", true),
						name : "rolename",
						itemId : "RoleAddrolename",
						blankText : "不能为空",
						allowBlank : false,
						maxLengthText : "输入超过最大长度",
						maxLength : 30
					}, {
						xtype : 'textarea',
						fieldLabel : MustVal("備註", false),
						name : "remark",
						itemId : "RoleAddremark",
						maxLengthText : "输入超过最大长度",
						maxLength : 100
					}]
		})