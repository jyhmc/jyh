Ext.define('System.view.SystemRoleMenuView', {
	extend : 'Ext.window.Window',
	alias : 'widget.SystemRoleMenuView',
	width : 400,
	height : 550,
	modal : true,
	layout : {
		type : 'border'
	},
	title : '授权管理',
	closable : true,
	treestore:null,
	buttons : [ {
		xtype : 'button',
		itemId : 'sysRoleMenuSave',
		height : 20,
		text : '保存'
	}, {
		xtype : 'button',
		itemId : 'sysRoleMenuCancel',
		height : 20,
		text : '关闭'
	} ],
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'treepanel',
				region : 'center',
				width : 200,
				itemId : 'SysRoleMenuTreeWin',
				rootVisible : false,
				store :me.treestore, //Ext.create("System.store.RoleMenuTreeStore"),
				viewConfig : {},
				dockedItems : [ {
					xtype : 'displayfield',
					flex : 1,
					itemId : 'sysRoleMenurolename',
					height : 30,
					maxHeight : 30,
					fieldLabel : '角色名',
					labelAlign : 'right',
					width : 250,
					labelWidth : 60
				}, {
					xtype : 'displayfield',
					flex : 1,
					itemId : 'sysRoleMenuroleid',
					height : 30,
					hidden:true,
					maxHeight : 30,
					fieldLabel : '角色id',
					labelAlign : 'right',
					width : 250,
					labelWidth : 60
				}, {
					xtype : 'toolbar',
					dock : 'top',
					items : [/* {
						xtype : 'button',
						itemId : 'SysRoleMenuTreeRef',
						iconCls : 'btn-refresh',
						text : '刷新'
					}, {
						xtype : 'button',
						itemId : 'SysRoleMenuTreeExpand',
						iconCls : 'btn-expand',
						text : '展开'
					}, {
						xtype : 'button',
						itemId : 'SysRoleMenuTreeColls',
						iconCls : 'btn-collapse',
						text : '收起'
					} */]
				} ]
			} ]
		});

		me.callParent(arguments);
	}

});