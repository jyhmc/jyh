Ext.define('System.view.SystemUserRoleWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.SystemUserRoleWin',
	itemId : 'SystemUserRoleWin',
	title : '角色列表',
	modal : true,
	height : 450,
	width : 400,
	layout : {
		type : 'fit'
	},
	initComponent : function() {
		var me = this;
		var gridStore = Ext.create('System.store.RoleGridStore');
		Ext.applyIf(me, {
			buttonAlign : 'center',
			buttons : [ {
				xtype : 'button',
				itemId : 'SubmitRoleBtn',
				text : '完成'
			}, {
				xtype : 'button',
				itemId : 'CancelRoleBtn',
				text : '取消'
			} ],
			items : [
				{
					xtype : 'displayfield',
					flex : 1,
					itemId : 'SysUserRoleUserid',
					height : 30,
					hidden:true,
					maxHeight : 30,
					fieldLabel : 'userid',
					labelAlign : 'right',
					width : 250,
					labelWidth : 60
				},
				{
				xtype : 'gridpanel',
				flex : 1,
				itemId : 'sysUserRoleGrid',
				store : gridStore,
				selType : 'checkboxmodel',
				columns : [ {
					text : '序号',
					flex : 1,
					xtype : 'rownumberer',
					dataIndex : 'string'
				}, {
					text : "角色ID",
					dataIndex : "id",
					flex : 1,
					hideable : false,
					hidden : true
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'rolename',
					flex : 1,
					text : '角色名'
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'remark',
					flex : 3,
					text : '角色备注'
				} ],
				viewConfig : {

				},
				dockedItems : [ {/*
					xtype : 'pagingtoolbar',
					dock : 'bottom',
					width : 360,
					displayInfo : true,
					beforePageText : '第',
					afterPageText : '页，共{0}页',
					displayMsg : "当前显示从{0}至{1}，共{2}条记录",
					emptyMsg : '当前没有记录',
					store : gridStore
				*/} ]
			  }
			]
		});
		me.callParent(arguments);
	}

});