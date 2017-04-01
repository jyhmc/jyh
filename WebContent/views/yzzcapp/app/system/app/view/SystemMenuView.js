Ext.define('System.view.SystemMenuView', {
	extend : 'Ext.container.Container',
	alias : 'widget.SystemMenuView',
	width : '100%',
	height : '100%',
	region : 'center',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		var me = this;
		var treestore = Ext.create("System.store.MenuTreeStore");
		var gridstore = Ext.create("System.store.MenuGridStore");
		Ext.applyIf(me, {
			items : [ {
				xtype : 'panel',
				region : 'north',
				title : '当前位置：&nbsp;系統管理&nbsp;&gt;&nbsp;权限管理'
			}, {
				xtype : 'container',
				region : 'center',
				layout : 'fit',
				itemId : 'SystemMenuViewContainer',
				items : [ {
					xtype : 'container',
					layout : 'border',
					itemId : 'MenuBaseContainer',
					items : [ {
						xtype : 'container',
						region : 'west',
						width : 300,
						layout : 'border',
						items : [ {
							xtype : 'treepanel',
							region : 'center',
							//rootVisible : false,
							itemId : 'MenuTreepanel',
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
							itemId : 'MenuGridpanel',
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
								dataIndex : 'text',
								flex : 1,
								text : '名称'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'pid',
								flex : 1,
								hidden:true,
								align : 'left',
								text : '父节点'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'type',
								flex : 1,
								text : '类型',
								renderer : function(value) {
									if (value == 0)
										return '菜单';
									if (value == 1)
										return '按钮';

								}
									
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'url',
								flex : 1,
								align : 'left',
								text : '地址'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'orders',
								flex : 1,
								text : '排序'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'remark',
								flex : 1,
								text : '备注'
							} ],
							dockedItems : [ {
								xtype : 'toolbar',
								dock : 'top',
								// ui: 'footer',
								// defaults: {minWidth: minButtonWidth},
								items : [ {
									xtype : 'button',
									text : '新   增',
									itemId : 'SysMenuAdd'
								}, {
									xtype : 'button',
									text : '修   改',
									itemId : 'SysMenuEdit'
								}, {
									xtype : 'button',
									text : '删   除',
									itemId : 'SysMenuDel'
								}, {
									xtype : 'button',
									text : '刷   新',
									itemId : 'SysMenuRef'
								} ]
							}, {
								xtype : 'pagingtoolbar',
								itemId : 'MenuGridPagingBar',
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