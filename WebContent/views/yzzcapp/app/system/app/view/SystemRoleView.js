Ext.define('System.view.SystemRoleView', {
	extend : 'Ext.container.Container',
	alias : 'widget.SystemRoleView',
	width : '100%',
	height : '100%',
	region : 'center',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		var me = this;
		var treestore = Ext.create("System.store.MenuTreeByRoleStore");
		var gridstore = Ext.create("System.store.RoleGridStore");
		Ext.applyIf(me, {
			items : [ {
				xtype : 'panel',
				region : 'north',
				title : '当前位置：&nbsp;系統管理&nbsp;&gt;&nbsp;角色管理'
			}, {
				xtype : 'container',
				region : 'center',
				layout : 'fit',
				itemId : 'SystemRoleViewContainer',
				items : [ {
					xtype : 'container',
					layout : 'border',
					itemId : 'RoleBaseContainer',
					items : [ {
						xtype : 'container',
						region : 'east',
						width : 250,
						layout : 'border',
						items : [ {
							xtype : 'treepanel',
							region : 'center',
							rootVisible : true,
							itemId : 'RoleMenuTreepanel',
							store : treestore

						} ]
					}, {
						xtype : 'container',
						region : 'center',
						layout : 'border',
						items : [ {
							xtype : 'gridpanel',
							region : 'center',
							selType : 'checkboxmodel',
							itemId : 'RoleGridpanel',
							store : gridstore,
							columns : [ {
								xtype : 'rownumberer',
								align : 'left',
								minWidth : 50,
								text : '序号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'id',
								flex : 1,
								hidden : true,
								align : 'left',
								text : 'id'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'rolename',
								flex : 1,
								text : '角色名称'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'remark',
								flex : 1,
								align : 'left',
								text : '备注说明'
							} ],
							dockedItems : [ {
								xtype : 'toolbar',
								dock : 'top',
								// ui: 'footer',
								// defaults: {minWidth: minButtonWidth},
								items : [ {
									xtype : 'button',
									text : '新   增',
									itemId : 'SysRoleAdd'
								}, {
									xtype : 'button',
									text : '修   改',
									itemId : 'SysRoleEdit'
								}, {
									xtype : 'button',
									text : '删   除',
									itemId : 'SysRoleDel'
								}, {
									xtype : 'button',
									text : '刷   新',
									itemId : 'SysRoleRef'
								}, {
									xtype : 'button',
									text : '分配权限',
									itemId : 'SysRoleMenu'
								} ]
							}, {
								xtype : 'pagingtoolbar',
								itemId : 'RoleGridPagingBar',
								store : gridstore,
								dock : 'bottom',
								displayInfo : true
							} ]
						} ]
					} ]
				} ]
			} ]
		});
		me.callParent(arguments);
	}
});