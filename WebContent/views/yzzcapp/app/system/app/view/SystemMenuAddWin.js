Ext.define('System.view.SystemMenuAddWin', {
			extend : 'yzzc.core.CEWindow',
			alias : 'widget.SystemMenuAddWin',
			title : '权限新增',
			width:620,
			height : 400,
      		autoSubmit:true,
			url : __ctxPath + "/sys/menuAdd",
			form : [ {
						fieldLabel : MustVal("父节点", true),
						name : "pid",
						itemId : "MenuAddPid",
						hidden:true,
						allowBlank : false,
						readOnly : true
					},{
						fieldLabel : MustVal("父節點名称", true),
						name : "pname",
						itemId : "MenuAddPname",
						allowBlank : false,
						readOnly : true
					},{
						fieldLabel : MustVal("名称", true),
						name : "text",
						allowBlank : false
					}, {
						fieldLabel : MustVal("类型", true),
						xtype : "combo",
						mode : "local",
						allowBlank : false,
						editable : false,
						// value : "0",
						triggerAction : "all",
						store : [["0", "菜單"], ["1", "按鈕"]],
						name : "type",
						blankText : "不能为空",
						allowBlank : false
					}, {
						fieldLabel : MustVal("地址", false),
						name : "url",
						maxLengthText : "输入超过最大长度",
						maxLength : 50
					},{
						fieldLabel : MustVal("排序", false),
						name : "orders",
						maxLengthText : "输入超过最大长度",
						maxLength : 20
					}, {
						xtype : 'textarea',
						fieldLabel : MustVal("备注", false),
						name : "remark",
						maxLengthText : "输入超过最大长度",
						maxLength : 100
					}]
		})