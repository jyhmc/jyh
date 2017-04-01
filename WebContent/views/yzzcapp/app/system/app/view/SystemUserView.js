Ext.define('System.view.SystemUserView', {
	extend : 'Ext.container.Container',
	alias : 'widget.SystemUserView',
	width : '100%',
	height : '100%',
	region : 'center',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		var me = this;
		var treestore = Ext.create("System.store.DeptTreeStore");
		var gridstore = Ext.create("System.store.UserGridStore");
		Ext.applyIf(me, {
			items : [ {
				xtype : 'panel',
				region : 'north',
				title : '当前位置：&nbsp;系統管理&nbsp;&gt;&nbsp;用户管理'
			}, {
				xtype : 'container',
				region : 'center',
				layout : 'fit',
				itemId : 'SystemUserViewContainer',
				items : [ {
					xtype : 'container',
					layout : 'border',
					itemId : 'BaseContainer',
					items : [ {
						xtype : 'container',
						region : 'west',
						width : 300,
						layout : 'border',
						items : [ {
							xtype : 'treepanel',
							region : 'center',
							rootVisible : false,
							itemId : 'DeptTreepanel',
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
							itemId : 'UserGridpanel',
							store : gridstore,
							columns : [ {
								xtype : 'rownumberer',
								align : 'left',
								minWidth : 50,
								text : '序号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'userid',
								flex : 1,
								hidden : true,
								align : 'left',
								text : 'id'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'username',
								flex : 1,
								text : '登录名'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'deptid',
								flex : 1,
								align : 'left',
								hidden : true,
								text : '组织机构'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'dogid',
								flex : 1,
								hidden : true,
								text : '加密狗'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'picture',
								flex : 1,
								hidden : true,
								align : 'left',
								text : '头像'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'name',
								flex : 1,
								text : '姓名'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'age',
								flex : 1,
								align : 'left',
								text : '年龄'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'sex',
								flex : 1,
								text : '性别'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'position',
								flex : 1,
								align : 'left',
								text : '职位'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'phone',
								flex : 1,
								text : '联系电话'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'education',
								flex : 1,
								align : 'left',
								text : '学历'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'workyears',
								flex : 1,
								text : '从业年限'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'certificates',
								flex : 1,
								text : '执法资格证号'
							} ],
							dockedItems : [ {
								xtype : 'toolbar',
								dock : 'top',
								//ui: 'footer',
								//defaults: {minWidth: minButtonWidth},
								items : [ {
									xtype : 'button',
									text : '新   增',
									itemId : 'SysUserAdd'
								}, {
									xtype : 'button',
									text : '修   改',
									itemId : 'SysUserEdit'
								}, {
									xtype : 'button',
									text : '删   除',
									itemId : 'SysUserDel'
								}, {
									xtype : 'button',
									text : '刷   新',
									itemId : 'SysUserRef'
								}, {
									xtype : 'button',
									text : '人員展示',
									itemId : 'SysUserShow'
								}, {
									xtype : 'button',
									text : '分配角色',
									itemId : 'SysUserRole'
								} , {
									xtype : 'button',
									text : '密码重置',
									hidden:true,
									itemId : 'SysUserResetPassword'
								} ]
							}, {
								xtype : 'pagingtoolbar',
								itemId : 'UserGridPagingBar',
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